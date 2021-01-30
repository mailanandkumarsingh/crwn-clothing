// it will hold the saga code related to shop
// this is where the async call will be used using generators
// creating effects of listening for an action or creating an action
// takeEvery - listens to everyaction of a specific type that we pass to it
import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

// we are going to listen to specific shop action types
// this is the worker function
import ShopActionTypes from "./shop.types";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");

    // this is an async call, once it finished it moves to the next call
    // remember that in sagas calling yield on a promise/async event
    // returns the resolved promise , so snapshot variable below will be
    // the resolved promise value, like the await in asyn/await
    const snapshot = yield collectionRef.get();
    // 'call' is used to run a method is blocking call
    // call is used instead of a direct method call because we want to
    // test each of the function calls in a generator that return a value
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    /* General rule of thumb i have noticed is that if subsequent calls need
    value from a previous async or function call, u should use effects of saga
    like call, put and yield the values. Like in the above example, collectionRef.get()
    is an async call that yields snapshot, which is needed by the function 
    converCollectionsSnapshotToMap, which is called using call effects, which again yields
    the collectionsMap that is needed by fetchCollectionsSuccess.
    */
    // put is used to call an action creator with objects, its non-blocking call
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
  //The async request begins here
  // collectionRef
  //   .get()
  //   .then((snapshot) => {
  //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //     dispatch(fetchCollectionsSuccess(collectionsMap));
  //   })
  //   .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
}
// Write a generator function
// this is watcher function
export function* fetchCollectionsStart() {
  //it will pause when a specific action type comes in , and that is
  // achieved by using yield
  // takeEvery takes 2 parameters , one is the specific action and the
  // other is the generator to function that will yield/perform a
  // set of other pause and resume actions
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
