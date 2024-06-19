/* eslint-disable react/prop-types */

import Template1 from "../components/templates/Template1";
import Template2 from "../components/templates/Template2";

const ResumePreview = ({ data }) => {
  
  const selectedTemplate = data.selectedTemplate || 1;

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 1:
        return <Template1 data={data} />;
      case 2:
        return <Template2 data={data} />;
      default:
        return <div>Invalid template selected</div>;
    }
  };

  return (
    <div>
      
      {renderTemplate()}
    </div>
  );
};

export default ResumePreview;