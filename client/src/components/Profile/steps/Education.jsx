import { useDispatch, useSelector } from 'react-redux';
import { addEducation, updateEducation, removeEducation } from '../../../redux/actions/profileActions';
//import addIcon from "../../../assets/add-circle-svgrepo-com.svg"
const Education = () => {
  const dispatch = useDispatch();
  const educationList = useSelector((state) => state.profile.profile.education || []);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
   
    dispatch(updateEducation(index, name,value));
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Education</h3>
      {educationList.map((education, index) => (
        <div key={index} className="mb-4">
          <input
            type="text"
            name="institution"
            value={education.institution || ""}
            onChange={(e) => handleChange(index, e)}
            placeholder="Institution"
            className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
          />
          <input
            type="text"
            name="degree"
            value={education.degree || ""}
            onChange={(e) => handleChange(index, e)}
            placeholder="Degree"
            className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
          />
          <input
            type="text"
            name="startDate"
            value={education.startDate || ""}
            onChange={(e) => handleChange(index, e)}
            placeholder="Start Date"
            className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
            onFocus={(e) => (e.target.type = 'date')}
            onBlur={(e) => (e.target.type = 'text')}
          />
          <input
            type="text"
            name="endDate"
            value={education.endDate || ""}
            onChange={(e) => handleChange(index, e)}
            placeholder="End Date"
            className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
            onFocus={(e) => (e.target.type = 'date')}
            onBlur={(e) => (e.target.type = 'text')}
          />
         
          <button
            className="bg-red-500 text-white py-2 px-4 rounded mb-2"
            onClick={() => dispatch(removeEducation(index))}
          >
            Remove
          </button>
        </div>
      ))}
      
      
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded mb-2"
        onClick={() => dispatch(addEducation())}
      >
        
        Add
        
      </button>
      
      
    </div>
  );
};

export default Education;