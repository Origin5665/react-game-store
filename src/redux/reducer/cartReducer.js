const initialState = {
   cart: {

   },
   price: 0,
   count: 0
};

// @Types:
const SET_CART = "SET_CART";
const SET_PRICE = "SET_TOTAL_PRICE";
const SET_COUNT = "SET_TOTAL_COUNT";
const CLEAR_CART = "CLEAR_CART";
const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";


// @Actions:
export const setCart = (obj) => ({ type: SET_CART, payload: obj });
export const setPrice = (price) => ({ type: SET_PRICE, payload: price });
export const setCount = (count) => ({ type: SET_COUNT, payload: count });
export const clearCart = () => ({ type: CLEAR_CART })
export const removeCartItem = (id) => ({ type: REMOVE_CART_ITEM, payload: id })

// @Reducer:
const cartReducer = (state = initialState, action) => {
   console.log(action.payload);
   switch (action.type) {



      case SET_CART:
         // Функция подсчета общей стоймости:
         const ObjID = `${action.payload.name}__${action.payload.type}__${action.payload.edition}`

         const currentItemPrice = (obj) => obj.reduce((sum, obj) => obj.price + sum, 0)

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

         const items = Object.values(newCart).map(obj => obj.items)
         const total = Object.values(items).flat()

         return {
            ...state,
            cart: newCart,
            count: Object.values(total).flat().length,
            price: currentItemPrice(total)
         };

      case SET_PRICE:
         return {
            ...state,
            price: action.payload
         };

      case CLEAR_CART: {
         return {
            ...state,
            cart: {},
            price: 0,
            count: 0
         }
      }
      case REMOVE_CART_ITEM: {
         const newCart = {
            ...state.cart
         }
         const currentTotalPrice = newCart[action.payload].totalObjPrice;
         const currentTotalCount = newCart[action.payload].items.length;
         delete newCart[action.payload]

         console.log(currentTotalCount);

         return {
            ...state,
            cart: newCart,
            price: state.price - currentTotalPrice,
            count: state.count - currentTotalCount

         }
      }

      default:
         return state;
   };
};

export default cartReducer;