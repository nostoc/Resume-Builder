import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedTemplate } from '../redux/actions/profileActions';
import backgroundImage from '../assets/undraw_portfolio_update_re_jqnp.svg';

const templates = [
  { id: 1, name: 'Template 1', description: 'A modern template' },
  { id: 2, name: 'Template 2', description: 'A classic template' },
  // Add more templates as needed
];

const TemplateSelection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSelectTemplate = (templateId) => {
    dispatch(setSelectedTemplate(templateId));
    navigate('/generate-resume');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="relative flex flex-col md:flex-row items-center justify-between bg-white shadow-lg rounded-lg p-8 md:p-16">
        <div className="w-full md:w-1/2 hidden md:block">
          <img
            src={backgroundImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative w-full md:w-1/2 text-center md:text-left font-montserrat p-8 md:p-16">
          <h1 className="text-3xl text-ocean-blue font-bold mb-6">Select a Template</h1>
          <div className="grid grid-cols-1 gap-4">
            {templates.map((template) => (
              <div key={template.id} className="border p-4 rounded-lg hover:shadow-lg">
                <h2 className="text-xl font-bold mb-2">{template.name}</h2>
                <p className="text-gray-700 mb-4">{template.description}</p>
                <button
                  onClick={() => handleSelectTemplate(template.id)}
                  className="bg-ocean-blue text-white px-4 py-2 rounded-lg hover:bg-ocean-blue-dark transition duration-200"
                >
                  Select
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelection;
