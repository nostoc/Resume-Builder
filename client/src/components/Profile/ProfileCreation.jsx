import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveProfileData } from "../../redux/actions/profileActions";
import PersonalInfo from "./steps/PersonalInfo";
import Education from "./steps/Education";
import Experience from "./steps/Experience";
import Skills from "./steps/Skills";
import Projects from "./steps/Projects";
import { toast } from "react-toastify";

const profileCreation = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    "Personal Information",
    "Education",
    "Experience",
    "Skills",
    "Projects",
  ];
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.profile);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSave = async () => {
    try {
      await dispatch(saveProfileData(profile));
      toast.success("Profile saved successfully!");
    } catch (error) {
      toast.error("Failed to save profile!");
    }
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <PersonalInfo />;
      case 1:
        return <Education />;
      case 2:
        return <Experience />;
      case 3:
        return <Skills />;
      case 4:
        return <Projects />;
      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 font-montserrat">
      <div className="flex justify-between items-center mb-4">
        {steps.map((label, index) => (
          <div
            key={label}
            className={`w-1/5 text-center py-2 ${
              index === activeStep
                ? "text-blue-500 font-semibold"
                : "text-gray-500"
            }`}
          >
            {label}
          </div>
        ))}
      </div>
      <div className="bg-white p-4 rounded shadow">
        {renderStepContent(activeStep)}
      </div>
      <div className="flex justify-between mt-4">
        <button
          disabled={activeStep === 0}
          onClick={handleBack}
          className="bg-gray-500 text-white py-2 px-4 rounded"
        >
          Back
        </button>
        {activeStep === steps.length - 1 ? (
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Finish
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default profileCreation;
