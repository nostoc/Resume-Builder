const initialState = {
  profile: {
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      linkedin: "",
      website: "",
      address: "",
      city: "",
      province: "",
      postalCode: "",
      country: "",
    },
    education: [
      {
        institution: "",
        institutionCity: "",
        institutionProvince: "",
        degree: "",
        startDate: "",
        endDate: "",
      },
    ],
    experience: [
      {
        company: "",
        city: "",
        province: "",
        position: "",
        startDate: "",
        endDate: "",
        responsibilities: [""],
      },
    ],
    skills: [""],
    projects: [
      {
        name: "",
        description: "",
        link: "",
        skillsUsed: [""],
      },
    ],
    achievements: [
      {
        title: "",
        date: "",
        description: "",
      },
    ],
  },
  selectedTemplate: null,
  error: null,
  loading: true,
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_PROFILE_FIELD":
      return {
        ...state,
        profile: {
          ...state.profile,
          [action.payload.section]: {
            ...state.profile[action.payload.section],
            ...action.payload.fieldData,
          },
        },
      };
    case "SAVE_PROFILE_DATA":
      return {
        ...state,
        ...action.payload,
      };

    case "ADD_EDUCATION":
      return {
        ...state,
        profile: {
          ...state.profile,
          education: [...state.profile.education, {}],
        },
      };
    case "UPDATE_EDUCATION":
      return {
        ...state,
        profile: {
          ...state.profile,
          education: state.profile.education.map((item, index) =>
            index === action.payload.index
              ? { ...item, [action.payload.field]: action.payload.value }
              : item
          ),
        },
      };
    case "REMOVE_EDUCATION":
      return {
        ...state,
        profile: {
          ...state.profile,
          education: state.profile.education.filter(
            (_, index) => index !== action.payload
          ),
        },
      };

    case "UPDATE_EXPERIENCE":
      return {
        ...state,
        profile: {
          ...state.profile,
          experience: state.profile.experience.map((item, index) =>
            index === action.payload.index
              ? { ...item, [action.payload.field]: action.payload.value }
              : item
          ),
        },
      };
    case "REMOVE_EXPERIENCE":
      return {
        ...state,
        profile: {
          ...state.profile,
          experience: state.profile.experience.filter(
            (_, index) => index !== action.payload
          ),
        },
      };
    case "ADD_SKILL":
      return {
        ...state,
        profile: {
          ...state.profile,
          skills: [...state.profile.skills, {}],
        },
      };
    case "UPDATE_SKILL":
      return {
        ...state,
        profile: {
          ...state.profile,
          skills: state.profile.skills.map((item, index) =>
            index === action.payload.index
              ? { ...item, [action.payload.field]: action.payload.value }
              : item
          ),
        },
      };
    case "REMOVE_SKILL":
      return {
        ...state,
        profile: {
          ...state.profile,
          skills: state.profile.skills.filter(
            (_, index) => index !== action.payload
          ),
        },
      };

    case "UPDATE_PROJECT":
      return {
        ...state,
        profile: {
          ...state.profile,
          projects: state.profile.projects.map((item, index) =>
            index === action.payload.index
              ? { ...item, [action.payload.field]: action.payload.value }
              : item
          ),
        },
      };
    case "REMOVE_PROJECT":
      return {
        ...state,
        profile: {
          ...state.profile,
          projects: state.profile.projects.filter(
            (_, index) => index !== action.payload
          ),
        },
      };
    case "ADD_ACHIEVEMENT":
      return {
        ...state,
        profile: {
          ...state.profile,
          achievements: [...state.profile.achievements, {}],
        },
      };
    case "UPDATE_ACHIEVEMENT":
      return {
        ...state,
        profile: {
          ...state.profile,
          achievements: state.profile.achievements.map((item, index) =>
            index === action.payload.index
              ? { ...item, [action.payload.field]: action.payload.value }
              : item
          ),
        },
      };
    case "REMOVE_ACHIEVEMENT":
      return {
        ...state,
        profile: {
          ...state.profile,
          achievements: state.profile.achievements.filter(
            (_, index) => index !== action.payload
          ),
        },
      };
    case "ADD_EXPERIENCE":
      return {
        ...state,
        profile: {
          ...state.profile,
          experience: [
            ...state.profile.experience,
            {
              company: "",
              city: "",
              province: "",
              position: "",
              startDate: "",
              endDate: "",
              responsibilities: [""],
            },
          ],
        },
      };
    case "ADD_RESPONSIBILITY":
      return {
        ...state,
        profile: {
          ...state.profile,
          experience: state.profile.experience.map((exp, index) =>
            index === action.payload
              ? {
                  ...exp,
                  responsibilities: [...(exp.responsibilities || []), ""],
                }
              : exp
          ),
        },
      };
    case "UPDATE_RESPONSIBILITY":
      return {
        ...state,
        profile: {
          ...state.profile,
          experience: state.profile.experience.map((exp, expIndex) =>
            expIndex === action.payload.expIndex
              ? {
                  ...exp,
                  responsibilities: (exp.responsibilities || []).map(
                    (resp, respIndex) =>
                      respIndex === action.payload.respIndex
                        ? action.payload.value
                        : resp
                  ),
                }
              : exp
          ),
        },
      };
    case "REMOVE_RESPONSIBILITY":
      return {
        ...state,
        profile: {
          ...state.profile,
          experience: state.profile.experience.map((exp, expIndex) =>
            expIndex === action.payload.expIndex
              ? {
                  ...exp,
                  responsibilities: (exp.responsibilities || []).filter(
                    (_, respIndex) => respIndex !== action.payload.respIndex
                  ),
                }
              : exp
          ),
        },
      };
    case "ADD_PROJECT":
      return {
        ...state,
        profile: {
          ...state.profile,
          projects: [
            ...state.profile.projects,
            { name: "", description: "", link: "", skillsUsed: [""] },
          ],
        },
      };
    case "ADD_SKILLS_USED":
      return {
        ...state,
        profile: {
          ...state.profile,
          projects: state.profile.projects.map((project, index) =>
            index === action.payload
              ? {
                  ...project,
                  skillsUsed: [...(project.skillsUsed || []), ""],
                }
              : project
          ),
        },
      };
    case "UPDATE_SKILLS_USED":
      return {
        ...state,
        profile: {
          ...state.profile,
          projects: state.profile.projects.map((project, projectIndex) =>
            projectIndex === action.payload.projectIndex
              ? {
                  ...project,
                  skillsUsed: (project.skillsUsed || []).map(
                    (skill, skillIndex) =>
                      skillIndex === action.payload.skillIndex
                        ? action.payload.value
                        : skill
                  ),
                }
              : project
          ),
        },
      };

    case "REMOVE_SKILLS_USED":
      return {
        ...state,
        profile: {
          ...state.profile,
          projects: state.profile.projects.map((project, projectIndex) =>
            projectIndex === action.payload.projectIndex
              ? {
                  ...project,
                  skillsUsed: (project.skillsUsed || []).filter(
                    (_, skillUsedIndex) =>
                      skillUsedIndex !== action.payload.skillIndex
                  ),
                }
              : project
          ),
        },
      };
    /*case "REMOVE_SKILLS_USED":
      return {
        ...state,
        profile: {
          ...state.profile,
          peojects: state.profile.projects.map((project, projectIndex) =>
            projectIndex === action.payload.projectIndex
              ? {
                  ...project,
                  responsibilities: (project.responsibilities || []).filter(
                    (_, skillUsedIndex) => skillUsedIndex !== action.payload.skillUsedIndex
                  ),
                }
              : project
          ),
        },
      };*/

    case "SAVE_PROFILE_SUCCESS":
      return {
        ...state,
        profile: action.payload,
      };
    case "SAVE_PROFILE_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    case "GET_PROFILE":
      return {
        ...state,
        loading: false,
        profile: action.payload,
      };

    case "PROFILE_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "SET_SELECTED_TEMPLATE":
      return {
        ...state,
        selectedTemplate: action.payload,
      };
      case "UPDATE_FORM_DATA":
      return {
        ...state,
        profile: { ...state.profile, ...action.payload },
      };
    default:
      return state;
  }
};

export default profileReducer;
