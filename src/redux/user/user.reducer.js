import { UserActionTypes } from "./user.types";
// This is the individual reducer(child of Root Reducer)
// that stores the currentUser, and will listen to those specific actions
const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
