import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getResume, updateResume } from "../redux/actions/resumeActions";
import ProfileCreation from "../components/Profile/ProfileCreation";

const EditResume = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const resume = useSelector((state) => state.resumes.resume);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (!resume || resume._id !== id) {
      dispatch(getResume(id));
    }
  }, [dispatch, id, resume]);

  useEffect(() => {
    console.log("Fetched resume: ",resume)
    if (resume && Object.keys(resume).length > 0) {
      console.log("Updating formData with:", resume); // Debugging
      setFormData(resume);
    }
  }, [resume]);

  const handleSave = () => {
    dispatch(updateResume(id, formData)).then(() => {
      navigate("/resumes");
    });
  };

  return (
    <div>
      <h1>Edit Resume</h1>
      <ProfileCreation
        key={formData?._id}
        data={formData}
        onChange={setFormData}
      />

      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
};

export default EditResume;