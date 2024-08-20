import { useDispatch, useSelector } from "react-redux";
import {
  addProject,
  updateProject,
  removeProject,
  removeSkillsUsed,
  addSkillsUsed,
  updateSkillsUsed,
} from "../../../redux/actions/profileActions";


const Projects = () => {
  const dispatch = useDispatch();
  const projectList = useSelector((state) => state.profile.profile.projects || []);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    dispatch(updateProject(index, name, value));
  };

  const handleSkillsUsedChange = (projectIndex, skillUsedIndex, e) => {
    const { value } = e.target;
    dispatch(updateSkillsUsed(projectIndex, skillUsedIndex, value));
  };

  return (
    <div className="p-6  ">
      <h3 className="text-2xl font-semibold mb-6">Projects</h3>
      {projectList.map((project, index) => (
        <div key={index} className="mb-6 p-6 bg-white rounded-lg shadow-md">
          <div className="mb-4">
            <label
              className="block text-lg font-medium text-gray-700 mb-1"
              htmlFor={`project-name-${index}`}
            >
              Project Name
            </label>
            <input
              type="text"
              name="name"
              id={`project-name-${index}`}
              value={project.name || ""}
              onChange={(e) => handleChange(index, e)}
              placeholder="e.g., Portfolio Website"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-lg font-medium text-gray-700 mb-1"
              htmlFor={`project-description-${index}`}
            >
              Description
            </label>
            <input
              type="text"
              name="description"
              id={`project-description-${index}`}
              value={project.description || ""}
              onChange={(e) => handleChange(index, e)}
              placeholder="e.g., Built a responsive portfolio using React"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-lg font-medium text-gray-700 mb-1"
              htmlFor={`project-link-${index}`}
            >
              Link
            </label>
            <input
              type="text"
              name="link"
              id={`project-link-${index}`}
              value={project.link || ""}
              onChange={(e) => handleChange(index, e)}
              placeholder="e.g., https://example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-lg font-medium text-gray-700 mb-1"
              htmlFor={`project-skillsUsed-${index}`}
            >
              Skills Used 
            </label>
            {(Array.isArray(project.skillsUsed) ? project.skillsUsed : []).map(
              (skillsUsed, skillUsedIndex) => (
                <div key={skillUsedIndex} className="flex items-center mb-2">
                  <input
                    type="text"
                    value={skillsUsed}
                    onChange={(e) =>
                      handleSkillsUsedChange(index, skillUsedIndex, e)
                    }
                    placeholder="e.g., React"
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                  />
                  <button
                    className="ml-2 flex items-center gap-2 bg-remove hover:border-remove hover:text-remove text-white hover:bg-white border-2 border-transparent   rounded-full px-4 py-1 transition-all duration-300 ease-in-out text-lg"
                    onClick={() =>
                      dispatch(removeSkillsUsed(index, skillUsedIndex))
                    }
                  >
                     Remove
                  </button>
                </div>
              )
            )}
            <button
              className="bg-add hover:border-add hover:text-add text-white hover:bg-white border-2 border-transparent   rounded-full px-4 py-1 transition-all duration-300 ease-in-out text-lg"
              onClick={() => dispatch(addSkillsUsed(index))}
            >
              Add Skill Used
            </button>
          </div>

          <div className="flex justify-end">
            <button
              className="bg-remove hover:border-remove hover:text-remove text-white hover:bg-white border-2 border-transparent   rounded-full px-4 py-1 transition-all duration-300 ease-in-out text-lg"
              onClick={() => dispatch(removeProject(index))}
            >
              Remove Project
            </button>
          </div>
        </div>
      ))}
      <div className="flex  mt-4">
        <button
          className="bg-add hover:border-add hover:text-add text-white hover:bg-white border-2 border-transparent   rounded-full px-4 py-1 transition-all duration-300 ease-in-out text-lg"
          onClick={() => dispatch(addProject())}
        >
           Add Project
        </button>
      </div>
    </div>
  );
};

export default Projects;
