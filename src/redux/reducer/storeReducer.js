
const initialState = {
   dataStore: []
};

// Types:
const SET_STORE = 'SET_STORE'

// Actions:
export const setDataStore = (data) => ({ type: SET_STORE, payload: data })


// Reducer:
const storeReducer = (state = initialState, action) => {
   switch (action.type) {

      case SET_STORE:
         return {
            ...state,
            dataStore: action.payload
         };

      default:
         return state;
   };
};

export default storeReducer;
