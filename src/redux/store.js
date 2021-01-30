// This is the place where the store is created and this is what is used
// by the <Provider> in index.js
import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
// import { fetchCollectionsStart } from "./shop/shop.sagas";
import rootSaga from "./root-saga";
import rootReducer from "./root-reducer";

const sagaMiddleware = createSagaMiddleware();
//const middlewares = [thunk];
const middlewares = [sagaMiddleware];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);

// export default { store, persistor };
