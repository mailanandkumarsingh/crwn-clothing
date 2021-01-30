import { all, call } from "redux-saga/effects";
import { fetchCollectionsStart } from "./shop/shop.sagas";
import { userSagas } from "./user/user.sagas";
import { cartSagas } from "./cart/cart.sagas";
import { shopSagas } from "./shop/shop.sagas";

// We create a root saga that will be called in the store.js
// sagaMiddleware.run(rootSaga), this is the place where all the
// sagas of the application are started
export default function* rootSaga() {
  // all the sagas of the application are started
  yield all([
    call(fetchCollectionsStart),
    call(userSagas),
    call(cartSagas),
    call(shopSagas),
  ]);
}
