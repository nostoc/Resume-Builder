const initialState = {
  resumes: [],
  resume: null,
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_RESUMES":
    case "GET_USER_RESUMES_SUCCESS":
      return {
        ...state,
        resumes: action.payload,
        loading: false,
        error: null,
      };
    case "GET_USER_RESUMES_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "GET_RESUME":
      return {
        ...state,
        resume: action.payload,
        loading: false,
        error: null,
      };
    case "CREATE_RESUME":
    case "SAVE_RESUME":
      return {
        ...state,
        resumes: [action.payload, ...state.resumes],
        loading: false,
        error: null,
      };
    case "UPDATE_RESUME":
      return {
        ...state,
        resumes: state.resumes.map((resume) =>
          resume._id === action.payload._id ? action.payload : resume
        ),
        resume: action.payload,
        loading: false,
        error: null,
      };
    case "DELETE_RESUME":
      return {
        ...state,
        resumes: state.resumes.filter((resume) => resume._id !== action.payload),
        loading: false,
        error: null,
      };
    case "LOADING_RESUMES":
      return {
        ...state,
        loading: true,
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