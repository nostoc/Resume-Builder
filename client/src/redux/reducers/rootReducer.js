// src/redux/reducers/rootReducer.js

import { combineReducers } from "redux";
import authReducer from "./authReducer.js";
import profileReducer from "./profileReducer.js";

export default combineReducers({
  auth: authReducer,
  profile: profileReducer,
});
