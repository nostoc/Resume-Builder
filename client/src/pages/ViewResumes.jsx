// src/components/ViewResumes.jsx
import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserResumes } from '../redux/actions/resumeActions'; // Assuming you have an action to fetch resumes

const ViewResumes = () => {
  const dispatch = useDispatch();
  const resumes = useSelector((state) => state.resume.resumes); // Assuming resumes are stored in resume state
  const error = useSelector((state) => state.resume.error);

  useEffect(() => {
    dispatch(getUserResumes());
  }, [dispatch]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!resumes) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Your Resumes</h1>
      {resumes.length === 0 ? (
        <div>No resumes found.</div>
      ) : (
        <ul>
          {resumes.map((resume) => (
            <li key={resume.id}>
              <h2>{resume.title}</h2>
              <p>{resume.description}</p>
              {/* Add more details or a link to view/edit the resume */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewResumes;
