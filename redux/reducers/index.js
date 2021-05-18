import { combineReducers } from "redux";
import postReducer from "./postReducer.js";
import authReducer from "./authReducer.js";

export default combineReducers({
  posts: postReducer,
  auth: authReducer,
});
