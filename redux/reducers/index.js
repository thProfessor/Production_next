import { combineReducers } from "redux";
import postReducer from "./postReducer.js";
import authReducer from "./auth.reducer";

export default combineReducers({
  posts: postReducer,
  auth: authReducer,
});
