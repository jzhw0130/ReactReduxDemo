import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import update from './Reducer'

export default () => {

    const reducers = {
        ...update
    }; 
    
    const applyMiddlewares = __DEV__ ? 
        applyMiddleware(...[
            thunk, 
            require('redux-logger').createLogger({
                predicate: () => false   //so that it won't print out in Console panel
            })
        ]) : 
        applyMiddleware(...[thunk]);
    
    return createStore(
        combineReducers(reducers),
        __DEV__ ? require('redux-devtools-extension').composeWithDevTools(applyMiddlewares) : applyMiddlewares
    );
}