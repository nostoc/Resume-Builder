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
    <div className="p-6 bg-gray-100 min-h-screen">
      <h3 className="text-2xl font-semibold mb-6">Personal Information</h3>
      <div className="p-6 bg-white rounded-lg shadow-md">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={personalInfo?.name || ""}
              onChange={handleChange}
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              value={personalInfo?.email || ""}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-1" htmlFor="phone">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={personalInfo?.phone || ""}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-1" htmlFor="linkedin">
              LinkedIn
            </label>
            <input
              type="text"
              name="linkedin"
              id="linkedin"
              value={personalInfo?.linkedin || ""}
              onChange={handleChange}
              placeholder="LinkedIn"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-1" htmlFor="website">
              Website
            </label>
            <input
              type="text"
              name="website"
              id="website"
              value={personalInfo?.website || ""}
              onChange={handleChange}
              placeholder="Website"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-1" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              value={personalInfo?.address || ""}
              onChange={handleChange}
              placeholder="Address"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-1" htmlFor="city">
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              value={personalInfo?.city || ""}
              onChange={handleChange}
              placeholder="City"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-1" htmlFor="province">
              Province
            </label>
            <input
              type="text"
              name="province"
              id="province"
              value={personalInfo?.province || ""}
              onChange={handleChange}
              placeholder="Province"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-1" htmlFor="postalCode">
              Postal Code
            </label>
            <input
              type="text"
              name="postalCode"
              id="postalCode"
              value={personalInfo?.postalCode || ""}
              onChange={handleChange}
              placeholder="Postal Code"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-1" htmlFor="country">
              Country
            </label>
            <input
              type="text"
              name="country"
              id="country"
              value={personalInfo?.country || ""}
              onChange={handleChange}
              placeholder="Country"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
