import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import rootReducer from './reducer/index'


const middleware = applyMiddleware(thunk, logger)
const enhencer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, enhencer(middleware));

window.store = store;
export default store;