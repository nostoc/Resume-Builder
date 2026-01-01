import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getResumes, deleteResume } from "../redux/actions/resumeActions";
import { Link } from "react-router-dom";
import Layout from "./Layout";

const ResumeList = () => {
  const dispatch = useDispatch();
  const resumes = useSelector((state) => state.resumes.resumes);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);

  useEffect(() => {
    setLoading(true);
    dispatch(getResumes()).finally(() => setLoading(false));
  }, [dispatch]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this resume? This action cannot be undone.")) {
      setDeleting(id);
      try {
        await dispatch(deleteResume(id));
      } finally {
        setDeleting(null);
      }
    }
  };

  const formatResumeTitle = (resume, index) => {
    const personalInfo = resume.profile.personalInfo;
    const name = personalInfo.name
      ? `${personalInfo.name} Resume`
      : `Resume ${index + 1}`;
    return `${name} ${index + 1}`;
  };

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto p-6 font-montserrat">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        My Resumes
      </h1>
      {resumes.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600 mb-4">No resumes found</p>
          <Link
            to="/profile/create"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 inline-block"
          >
            Create Your First Resume
          </Link>
        </div>
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
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(resume._id)}
                  disabled={deleting === resume._id}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {deleting === resume._id ? "Deleting..." : "Delete"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      </div>
    </Layout>
  );
};

export default ResumeList;
