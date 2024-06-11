import { useDispatch, useSelector } from "react-redux";
import { updateProfileField } from "../../../redux/actions/profileActions";

const PersonalInfo = () => {
  const dispatch = useDispatch();
  const personalInfo = useSelector((state) => state.profile.profile.personalInfo);

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
      <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
      <div className="mb-4 flex flex-col gap-4" >
      <input
        type="text"
        name="name"
        value={personalInfo?.name || ""}
        onChange={handleChange}
        placeholder="Name"
        className="w-full px-3 py-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        name="email"
        value={personalInfo?.email || ""}
        onChange={handleChange}
        placeholder="Email"
        className="w-full px-3 py-2 border border-gray-300 rounded"
      />
      
      <input
        type="text"
        name="phone"
        value={personalInfo?.phone || ""}
        onChange={handleChange}
        placeholder="Phone"
        className="w-full px-3 py-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        name="address"
        value={personalInfo?.address || ""}
        onChange={handleChange}
        placeholder="Address"
        className="w-full px-3 py-2 border border-gray-300 rounded"
      />
      </div>
    </div>
  );
};

export default PersonalInfo;
