const initialState = {
  resumes: [],
  resume: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_RESUMES":
      return {
        ...state,
        resumes: action.payload,
      };
    case "GET_RESUME":
      return {
        ...state,
        resume: action.payload,
      };
    case "CREATE_RESUME":
      return {
        ...state,
        resumes: [action.payload, ...state.resumes],
      };
    case "UPDATE_RESUME":
      return {
        ...state,
        resumes: state.resumes.map((resume) =>
          resume._id === action.payload._id ? action.payload : resume
        ),
        resume: action.payload,
      };
    case "DELETE_RESUME":
      return {
        ...state,
        resumes: state.resumes.filter((resume) => resume._id !== action.payload),
      };
    default:
      return state;
  }
}
  /*const resumeReducer = (state = initialState, action) => {
    
    switch (action.type) {
      case "GET_USER_RESUMES_SUCCESS":
        return {
          ...state,
          resumes: action.payload,
        };
      case "GET_USER_RESUMES_FAILURE":
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default resumeReducer;
  */