import { useDispatch, useSelector } from "react-redux";
import {
  addAchievement,
  updateAchievement,
  removeAchievement,
} from "../../../redux/actions/profileActions";
import { FaPlus, FaMinus } from "react-icons/fa";

const Achievements = () => {
  const dispatch = useDispatch();
  const achievementList = useSelector(
    (state) => state.profile.profile.achievements || []
  );

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    dispatch(updateAchievement(index, name, value));
  };

  return (
    <div className="p-6 bg-blue-100 ">
      <h3 className="text-2xl font-semibold mb-6">Achievements</h3>
      {achievementList.map((achievement, index) => (
        <div key={index} className="mb-6 p-6 bg-white rounded-lg shadow-md">
          <div className="mb-4">
            <label
              className="block text-lg font-medium text-gray-700 mb-1"
              htmlFor={`achievement-title-${index}`}
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id={`achievement-title-${index}`}
              value={achievement.title || ""}
              onChange={(e) => handleChange(index, e)}
              placeholder="e.g., First Prize in Hackathon"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-lg font-medium text-gray-700 mb-1"
              htmlFor={`achievement-date-${index}`}
            >
              Date
            </label>
            <input
              type="text"
              name="date"
              id={`achievement-date-${index}`}
              value={achievement.date || ""}
              placeholder="e.g., 2024-01-01"
              onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
              onChange={(e) => handleChange(index, e)}
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-lg font-medium text-gray-700 mb-1"
              htmlFor={`achievement-description-${index}`}
            >
              Description
            </label>
            <input
              type="text"
              name="description"
              id={`achievement-description-${index}`}
              value={achievement.description || ""}
              onChange={(e) => handleChange(index, e)}
              placeholder="Describe your achievement"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex justify-end">
            <button
              className="flex items-center gap-2 bg-red-500 text-white py-2 px-4 rounded-full"
              onClick={() => dispatch(removeAchievement(index))}
            >
              <FaMinus /> Remove Achievement
            </button>
          </div>
        </div>
      ))}
      <div className="flex ">
        <button
          className="flex items-center gap-2 bg-ocean-blue text-white py-2 px-4 rounded-full"
          onClick={() => dispatch(addAchievement())}
        >
          <FaPlus /> Add Achievement
        </button>
      </div>
    </div>
  );
};

export default Achievements;
