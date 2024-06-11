import { useDispatch, useSelector } from 'react-redux';
import { addSkill, updateSkill, removeSkill } from '../../../redux/actions/profileActions';

const Skills = () => {
  const dispatch = useDispatch();
  const skillList = useSelector((state) => state.profile.profile.skills);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    
    dispatch(updateSkill(index, name,value));
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Skills</h3>
      {skillList.map((skill, index) => (
        <div key={index} className="mb-4">
          <input
            type="text"
            name="name"
            value={skill.name || ""}
            onChange={(e) => handleChange(index, e)}
            placeholder="Skill Name"
            className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
          />
          <button
            className="bg-red-500 text-white py-2 px-4 rounded mb-2"
            onClick={() => dispatch(removeSkill(index))}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={() => dispatch(addSkill())}
      >
        Add Skill
      </button>
    </div>
  );
};

export default Skills;