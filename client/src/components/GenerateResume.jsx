import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../redux/actions/profileActions';
import Template1 from './templates/Template1';
import Template2 from './templates/Template2';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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

  const downloadResume = async () => {
    const input = resumeRef.current;

    if (!input) {
      console.error('Resume element not found!');
      return;
    }

    try {
      const canvas = await html2canvas(input, { scale: 2 });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('portrait', 'mm', 'a4');
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('resume.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div>
      <h1>Generated Resume</h1>
      <div ref={resumeRef} className="resume-container">
        {renderTemplate()}
      </div>
      <button
        onClick={downloadResume}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:opacity-90"
      >
        Download Resume
      </button>
    </div>
  );
};

export default GenerateResume;
