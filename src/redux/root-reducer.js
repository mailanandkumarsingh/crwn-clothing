// This is the Base Reducer that stores the Global store of the app
// it combines all the Reducers and there individual stores/states
// to give one unified GLOBAL STORE that is the source of truth
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], //this is the place where we define the reducers to
  // be persisted, since userReducer is already persisted by Firebase
  // we are only going to store cartReducer
};

export default persistReducer(persistConfig, rootReducer);
