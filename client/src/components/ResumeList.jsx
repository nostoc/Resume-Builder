import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getResumes } from "../redux/actions/resumeActions";
import { Link } from "react-router-dom";

const ResumeList = () => {
  const dispatch = useDispatch();
  const resumes = useSelector((state) => state.resumes.resumes);

  useEffect(() => {
    dispatch(getResumes());
  }, [dispatch]);

  const formatResumeTitle = (resume,index)=>{
    const personalInfo = resume.profile.personalInfo;
    const name = personalInfo.name ? `${personalInfo.name} Resume` : `Resume ${index + 1}`;
    return `${name}_${index + 1}`; 
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        My Resumes
      </h1>
      {resumes.length === 0 ? (
        <p className="text-center text-gray-600">No resumes found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumes.map((resume,index) => (
            <div
              key={resume._id}
              className="border rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white"
            >
              <Link to={`/resume/${resume._id}`} className="block text-center">
                <h2 className="text-xl font-semibold text-gray-700">
                  {formatResumeTitle(resume,index)}
                </h2>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResumeList;
