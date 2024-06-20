// src/components/ResumesList.jsx
import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getResumes } from "../redux/actions/resumeActions";
import { Link } from "react-router-dom";

const ResumeList = () => {
  const dispatch = useDispatch();
  const resumes = useSelector((state) => state.resumes.resumes);

  useEffect(() => {
    dispatch(getResumes());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">List of Resumes</h1>
      {resumes.length === 0 ? (
        <p>No resumes found</p>
      ) : (
        <ul>
          {resumes.map((resume) => (
            <li key={resume._id} className="mb-2">
              <Link to={`/resume/${resume._id}`} className="text-blue-500 underline">
                {resume.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResumeList;
