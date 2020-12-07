import { combineReducers } from 'redux';
/* @Reducers */
import cart from './cartReducer';
import filters from './filtersReducer';
import store from './storeReducer';

const rootReducer = combineReducers({ cart, filters, store });

export default rootReducer;