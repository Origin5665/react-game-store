import { getFetchData } from "../../api";

const initialState = {
   dataStore: []
};

// Types:
const SET_STORE = 'SET_STORE'

// Actions:
export const setDataStore = (data) => ({ type: SET_STORE, payload: data })

// Thunk:
export const fetchDataStore = (category, sortBy) => async (dispatch) => {
   const response = await getFetchData(category, sortBy);
   dispatch(setDataStore(response))
};

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
