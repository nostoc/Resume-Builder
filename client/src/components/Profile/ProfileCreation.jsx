import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  saveProfileData,
  updateFormData,
} from "../../redux/actions/profileActions";
import PersonalInfo from "./steps/PersonalInfo";
import Education from "./steps/Education";
import Experience from "./steps/Experience";
import Skills from "./steps/Skills";
import Projects from "./steps/Projects";
import Achievements from "./steps/Achievements";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ResumePreview from "../ResumePreview";

// Import FontAwesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGraduationCap,
  faBriefcase,
  faWrench,
  faLightbulb,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

const ProfileCreation = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    { label: "Personal Information", component: PersonalInfo, icon: faUser },
    { label: "Education", component: Education, icon: faGraduationCap },
    { label: "Experience", component: Experience, icon: faBriefcase },
    { label: "Skills", component: Skills, icon: faWrench },
    { label: "Projects", component: Projects, icon: faLightbulb },
    { label: "Achievements", component: Achievements, icon: faTrophy },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profile = useSelector((state) => state.profile.profile);
  const token = useSelector((state) => state.auth.token);
  const [formData, setFormData] = useState(profile || {});

  const handleSave = async () => {
    try {
      await dispatch(saveProfileData(formData, token, navigate));
      toast.success("Profile saved successfully!");
    } catch (error) {
      toast.error("Failed to save profile!");
    }
  };

  const handleChange = (stepData) => {
    setFormData({ ...formData, ...stepData });
    dispatch(updateFormData({ ...formData, ...stepData }));
  };

  const handleTemplateChange = (template) => {
    const updatedData = { ...formData, selectedTemplate: template };
    setFormData(updatedData);
    dispatch(updateFormData(updatedData));
  };

  const renderStepContent = (StepComponent) => {
    return <StepComponent onChange={handleChange} data={formData} />;
  };

  return (
    <div className="flex w-full max-w-7xl mx-auto p-6 font-montserrat bg-gray-50 rounded-lg shadow-lg h-screen">
      <div className="w-1/2 pr-6 border-r-2 border-gray-300 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Create Your Profile</h2>
          <div className="flex space-x-4">
            <button
              onClick={() => handleTemplateChange(1)}
              className={`py-2 px-4 rounded-lg transition-all duration-300 ${
                formData.selectedTemplate === 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              }`}
            >
              Template 1
            </button>
            <button
              onClick={() => handleTemplateChange(2)}
              className={`py-2 px-4 rounded-lg transition-all duration-300 ${
                formData.selectedTemplate === 2
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              }`}
            >
              Template 2
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
          {steps.map((step, index) => (
            <div key={index} className="mb-4">
              <div
                className="cursor-pointer p-4 rounded-lg bg-gray-200 hover:bg-gray-300 transition-all duration-300 flex items-center"
                onClick={() => setActiveStep(index)}
              >
                <FontAwesomeIcon icon={step.icon} className="mr-2" />
                <h3 className="text-lg font-semibold">{step.label}</h3>
              </div>
              {activeStep === index && (
                <div className="mt-2 p-4 bg-gray-50 border border-gray-300 rounded-lg">
                  {renderStepContent(step.component)}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-6">
          <button
            disabled={activeStep === 0}
            onClick={() => setActiveStep(activeStep - 1)}
            className={`py-2 px-4 rounded-lg transition-all duration-300 ${
              activeStep === 0
                ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                : "bg-gray-600 text-white hover:bg-gray-700"
            }`}
          >
            Back
          </button>
          {activeStep === steps.length - 1 ? (
            <button
              onClick={handleSave}
              className="bg-green-500 text-white py-2 px-4 rounded-lg hover:opacity-90 transition-all duration-300"
            >
              Finish
            </button>
          ) : (
            <button
              onClick={() => setActiveStep(activeStep + 1)}
              className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:opacity-90 transition-all duration-300"
            >
              Next
            </button>
          )}
        </div>
      </div>

      <div className="w-1/2 pl-6">
        <div className="bg-white p-6 rounded-lg shadow-sm h-full overflow-auto">
          <ResumePreview data={formData} />
        </div>
      </div>
    </div>
  );
};

export default ProfileCreation;
