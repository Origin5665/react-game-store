
const initialState = {
   cartData: []
};

// Types:
const SET_CART = 'SET_CART'

// Actions:
export const setDataCart = (data) => ({ type: SET_CART, payload: data })


// Reducer:
const cartReducer = (state = initialState, action) => {
   switch (action.type) {

      case SET_CART:
         return {
            ...state,
            cartData: action.payload
         };

      default:
         return state;
   };
};

export default cartReducer;