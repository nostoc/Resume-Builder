import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserResumes } from "../redux/actions/resumeActions";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const ViewResumes = () => {
  const dispatch = useDispatch();
  const resumes = useSelector((state) => state.resumes.resumes);
  const loading = useSelector((state) => state.resumes.loading);
  const error = useSelector((state) => state.resumes.error);

  useEffect(() => {
    dispatch(getUserResumes());
  }, [dispatch]);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto p-8 text-center">
          <div className="text-xl">Loading your resumes...</div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="container mx-auto p-8 text-center">
          <div className="text-red-500 text-xl">Error: {error.message}</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto p-8 font-outfit">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800">My Resumes</h1>
          <Link to="/profile/create">
            <button className="bg-ash-blue text-white hover:bg-white border-2 border-transparent hover:border-ash-blue hover:text-ash-blue rounded-full px-6 py-2 transition-all duration-300 ease-in-out text-lg">
              + Create New Resume
            </button>
          </Link>
        </div>

        {!resumes || resumes.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-slate-600 text-xl mb-6">
              You haven't created any resumes yet.
            </div>
            <Link to="/profile/create">
              <button className="bg-ash-blue text-white hover:bg-white border-2 border-transparent hover:border-ash-blue hover:text-ash-blue rounded-full px-8 py-3 transition-all duration-300 ease-in-out text-lg">
                Create Your First Resume
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumes.map((resume) => (
              <div
                key={resume._id}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-2xl font-semibold text-slate-800 mb-2">
                  {resume.profile?.personalInfo?.name || "Untitled Resume"}
                </h2>
                <p className="text-slate-600 mb-4">
                  Template {resume.selectedTemplate || 1}
                </p>
                <p className="text-sm text-slate-500 mb-4">
                  Created: {new Date(resume.createdAt).toLocaleDateString()}
                </p>
                <div className="flex gap-3">
                  <Link
                    to={`/resume/${resume._id}`}
                    className="flex-1 bg-ash-blue text-white text-center py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    View
                  </Link>
                  <Link
                    to={`/edit-resume/${resume._id}`}
                    className="flex-1 bg-slate-600 text-white text-center py-2 rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ViewResumes;
