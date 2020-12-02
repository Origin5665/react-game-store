const initialState = {
   cart: {},
   price: 0,
   count: 0
};

// @Types:
const SET_CART = "SET_CART";
const SET_PRICE = "SET_TOTAL_PRICE";
const SET_COUNT = "SET_TOTAL_COUNT";

// @Actions:
export const setCart = (obj) => ({ type: SET_CART, payload: obj });
export const setPrice = (price) => ({ type: SET_PRICE, payload: price });
export const setCount = (count) => ({ type: SET_COUNT, payload: count });

// @Reducer:
const cartReducer = (state = initialState, action) => {
   switch (action.type) {

      case SET_CART:
         const newCart = {
            ...state.cart,
            [action.payload.id]:
               !state.cart[action.payload.id]
                  ? [action.payload]
                  : [...state.cart[action.payload.id], action.payload]

         }

         const total = Object.values(newCart).flat()



         return {
            ...state,
            cart: newCart,
            count: Object.values(newCart).flat().length,
            price: total.reduce((sum, obj) => obj.price + sum, 0)
         };

      case SET_PRICE:
         return {
            ...state,
            price: action.payload
         };

      case SET_COUNT:
         return {
            ...state,
            count: action.payload
         };

      default:
         return state;
   };
};

export default cartReducer;