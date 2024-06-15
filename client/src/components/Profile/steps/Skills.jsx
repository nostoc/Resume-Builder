import { useDispatch, useSelector } from 'react-redux';
import { addSkill, updateSkill, removeSkill } from '../../../redux/actions/profileActions';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Skills = () => {
  const dispatch = useDispatch();
  const skillList = useSelector((state) => state.profile.profile.skills || []);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    dispatch(updateSkill(index, name, value));
  };

  return (
    <div className="p-6 bg-blue-100 min-h-screen">
      <h3 className="text-2xl font-semibold mb-6">Skills</h3>
      {skillList.map((skill, index) => (
        <div key={index} className="mb-6 p-6 bg-white rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700 mb-1" htmlFor={`skill-${index}`}>
              Skill Name
            </label>
            <input
              type="text"
              name="name"
              id={`skill-${index}`}
              value={skill.name || ""}
              onChange={(e) => handleChange(index, e)}
              placeholder="e.g., JavaScript"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex justify-end">
            <button
              className="flex items-center gap-2 bg-red-500 text-white py-2 px-4 rounded-full"
              onClick={() => dispatch(removeSkill(index))}
            >
              <FaMinus /> Remove Skill
            </button>
          </div>
        </div>
      ))}
      <div className="flex">
        <button
          className="flex items-center gap-2 bg-ocean-blue text-white py-2 px-4 rounded-full"
          onClick={() => dispatch(addSkill())}
        >
          <FaPlus /> Add Skill
        </button>
      </div>
    </div>
  );
};

export default Skills;
