import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  saveProfileData,
  updateFormData,
} from "../../redux/actions/profileActions";
import { saveResumeData } from "../../redux/actions/resumeActions";
import PersonalInfo from "./steps/PersonalInfo";
import Education from "./steps/Education";
import Experience from "./steps/Experience";
import Skills from "./steps/Skills";
import Projects from "./steps/Projects";
import Achievements from "./steps/Achievements";
import Modal from "./Modal";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ResumePreview from "../ResumePreview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGraduationCap,
  faBriefcase,
  faWrench,
  faLightbulb,
  faTrophy,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

const ProfileCreation = () => {
  const [activeStep, setActiveStep] = useState(null);
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
  const [formData, setFormData] = useState({});
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    if (profile && Object.keys(profile).length > 0) {
      setFormData(profile); // This ensures the form fields are set properly
    }
  }, [profile]);

  const handleSave = () => {
    const {
      personalInfo,
      education,
      experience,
      skills,
      projects,
      achievements,
      selectedTemplate,
    } = formData;

    // Validation functions
    const isEmptyObject = (obj) => !obj || Object.keys(obj).length === 0;
    const isObjectFieldsEmpty = (obj) => {
      return Object.values(obj).some((value) => {
        if (typeof value === "string") {
          return !value.trim();
        }
        return !value;
      });
    };

    const isArrayItemsValid = (arr) => {
      return (
        arr && arr.length > 0 && arr.every((item) => !isObjectFieldsEmpty(item))
      );
    };

    const isEmptyArray = (arr) =>
      !arr || arr.length === 0 || arr.every((item) => isEmptyObject(item));

    // Track if there are any validation errors
    let hasErrors = false;

    // Check each section and show corresponding error message
    if (isEmptyObject(personalInfo) || isObjectFieldsEmpty(personalInfo)) {
      toast.error("Please complete the Personal Information section.");
      hasErrors = true;
    }
    if (!isArrayItemsValid(education)) {
      toast.error("Please complete the Education section.");
      hasErrors = true;
    }
    if (!isArrayItemsValid(experience)) {
      toast.error("Please complete the Experience section.");
      hasErrors = true;
    }
    if (isEmptyArray(skills)) {
      toast.error("Please complete the Skills section.");
      hasErrors = true;
    }
    if (!isArrayItemsValid(projects)) {
      toast.error("Please complete the Projects section.");
      hasErrors = true;
    }
    if (!isArrayItemsValid(achievements)) {
      toast.error("Please complete the Achievements section.");
      hasErrors = true;
    }
    if (!selectedTemplate) {
      toast.error("Please select a template.");
      hasErrors = true;
    }

    // If there are any errors, do not proceed with saving
    if (hasErrors) {
      return;
    }

    const resumeData = {
      profile: formData,
      selectedTemplate: formData.selectedTemplate,
    };

    dispatch(saveProfileData(formData, token))
      .then(() => {
        //toast.success("Profile saved successfully!");
        console.log("Dispatching saveResumeData with:", resumeData, token);
        return dispatch(saveResumeData(resumeData, token));
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error saving profile:", error);
        //toast.error("Failed to save profile!");
      });
  };

  const handleChange = (stepData) => {
    const updatedData = { ...formData, ...stepData };
    setFormData(updatedData);
    dispatch(updateFormData(updatedData));
  };

  const handleTemplateChange = (template) => {
    const updatedData = { ...formData, selectedTemplate: template };
    setFormData(updatedData);
    dispatch(updateFormData(updatedData));
  };

  const toggleStep = (index) => {
    if (activeStep === index) {
      setActiveStep(null);
    } else {
      setActiveStep(index);
    }
  };

  const renderStepContent = (StepComponent) => {
    return <StepComponent onChange={handleChange} data={formData} />;
  };

  return (
    <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto p-4 md:p-6 font-outfit bg-gray-50 rounded-lg shadow-lg h-full lg:h-screen">
      <div className="w-full lg:w-full lg:pr-6 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-300 overflow-y-auto">
        <div className="flex items-center m-auto">
          <div className="flex flex-col lg:flex-row justify-start items-center mb-4 lg:mb-0 w-full">
            <h2 className="text-2xl font-semibold mb-4 lg:mb-0"></h2>
            <div className="flex justify-center lg:justify-start space-x-4 w-full">
              <button
                onClick={() => handleTemplateChange(1)}
                className={`py-2 px-6 rounded-full transition-all duration-300 text-lg ${
                  formData.selectedTemplate === 1
                    ? "bg-ash-blue text-white"
                    : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                } ${
                  formData.selectedTemplate === 1
                    ? "hover:bg-ash-blue active:bg-ash-blue"
                    : "hover:bg-gray-400 active:bg-gray-500"
                }`}
              >
                Template 1
              </button>
              <button
                onClick={() => handleTemplateChange(2)}
                className={`py-2 px-6 rounded-full transition-all duration-300 text-lg ${
                  formData.selectedTemplate === 2
                    ? "bg-ash-blue text-white"
                    : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                } ${
                  formData.selectedTemplate === 2
                    ? "hover:bg-ash-blue active:bg-ash-blue"
                    : "hover:bg-gray-400 active:bg-gray-500"
                }`}
              >
                Template 2
              </button>
            </div>
          </div>

          <div className="w-full lg:pl-6 mt-6 lg:mt-0">
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="bg-ash-blue hover:border-ash-blue hover:text-ash-blue text-white hover:bg-white border-2 border-transparent   rounded-full px-4 py-1 transition-all duration-300 ease-in-out text-lg"
              >
                {showPreview ? "Hide Preview" : "Show Preview"}
              </button>
            </div>
            {showPreview && (
              <div
                className="bg-white p-4 md:p-6 rounded-lg shadow-sm h-full overflow-auto max-h-[80vh]"
                style={{ maxHeight: "80vh" }} // This limits the height to 80% of the viewport height
              >
                <ResumePreview data={formData} />
              </div>
            )}
          </div>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm mb-4">
          {steps.map((step, index) => (
            <div key={index} className="mb-4">
              <div
                className="cursor-pointer p-4 rounded-lg bg-gray-200 hover:bg-gray-300 transition-all duration-300 flex justify-between items-center"
                onClick={() => toggleStep(index)}
              >
                <div className="flex items-center">
                  <FontAwesomeIcon icon={step.icon} className="mr-2" />
                  <h3 className="text-lg font-semibold">{step.label}</h3>
                </div>
                <FontAwesomeIcon
                  icon={activeStep === index ? faChevronUp : faChevronDown}
                />
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
            className={` ${
              activeStep === 0
                ? "bg-back hover:border-back hover:text-back text-white hover:bg-white border-2 border-transparent rounded-full px-4 py-1 transition-all duration-300 ease-in-out text-lg cursor-not-allowed"
                : "bg-back hover:border-back hover:text-back text-white hover:bg-white border-2 border-transparent rounded-full px-4 py-1 transition-all duration-300 ease-in-out text-lg"
            }`}
          >
            Back
          </button>
          {activeStep === steps.length - 1 ? (
            <button
              onClick={handleSave}
              className="bg-finish hover:border-finish hover:text-finish text-white hover:bg-white border-2 border-transparent   rounded-full px-4 py-1 transition-all duration-300 ease-in-out text-lg"
            >
              Finish
            </button>
          ) : (
            <button
              onClick={() => setActiveStep(activeStep + 1)}
              className="bg-next hover:border-next hover:text-next text-white hover:bg-white border-2 border-transparent   rounded-full px-4 py-1 transition-all duration-300 ease-in-out text-lg"
            >
              Next
            </button>
          )}
        </div>
      </div>
      <Modal showModal={showPreview} closeModal={() => setShowPreview(false)}>
        <ResumePreview data={formData} />
      </Modal>
    </div>
  );
};

export default ProfileCreation;
