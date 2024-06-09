import { useDispatch, useSelector } from "react-redux";
import { updateProfileField } from "../../../redux/actions/profileActions";

const Education = () => {
  const dispatch = useDispatch();
  const education = useSelector((state) => state.profile.education);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      updateProfileField("education", {
        [name]: value,
      })
    );
  };

  return (
    <div>
      <h3>Education</h3>
      <input
        type="text"
        name="institution"
        value={education?.institution || ""}
        onChange={handleChange}
        placeholder="Institution"
      />
      <input
        type="text"
        name="degree"
        value={education?.degree || ""}
        onChange={handleChange}
        placeholder="Degree"
      />
      <input
        type="date"
        name="startDate"
        value={education?.startDate || ""}
        onChange={handleChange}
        placeholder="Start date"
      />
      <input
        type="date"
        name="endDate"
        value={education?.endDate || ""}
        onChange={handleChange}
        placeholder="End date"
      />
      <input
        type="text"
        name="description"
        value={education?.description || ""}
        onChange={handleChange}
        placeholder="Description"
      />
    </div>
  );
};

export default Education;
