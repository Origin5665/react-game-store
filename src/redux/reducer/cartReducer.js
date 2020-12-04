const initialState = {
   cart: {

   },
   price: 0,
   count: 0
};

// @Types:
const SET_CART_ITEM = "SET_CART_ITEM";
const SET_EMPTY_CART = "SET_EMPTY_CART";
const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";

// @Actions:
export const setCart = obj => ({ type: SET_CART_ITEM, payload: obj });
export const removeCartItem = id => ({ type: REMOVE_CART_ITEM, payload: id });
export const addItem = id => ({ type: ADD_ITEM, payload: id })
export const removeItem = id => ({ type: REMOVE_ITEM, payload: id })
export const setEmpty = () => ({ type: SET_EMPTY_CART });

// @Reducer:
const cartReducer = (state = initialState, action) => {
   console.log(action.payload)

   const get = (obj, path) => {
      const [first, ...keys] = path.split('.');
      return keys.reduce((val, key) => {
         return val[key];
      }, obj[first]);
   };

   const getTotal = (obj, path) => {
      return Object.values(obj).reduce((sum, obj) => {
         const value = get(obj, path);
         return sum + value;
      }, 0);
   };
   const currentItemPrice = (obj) => obj.reduce((sum, obj) => obj.price + sum, 0)

   switch (action.type) {

      /* Добавляет товар в карзину */
      case SET_CART_ITEM: {

         // Функция подсчета общей стоймости:
         const ObjID = `${action.payload.name}__${action.payload.type}__${action.payload.edition}`



         const currentObjCart = !state.cart[ObjID]
            ? [action.payload]
            : [...state.cart[ObjID].items, action.payload]

         const newCart = {
            ...state.cart,
            [ObjID]: {
               items: currentObjCart,
               totalObjPrice: currentItemPrice(currentObjCart)
            }
         }

         /* Общее число товаров и ценна */
         const count = getTotal(newCart, 'items.length')
         const price = getTotal(newCart, 'totalObjPrice')
         // const count = Object.keys(newCart).reduce((sum, key) => newCart[key].items.length + sum, 0)
         // const price = Object.keys(newCart).reduce((sum, key) => newCart[key].totalObjPrice + sum, 0)


         // const items = Object.values(newCart).map(obj => obj.items)
         // const total = Object.values(items).flat()

         return {
            ...state,
            cart: newCart,
            count,
            price
         };

      };

      /* Увеличивает кол-во товара на +1 */

      case ADD_ITEM: {
         const newObjItem = [...state.cart[action.payload].items,
         state.cart[action.payload].items[0]

         ]

         const newItems = {
            ...state.cart,
            [action.payload]: {
               items: newObjItem,
               totalObjPrice: currentItemPrice(newObjItem)
            }
         }
         const count = getTotal(newItems, 'items.length');
         const price = getTotal(newItems, 'totalObjPrice')
         return {
            ...state,
            cart: newItems,
            count,
            price
         }

      };
      case REMOVE_ITEM: {
         const prevItems = state.cart[action.payload].items;
         console.log(prevItems);

         const newObjItem = prevItems.length > 1
            ? state.cart[action.payload].items.slice(1)
            : prevItems

         const newItems = {
            ...state.cart,
            [action.payload]: {
               items: newObjItem,
               totalObjPrice: currentItemPrice(newObjItem)
            }
         }
         const count = getTotal(newItems, 'items.length');
         const price = getTotal(newItems, 'totalObjPrice')
         return {
            ...state,
            cart: newItems,
            count,
            price
         }

      }


      /* Обнуляет карзину */
      case SET_EMPTY_CART: {
         return {
            ...state,
            cart: {},
            price: 0,
            count: 0
         };
      }
      /* Удаляет весь товар */
      case REMOVE_CART_ITEM: {

         const newCart = { ...state.cart }
         const currentTotalPrice = newCart[action.payload].totalObjPrice;
         const currentTotalCount = newCart[action.payload].items.length;

         delete newCart[action.payload]

         return {
            ...state,
            cart: newCart,
            price: state.price - currentTotalPrice,
            count: state.count - currentTotalCount
         };
      };

      default:
         return state;
   };
};

export default cartReducer;