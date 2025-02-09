import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getResumeById, updateResume } from "../redux/actions/resumeActions";
import ProfileCreation from "../components/Profile/ProfileCreation";

const EditResume = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const resume = useSelector((state) => state.resumes.resume);
  const [formData, setFormData] = useState(resume || {});

  useEffect(() => {
    dispatch(getResumeById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (resume) {
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
      <ProfileCreation data={formData} onChange={setFormData} />
      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
};

export default EditResume;