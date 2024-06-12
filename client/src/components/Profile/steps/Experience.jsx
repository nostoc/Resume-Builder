import { useDispatch, useSelector } from "react-redux";
import {
  addExperience,
  updateExperience,
  removeExperience,
} from "../../../redux/actions/profileActions";

const Experience = () => {
  const dispatch = useDispatch();
  const experienceList = useSelector(
    (state) => state.profile.profile.experience
  );

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    dispatch(updateExperience(index, name, value));
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Experience</h3>
      {experienceList.map((experience, index) => (
        <div key={index} className="mb-4">
          <input
            type="text"
            name="company"
            value={experience.company || ""}
            onChange={(e) => handleChange(index, e)}
            placeholder="Company"
            className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
          />
          <input
            type="text"
            name="city"
            value={experience.city || ""}
            onChange={(e) => handleChange(index, e)}
            placeholder="City"
            className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
          />
          <input
            type="text"
            name="province"
            value={experience.province || ""}
            onChange={(e) => handleChange(index, e)}
            placeholder="Province"
            className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
          />

          <input
            type="text"
            name="position"
            value={experience.position || ""}
            onChange={(e) => handleChange(index, e)}
            placeholder="Position"
            className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
          />
          <input
            type="text"
            name="startDate"
            value={experience.startDate || ""}
            onChange={(e) => handleChange(index, e)}
            placeholder="Start Date"
            className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
          />
          <input
            type="text"
            name="endDate"
            value={experience.endDate || ""}
            onChange={(e) => handleChange(index, e)}
            placeholder="End Date"
            className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
          />
          <input
            type="text"
            name="responsibilities"
            value={experience.responsibilities || ""}
            onChange={(e) => handleChange(index, e)}
            placeholder="Responsibilities"
            className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
          
          />
          <button
            className="bg-red-500 text-white py-2 px-4 rounded mb-2"
            onClick={() => dispatch(removeExperience(index))}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={() => dispatch(addExperience())}
      >
        Add Experience
      </button>
    </div>
  );
};

export default Experience;
