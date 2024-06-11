import { useDispatch, useSelector } from 'react-redux';
import { addProject, updateProject, removeProject } from '../../../redux/actions/profileActions';

const Projects = () => {
  const dispatch = useDispatch();
  const projectList = useSelector((state) => state.profile.profile.projects);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    
    dispatch(updateProject(index,name,value));
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Projects</h3>
      {projectList.map((project, index) => (
        <div key={index} className="mb-4">
          <input
            type="text"
            name="name"
            value={project.name || ""}
            onChange={(e) => handleChange(index, e)}
            placeholder="Project Name"
            className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
          />
          <input
            type="text"
            name="description"
            value={project.description || ""}
            onChange={(e) => handleChange(index, e)}
            placeholder="Description"
            className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
          />
          <input
            type="text"
            name="link"
            value={project.link || ""}
            onChange={(e) => handleChange(index, e)}
            placeholder="Link"
            className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
          />
          
         
          <button
            className="bg-red-500 text-white py-2 px-4 rounded mb-2"
            onClick={() => dispatch(removeProject(index))}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={() => dispatch(addProject())}
      >
        Add Project
      </button>
    </div>
  );
};

export default Projects;