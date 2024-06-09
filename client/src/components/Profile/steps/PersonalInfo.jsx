import { useDispatch, useSelector } from "react-redux";
import { updateProfileField } from "../../../redux/actions/profileActions";

const PersonalInfo = () => {
  const dispatch = useDispatch();
  const personalInfo = useSelector((state) => state.profile.personalInfo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      updateProfileField("personalInfo", {
        [name]: value,
      })
    );
  };

  return (
    <div>
      <h3>Personal Information</h3>
      <input
        type="text"
        name="name"
        value={personalInfo?.name || ""}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="email"
        value={personalInfo?.email || ""}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="text"
        name="phone"
        value={personalInfo?.phone || ""}
        onChange={handleChange}
        placeholder="Phone"
      />
      <input
        type="text"
        name="address"
        value={personalInfo?.address || ""}
        onChange={handleChange}
        placeholder="Address"
      />
    </div>
  );
};

export default PersonalInfo;
