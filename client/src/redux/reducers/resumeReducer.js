
  const initialState = {
    resumes: [],
    error: null,
  };
  
  const resumeReducer = (state = initialState, action) => {
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
  