import { legacy_createStore } from "redux";
import { bookReducer } from "./books/reducer";
import { combinedReducer } from "./combineReducer";

export const reduxStore = legacy_createStore(combinedReducer);
