import { combineReducers } from 'redux';

import cart from './cartReducer';
import filters from './filtersReducer';
import store from './storeReducer';

const rootReducer = combineReducers({ cart, filters, store });

export default rootReducer;