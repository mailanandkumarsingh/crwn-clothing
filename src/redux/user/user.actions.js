import { UserActionTypes } from "./user.types";
// This is the action creator for UserReducer, the action type and payload
// are created and passed to UserReducer from here
export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});