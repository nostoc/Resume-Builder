import { useDispatch, useSelector } from "react-redux";
import { updateProfileField } from "../../../redux/actions/profileActions";

const Skills = () => {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.profile.skills);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      updateProfileField("skills", {
        [name]: value,
      })
    );
  };

  return (
    <div>
      <h3>Skills</h3>
      <input
        type="text"
        name="skill"
        value={skills?.skill || ""}
        onChange={handleChange}
        placeholder="Skill"
      />
    </div>
  );
};

export default Skills;
