import { legacyCreateStore } from "redux";
import { bookReducer } from "./books/reducer";

export const redux = legacyCreateStore(bookReducer);
