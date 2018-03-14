import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from "redux-logger";
import thunk from 'redux-thunk';

export default (rootReducer, rootSaga) => {

    /* Redux Configuration */
    const middleware = [];
    const enhancers = [];

    /* Async Actions Middleware */
    middleware.push(thunk);

    /* Logger Middleware */
    if (process.env.NODE_ENV === 'development') {
        middleware.push(logger);
    }

    /* Saga Middleware */
    const sagaMonitor = null;

    const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
    middleware.push(sagaMiddleware);

    /* Assemble Middleware */
    enhancers.push(applyMiddleware(...middleware));

    const store = createStore(rootReducer, compose(...enhancers));

    // kick off root saga
    let sagasManager = sagaMiddleware.run(rootSaga);

    return {
        store,
        sagasManager,
        sagaMiddleware
    }
}
