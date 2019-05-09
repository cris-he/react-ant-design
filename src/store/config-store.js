import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'

// reducers
import rootReducer from '../reducers';

// sagas
import rootSaga from '../sagas';

// middleware
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];


export default function configStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middlewares))
    );

    sagaMiddleware.run(rootSaga);

    return store;

}