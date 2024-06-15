import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveProfileData } from "../../redux/actions/profileActions";
import PersonalInfo from "./steps/PersonalInfo";
import Education from "./steps/Education";
import Experience from "./steps/Experience";
import Skills from "./steps/Skills";
import Projects from "./steps/Projects";
import Achievements from "./steps/Achievements";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ProfileCreation = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    "Personal Information",
    "Education",
    "Experience",
    "Skills",
    "Projects",
    "Achievements"
  ];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profile = useSelector((state) => state.profile.profile);
  const token = useSelector((state) => state.auth.token);
  console.log("token", token);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSave = async () => {
    try {
      await dispatch(saveProfileData(profile, token, navigate));
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
      case 5:
        return <Achievements />;
      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <div className="flex w-full max-w-5xl mx-auto p-6 font-montserrat bg-blue-100 rounded-lg shadow-lg">
      <div className="w-1/4 pr-6 border-r-2 border-blue-300">
        {steps.map((label, index) => (
          <div
            key={label}
            className={`py-4 cursor-pointer ${
              index === activeStep
                ? "text-ocean-blue font-semibold border-l-4 border-ocean-blue pl-2"
                : "text-gray-500"
            }`}
            onClick={() => setActiveStep(index)}
          >
            {label}
          </div>
        ))}
      </div>
      <div className="w-3/4 pl-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          {renderStepContent(activeStep)}
        </div>
        <div className="flex justify-between mt-6">
          <button
            disabled={activeStep === 0}
            onClick={handleBack}
            className={`py-2 px-4 rounded-lg ${
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
              className="bg-green-500 text-white py-2 px-4 rounded-lg hover: opacity-90"
            >
              Finish
            </button>
          ) : (
            <button
              onClick={handleNext}
              className=" bg-yellow-500 text-white py-2 px-4 rounded-lg hover:opacity-90"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCreation;
