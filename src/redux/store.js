import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import rootReducer from './reducer/index'


const middleware = applyMiddleware(thunk, logger)

const store = createStore(rootReducer, middleware);

window.store = store;
export default store;