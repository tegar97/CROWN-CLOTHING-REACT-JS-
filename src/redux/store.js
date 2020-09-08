import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist'
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import rootReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga';

import {fetchCollectionStart} from './collections/shop.sagas'
const sagaMiddleware = createSagaMiddleware()

const middlewares  = [sagaMiddleware];

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}
export const store = createStore(rootReducer,applyMiddleware(...middlewares))
sagaMiddleware.run(fetchCollectionStart)

export const persistor = persistStore(store)


