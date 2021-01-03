// This is the Base Reducer that stores the Global store of the app
// it combines all the Reducers and there individual stores/states
// to give one unified GLOBAL STORE that is the source of truth
import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";

export default combineReducers({
  user: userReducer,
});
