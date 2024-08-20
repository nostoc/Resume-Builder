import { useDispatch, useSelector } from "react-redux";
import {
  addExperience,
  updateExperience,
  removeExperience,
  addResponsibility,
  updateResponsibility,
  removeResponsibility,
} from "../../../redux/actions/profileActions";

const Experience = () => {
  const dispatch = useDispatch();
  const experienceList = useSelector((state) => state.profile.profile.experience || []);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    dispatch(updateExperience(index, name, value));
  };

  const handleResponsibilityChange = (expIndex, respIndex, e) => {
    const { value } = e.target;
    dispatch(updateResponsibility(expIndex, respIndex, value));
  };

  return (
    <div className="p-6  ">
      <h3 className="text-2xl font-semibold mb-6">Experience</h3>
      {experienceList.map((experience, index) => (
        <div key={index} className="mb-6 p-6 bg-white rounded-lg shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-1" htmlFor={`company-${index}`}>
                Company
              </label>
              <input
                type="text"
                name="company"
                id={`company-${index}`}
                value={experience.company || ""}
                onChange={(e) => handleChange(index, e)}
                placeholder="e.g., Google"
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-1" htmlFor={`city-${index}`}>
                City
              </label>
              <input
                type="text"
                name="city"
                id={`city-${index}`}
                value={experience.city || ""}
                onChange={(e) => handleChange(index, e)}
                placeholder="e.g., Mountain View"
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-1" htmlFor={`province-${index}`}>
                Province
              </label>
              <input
                type="text"
                name="province"
                id={`province-${index}`}
                value={experience.province || ""}
                onChange={(e) => handleChange(index, e)}
                placeholder="e.g., California"
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-1" htmlFor={`position-${index}`}>
                Position
              </label>
              <input
                type="text"
                name="position"
                id={`position-${index}`}
                value={experience.position || ""}
                onChange={(e) => handleChange(index, e)}
                placeholder="e.g., Software Engineer"
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-1" htmlFor={`startDate-${index}`}>
                Start Date
              </label>
              <input
                type="text"
                name="startDate"
                id={`startDate-${index}`}
                value={experience.startDate || ""}
                onChange={(e) => handleChange(index, e)}
                placeholder="e.g., 2020-01-01"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-1" htmlFor={`endDate-${index}`}>
                End Date
              </label>
              <input
                type="text"
                name="endDate"
                id={`endDate-${index}`}
                value={experience.endDate || ""}
                onChange={(e) => handleChange(index, e)}
                placeholder="e.g., 2024-01-01"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>
          </div>

          {/* Responsibilities Section */}
          <div className="mb-4">
            <h4 className="font-semibold text-lg mb-2">Responsibilities</h4>
            {(Array.isArray(experience.responsibilities)
              ? experience.responsibilities
              : []
            ).map((responsibility, respIndex) => (
              <div key={respIndex} className="flex items-center mb-2">
                <input
                  type="text"
                  value={responsibility || ""}
                  onChange={(e) =>
                    handleResponsibilityChange(index, respIndex, e)
                  }
                  placeholder="e.g., Developed a web application"
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
                <button
                  className="ml-2 flex items-center gap-2 bg-remove hover:border-remove hover:text-remove text-white hover:bg-white border-2 border-transparent   rounded-full px-4 py-1 transition-all duration-300 ease-in-out text-lg"
                  onClick={() =>
                    dispatch(removeResponsibility(index, respIndex))
                  }
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              className="bg-add hover:border-add hover:text-add text-white hover:bg-white border-2 border-transparent   rounded-full px-4 py-1 transition-all duration-300 ease-in-out text-lg"
              onClick={() => dispatch(addResponsibility(index))}
            >
               Add Responsibility
            </button>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              className="bg-remove hover:border-remove hover:text-remove text-white hover:bg-white border-2 border-transparent   rounded-full px-4 py-1 transition-all duration-300 ease-in-out text-lg"
              onClick={() => dispatch(removeExperience(index))}
            >
               Remove Experience
            </button>
          </div>
        </div>
      ))}
      <button
        className="bg-add hover:border-add hover:text-add text-white hover:bg-white border-2 border-transparent   rounded-full px-4 py-1 transition-all duration-300 ease-in-out text-lg"
        onClick={() => dispatch(addExperience())}
      >
        Add Experience
      </button>
    </div>
  );
};

export default Experience;
