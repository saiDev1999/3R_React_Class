import { combineReducers } from "redux";
import { profileReducer } from "./profile/reducer";
import { bookReducer } from "./books/reducer";

export const combinedReducer = combineReducers({
  profile: profileReducer,
  books: bookReducer,
});
