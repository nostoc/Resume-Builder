import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../redux/actions/profileActions';
import Template1 from './templates/Template1';
import Template2 from './templates/Template2';

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

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 1:
        return <Template1 />;
      case 2:
        return <Template2 />;
      default:
        return <div>Invalid template selected</div>;
    }
  };

  
  return (
    <div>
      
      <div ref={resumeRef} className="resume-container">
        {renderTemplate()}
      </div>
      
    </div>
  );
};

export default GenerateResume;
