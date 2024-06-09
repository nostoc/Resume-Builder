import { useDispatch, useSelector } from "react-redux";
import { updateProfileField } from "../../../redux/actions/profileActions";

const Experience = () => {
  const dispatch = useDispatch();
  const experience = useSelector((state) => state.profile.experience);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      updateProfileField("experience", {
        [name]: value,
      })
    );
  };

  return (
    <div>
      <h3>Experience</h3>
      <input
        type="text"
        name="company"
        value={experience?.company || ""}
        onChange={handleChange}
        placeholder="Company"
      />
      <input
        type="text"
        name="position"
        value={experience?.position || ""}
        onChange={handleChange}
        placeholder="Position"
      />
      <input
        type="date"
        name="startDate"
        value={experience?.startDate || ""}
        onChange={handleChange}
        placeholder="Start date"
      />
      <input
        type="date"
        name="endDate"
        value={experience?.endDate || ""}
        onChange={handleChange}
        placeholder="End date"
      />
      <input
        type="text"
        name="description"
        value={experience?.description || ""}
        onChange={handleChange}
        placeholder="Description"
      />
    </div>
  );
};

export default Experience;
