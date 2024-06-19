// src/redux/reducers/formReducer.js
import { UPDATE_FORM_DATA, RESET_FORM_DATA } from '../actions/formActions';

const initialState = {
  formData: {},
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM_DATA:
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload,
        },
      };
    case RESET_FORM_DATA:
      return {
        ...state,
        formData: {},
      };
    default:
      return state;
  }
};

export default formReducer;
