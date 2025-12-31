import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getResume, updateResume } from "../redux/actions/resumeActions";
import { updateFormData } from "../redux/actions/profileActions";
import PersonalInfo from "./Profile/steps/PersonalInfo";
import Education from "./Profile/steps/Education";
import Experience from "./Profile/steps/Experience";
import Skills from "./Profile/steps/Skills";
import Projects from "./Profile/steps/Projects";
import Achievements from "./Profile/steps/Achievements";
import ResumePreview from "./ResumePreview";
import { toast } from "react-hot-toast";
import Layout from "./Layout";
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

const EditResume = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const resume = useSelector((state) => state.resumes.resume);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeStep, setActiveStep] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  const steps = [
    { label: "Personal Information", component: PersonalInfo, icon: faUser },
    { label: "Education", component: Education, icon: faGraduationCap },
    { label: "Experience", component: Experience, icon: faBriefcase },
    { label: "Skills", component: Skills, icon: faWrench },
    { label: "Projects", component: Projects, icon: faLightbulb },
    { label: "Achievements", component: Achievements, icon: faTrophy },
  ];

  useEffect(() => {
    if (!resume || resume._id !== id) {
      setLoading(true);
      dispatch(getResume(id)).finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [dispatch, id, resume]);

  useEffect(() => {
    if (resume && Object.keys(resume).length > 0 && resume._id === id) {
      // Extract profile data from resume and set it to formData
      const profileData = {
        ...resume.profile,
        selectedTemplate: resume.selectedTemplate || 1,
      };
      setFormData(profileData);
    }
  }, [resume, id]);

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
    setActiveStep(activeStep === index ? null : index);
  };

  const renderStepContent = (StepComponent) => {
    return <StepComponent onChange={handleChange} data={formData} />;
  };

  const handleSave = async () => {
    setSaving(true);
    const resumeData = {
      profile: {
        personalInfo: formData.personalInfo,
        education: formData.education,
        experience: formData.experience,
        skills: formData.skills,
        projects: formData.projects,
        achievements: formData.achievements,
      },
      selectedTemplate: formData.selectedTemplate,
    };

    try {
      await dispatch(updateResume(id, resumeData));
      toast.success("Resume updated successfully!");
      navigate("/view-resumes");
    } catch (error) {
      toast.error("Failed to update resume. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      </Layout>
    );
  }

  if (!resume) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-96">
          <p className="text-xl text-gray-600">Resume not found</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto p-4 md:p-6 font-outfit bg-gray-50 rounded-lg shadow-lg h-full lg:h-screen">
      <div className="w-full lg:w-full lg:pr-6 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-300 overflow-y-auto">
        <div className="flex items-center m-auto">
          <div className="flex flex-col lg:flex-row justify-start items-center mb-4 lg:mb-0 w-full">
            <h2 className="text-2xl font-semibold mb-4 lg:mb-0">Edit Resume</h2>
            <div className="flex justify-center lg:justify-start space-x-4 w-full">
              <button
                onClick={() => handleTemplateChange(1)}
                className={`py-2 px-6 rounded-full transition-all duration-300 text-lg ${
                  formData.selectedTemplate === 1
                    ? "bg-ash-blue text-white"
                    : "bg-gray-300 text-gray-700 hover:bg-gray-400"
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
                className="bg-ash-blue hover:border-ash-blue hover:text-ash-blue text-white hover:bg-white border-2 border-transparent rounded-full px-4 py-1 transition-all duration-300 ease-in-out text-lg"
              >
                {showPreview ? "Hide Preview" : "Show Preview"}
              </button>
            </div>
            {showPreview && (
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm h-full overflow-auto max-h-[80vh]">
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

        <div className="flex justify-between mt-6 gap-4">
          <button
            onClick={() => navigate("/view-resumes")}
            className="bg-gray-500 hover:bg-gray-600 text-white rounded-full px-6 py-2 transition-all duration-300 ease-in-out text-lg"
            disabled={saving}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full px-6 py-2 transition-all duration-300 ease-in-out text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default EditResume;