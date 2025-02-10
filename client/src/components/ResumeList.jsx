import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getResumes, deleteResume } from "../redux/actions/resumeActions";
import { Link } from "react-router-dom";

const ResumeList = () => {
  const dispatch = useDispatch();
  const resumes = useSelector((state) => state.resumes.resumes);

  useEffect(() => {
    dispatch(getResumes());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteResume(id));
  };

  const formatResumeTitle = (resume, index) => {
    const personalInfo = resume.profile.personalInfo;
    const name = personalInfo.name
      ? `${personalInfo.name} Resume`
      : `Resume ${index + 1}`;
    return `${name} ${index + 1}`;
  };

  return (
    <div className="container mx-auto p-6 font-montserrat">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        My Resumes
      </h1>
      {resumes.length === 0 ? (
        <p className="text-center text-gray-600">No resumes found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumes.map((resume, index) => (
            <div
              key={resume._id}
              className="border rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white"
            >
              <Link to={`/resume/${resume._id}`} className="block text-center">
                <div className="flex flex-col items-center justify-center h-full">
                  <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    {formatResumeTitle(resume, index)}
                  </h2>
                  <p className="text-blue-500">
                    Created on:{" "}
                    {new Date(resume.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </Link>
              <div className="flex justify-between mt-4">
                <Link
                  to={`/edit-resume/${resume._id}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(resume._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResumeList;
