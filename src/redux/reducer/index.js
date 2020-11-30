import { combineReducers } from 'redux';

import cartReducer from './cartReducer';
import filtersReducer from './filtersReducer';
import storeReducer from './storeReducer';

const rootReducer = combineReducers({
   store: storeReducer,
   filters: filtersReducer,
   cart: cartReducer
});

export default rootReducer;