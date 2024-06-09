import { UPDATE_PROFILE_FIELD, SAVE_PROFILE_DATA } from "../actions/types";

const initialState = {
  personalInfo: {
    name: "",
    email: "",
    phone: "",
    address: "",
    
  },
  education: {
    institution: "",
    degree: "",
    startDate: "",
    endDate: "",
    description: "",
  },
  experience: {
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    description: "",
  },
  skills: {
    skill: "",
  },
  projects: {
    name: "",
    description: "",
    link: "",
  },
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_FIELD:
      return {
        ...state,
        [action.payload.section]:{
          ...state[action.payload.section],
          ...action.payload.fieldData,
        },
        
      };
    case SAVE_PROFILE_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;