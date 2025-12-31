import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getResume } from "../redux/actions/resumeActions";
import Template1 from "../components/templates/Template1";
import Template2 from "../components/templates/Template2";
import { useReactToPrint } from "react-to-print";

const ViewResume = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const resume = useSelector((state) => state.resumes.resume);
  const [loading, setLoading] = useState(true);
  const componentRef = useRef();

  useEffect(() => {
    setLoading(true);
    dispatch(getResume(id)).finally(() => setLoading(false));
  }, [dispatch, id]);

  const handleDownload = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `Resume_${resume?.profile?.personalInfo?.name || "Document"}`,
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!resume) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-xl text-gray-600 mb-4">Resume not found</p>
        <button
          onClick={() => navigate("/resumes")}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Back to Resumes
        </button>
      </div>
    );
  }

  const renderTemplate = () => {
    const templateId = resume.selectedTemplate || 1;
    const templateProps = {
      data: resume.profile,
      ref: componentRef,
    };

    switch (templateId) {
      case 1:
        return <Template1 {...templateProps} />;
      case 2:
        return <Template2 {...templateProps} />;
      default:
        return <Template1 {...templateProps} />;
    }
  };

  return (
    <div className="container mx-auto p-6 font-montserrat">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">View Resume</h1>
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/resumes")}
            className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Back to List
          </button>
          <button
            onClick={() => navigate(`/edit-resume/${id}`)}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Edit Resume
          </button>
          <button
            onClick={handleDownload}
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            Download PDF
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        {renderTemplate()}
      </div>
    </div>
  );
};

export default ViewResume;
