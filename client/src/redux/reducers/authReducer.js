// src/redux/reducers/authReducer.js

import {
  LOGIN_USER,
  REGISTER_USER,
  LOGIN_FAILURE,
  REGISTER_FAILURE,
} from "../actions/types";

const initialState = {
  user: null,
  isRegistered: false,
  loading: false,
  error: null, // Add error field to store error messages
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
    case REGISTER_USER:
      case "UPDATE_USER":
      return {
        ...state,
        user: action.payload,
        isRegistered: true,
        token: action.payload.token,
        loading: false,
        error: null, // Clear any previous errors on success
      };
    case LOGIN_FAILURE:
    case REGISTER_FAILURE:
      return {
        ...state,
        isRegistered: false,
        user: null,
        error: action.payload, // Set error message in state
        loading: false,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        user: null,
        isRegistered: false,
        token: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
