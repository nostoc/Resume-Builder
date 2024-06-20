import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../redux/actions/profileActions';
import Template1 from './templates/Template1';
import Template2 from './templates/Template2';
import { useReactToPrint } from 'react-to-print';

const GenerateResume = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.profile);
  const selectedTemplate = useSelector((state) => state.profile.selectedTemplate);
  const error = useSelector((state) => state.profile.error);
  const resumeRef = useRef();

  useEffect(() => {
    if (!profile) {
      dispatch(getProfile());
    }
  }, [dispatch, profile]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!profile || !selectedTemplate) {
    return <div>Loading...</div>;
  }

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: profile ? `resume_${profile.personalInfo.name}` : "resume",
    pageStyle: "@page { size: A4; margin: 20mm; }",
  });

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 1:
        return <Template1 ref={resumeRef} />;
      case 2:
        return <Template2 ref={resumeRef} />;
      default:
        return <div>Invalid template selected</div>;
    }
  };

  return (
    <div>
      <div ref={resumeRef} className="resume-container">
        {renderTemplate()}
      </div>
      <button onClick={handlePrint} className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Download PDF
      </button>
    </div>
  );
};

export default GenerateResume;
