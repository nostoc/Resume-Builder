import { useDispatch, useSelector } from "react-redux";
import { updateProfileField } from "../../../redux/actions/profileActions";

const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.profile.projects);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      updateProfileField("projects", {
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
        value={projects?.name || ""}
        onChange={handleChange}
        placeholder="Name"
      />

      <input
        type="text"
        name="description"
        value={projects?.description || ""}
        onChange={handleChange}
        placeholder="Description"
      />

      <input
        type="text"
        name="link"
        value={projects?.link || ""}
        onChange={handleChange}
        placeholder="link"
      />
    </div>
  );
};

export default Projects;
