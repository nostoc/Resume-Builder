
import axios from 'axios';
import { toast } from 'react-toastify';


export const getResume = () => async (dispatch, getState) => {
  try {
    const token = getState().auth.token;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await axios.get('http://localhost:5000/api/resume/generate', config);
    
    dispatch({
      type: "GET_RESUME",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "RESUME_ERROR",
      payload: { msg: err.response.statusText, status: err.response.status },
    });
    toast.error('Failed to load resume!');
  }
};
