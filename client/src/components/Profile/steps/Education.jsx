import { useDispatch, useSelector } from "react-redux";
import { addEducation, updateEducation, removeEducation } from "../../../redux/actions/profileActions";


const Education = () => {
  const dispatch = useDispatch();
  const educationList = useSelector((state) => state.profile.profile.education || []);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    dispatch(updateEducation(index, name, value));
  };

  return (
    <div className="p-6 ">
      <h3 className="text-2xl font-semibold mb-6">Education</h3>
      {educationList.map((education, index) => (
        <div key={index} className="mb-6 p-6 bg-white rounded-lg shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 ">
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-1" htmlFor={`institution-${index}`}>
                Institution
              </label>
              <input
                type="text"
                name="institution"
                id={`institution-${index}`}
                value={education.institution || ""}
                onChange={(e) => handleChange(index, e)}
                placeholder="e.g., University of Colombo"
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-1" htmlFor={`institutionCity-${index}`}>
                City
              </label>
              <input
                type="text"
                name="institutionCity"
                id={`institutionCity-${index}`}
                value={education.institutionCity || ""}
                onChange={(e) => handleChange(index, e)}
                placeholder="e.g., Colombo"
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-1" htmlFor={`institutionProvince-${index}`}>
                Province
              </label>
              <input
                type="text"
                name="institutionProvince"
                id={`institutionProvince-${index}`}
                value={education.institutionProvince || ""}
                onChange={(e) => handleChange(index, e)}
                placeholder="e.g., Western"
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-1" htmlFor={`degree-${index}`}>
                Degree
              </label>
              <input
                type="text"
                name="degree"
                id={`degree-${index}`}
                value={education.degree || ""}
                onChange={(e) => handleChange(index, e)}
                placeholder="e.g., Bachelor of Science"
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
                value={education.startDate || ""}
                onChange={(e) => handleChange(index, e)}
                placeholder="e.g., 2020-01-01"
                className="w-full px-4 py-2 border border-gray-300 rounded"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
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
                value={education.endDate || ""}
                onChange={(e) => handleChange(index, e)}
                placeholder="e.g., 2024-01-01"
                className="w-full px-4 py-2 border border-gray-300 rounded"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
              />
            </div>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              className="bg-remove hover:border-remove hover:text-remove text-white hover:bg-white border-2 border-transparent   rounded-full px-4 py-1 transition-all duration-300 ease-in-out text-lg"
              onClick={() => dispatch(removeEducation(index))}
            >
              Remove Education
            </button>
          </div>
        </div>
      ))}

      <button
        className="bg-add hover:border-add hover:text-add text-white hover:bg-white border-2 border-transparent   rounded-full px-4 py-1 transition-all duration-300 ease-in-out text-lg"
        onClick={() => dispatch(addEducation())}
      >
        Add Education
      </button>
    </div>
  );
};

export default Education;
