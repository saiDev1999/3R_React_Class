import { applyMiddleware, legacy_createStore } from "redux";
import { bookReducer } from "./books/reducer";
import { combinedReducer } from "./combineReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";

export const reduxStore = legacy_createStore(
  combinedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
