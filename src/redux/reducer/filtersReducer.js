
const initialState = {
   category: 0,
   sortBy: 'popular'
}
// Types:
const SET_SORT = 'SET_SORT';
const SET_CATEGORY = 'SET_CATEGORY';

// Action:
export const setNewSort = (type) => ({ type: SET_SORT, payload: type })
export const setNewCategory = (type) => ({ type: SET_CATEGORY, payload: type })

// Reducer:

const filtersReducer = (state = initialState, action) => {
   switch (action.type) {

      case SET_SORT:
         return { ...state, sortBy: action.payload }
      case SET_CATEGORY:
         return { ...state, category: action.payload }
      default:
         return state
   }
};

export default filtersReducer;
