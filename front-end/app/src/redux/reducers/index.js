import { combineReducers } from "redux";
import sessions from "./sessionReducer";
import speakers from "./speakerReducer";

const rootReducer = combineReducers({
  sessions,
  speakers,
});

export default rootReducer;
