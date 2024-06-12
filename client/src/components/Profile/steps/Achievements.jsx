import { useDispatch, useSelector } from "react-redux";
import {
  addAchievement,
  updateAchievement,
  removeAchievement,
} from "../../../redux/actions/profileActions";

const Achievements = () => {
  const dispatch = useDispatch();
  const achievementList = useSelector(
    (state) => state.profile.profile.achievements
  );

  const handleChange = (index, e) => {
    const { name, value } = e.target;

    dispatch(updateAchievement(index, name, value));
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Achievements</h3>
      {achievementList.map((achievements, index) => (
        <div key={index} className="mb-4">
          <input
            type="text"
            name="title"
            value={achievements.title || ""}
            onChange={(e) => handleChange(index, e)}
            placeholder="Title"
            className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
          />
          <input
            type="date"
            name="date"
            value={achievements.date || ""}
            onChange={(e) => handleChange(index, e)}
            placeholder="Description"
            className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
          />
          <input
            type="text"
            name="description"
            value={achievements.description || ""}
            onChange={(e) => handleChange(index, e)}
            placeholder="Description"
            className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
          />
          

          <button
            className="bg-red-500 text-white py-2 px-4 rounded mb-2"
            onClick={() => dispatch(removeAchievement(index))}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={() => dispatch(addAchievement())}
      >
        Add Project
      </button>
    </div>
  );
};

export default Achievements;
