import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { saveProfileData } from "../../redux/actions/profileActions";
import PersonalInfo from "./steps/PersonalInfo";
import Education from "./steps/Education";
import Experience from "./steps/Experience";
import Skills from "./steps/Skills";
import Projects from "./steps/Projects";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Box,
  Typography,
} from "@mui/material";

const steps = [
  "Personal Information",
  "Education",
  "Experience",
  "Skills",
  "Projects",
];

const ProfileCreation = () => {
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profile);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      dispatch(saveProfileData(profileData));
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  const getStepContent = (step) => {
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
        return "Unknown step";
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ mt: 2, mb: 2 }}>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 2 }}>
              All steps completed - your profile is saved!
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {getStepContent(activeStep)}
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </Box>
  );
};

export default ProfileCreation;
