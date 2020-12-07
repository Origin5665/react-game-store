import { currentItemPrice, getTotal } from '../../utils/utils';

const initialState = {
   cart: {},
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

   switch (action.type) {

      /* Добавляет товар в карзину */

      case SET_CART_ITEM: {

         // Переменная для формирования именнованного ключа объекта
         const ObjID = `${action.payload.name}__${action.payload.type}__${action.payload.edition}`;

         /* Переменная с текущим товаром по ключу, 
            если товара нет - создает,
            если есть - добавляет в массив*/

         const currentObjCart = !state.cart[ObjID]
            ? [action.payload]
            : [...state.cart[ObjID].items, action.payload]

         /* У каждого товара сформируется свой ключ:объект (по цене и версии), с подсчетом цены */

         const newCart = {
            ...state.cart,
            [ObjID]: {
               items: currentObjCart,
               currentItemTotalPrice: currentItemPrice(currentObjCart)
            }
         };

         /* Общее число всех товаров и общая цена */
         const count = getTotal(newCart, 'items.length')
         const price = getTotal(newCart, 'currentItemTotalPrice')

         /* Формирование итогового объекта карзины */
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
         state.cart[action.payload].items[0]]

         const newItems = {
            ...state.cart,
            [action.payload]: {
               items: newObjItem,
               currentItemTotalPrice: currentItemPrice(newObjItem)
            }
         }
         const count = getTotal(newItems, 'items.length');
         const price = getTotal(newItems, 'currentItemTotalPrice')
         return {
            ...state,
            cart: newItems,
            count,
            price
         }

      };

      /* Уменьшает кол-во товара на -1 */
      case REMOVE_ITEM: {
         const prevObjItems = state.cart[action.payload].items;

         /* Если длинна больше 1 - уменьшаем число товаров, иначе оставляем прежним */
         const newObjItem = prevObjItems.length > 1
            ? state.cart[action.payload].items.slice(1)
            : prevObjItems

         const newItems = {
            ...state.cart,
            [action.payload]: {
               items: newObjItem,
               currentItemTotalPrice: currentItemPrice(newObjItem)
            }
         };

         const count = getTotal(newItems, 'items.length');
         const price = getTotal(newItems, 'currentItemTotalPrice');

         return {
            ...state,
            cart: newItems,
            count,
            price
         }
      };

      /* Обнуляет карзину */
      case SET_EMPTY_CART: {
         return {
            ...state,
            cart: {},
            price: 0,
            count: 0
         }
      }

      /* Удаляет весь товар */
      case REMOVE_CART_ITEM: {

         const newCart = { ...state.cart }
         const currentTotalPrice = newCart[action.payload].currentItemTotalPrice;
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