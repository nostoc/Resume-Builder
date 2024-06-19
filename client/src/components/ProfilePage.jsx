import { useRef, useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import Template1 from "./Template1";
import Template2 from "./Template2";

const ProfilePage = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("Template1");
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Resume",
    pageStyle: "@page { size: A4; margin: 20mm; }",
  });

  const templates = {
    Template1: Template1,
    Template2: Template2,
  };

  const SelectedTemplateComponent = templates[selectedTemplate];

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-4">
        <div className="space-x-4">
          <button
            onClick={() => setSelectedTemplate("Template1")}
            className={`py-2 px-4 rounded-lg ${
              selectedTemplate === "Template1" ? "bg-blue-600 text-white" : "bg-gray-300 text-black"
            }`}
          >
            Template 1
          </button>
          <button
            onClick={() => setSelectedTemplate("Template2")}
            className={`py-2 px-4 rounded-lg ${
              selectedTemplate === "Template2" ? "bg-blue-600 text-white" : "bg-gray-300 text-black"
            }`}
          >
            Template 2
          </button>
        </div>
        <button
          onClick={handlePrint}
          className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Download PDF
        </button>
      </div>
      <div className="mt-4">
        <SelectedTemplateComponent ref={componentRef} />
      </div>
    </div>
  );
};

export default ProfilePage;
