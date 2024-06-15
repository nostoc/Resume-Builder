
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedTemplate } from '../redux/actions/profileActions';

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
    // Handle template selection (e.g., save selected template to user profile)
    navigate('/generate-resume'); // Navigate to resume generation page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-6">Select a Template</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {templates.map((template) => (
            <div key={template.id} className="border p-4 rounded-lg hover:shadow-lg">
              <h2 className="text-xl font-bold mb-2">{template.name}</h2>
              <p className="text-gray-700 mb-4">{template.description}</p>
              <button
                onClick={() => handleSelectTemplate(template.id)}
                className="bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600"
              >
                Select
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateSelection;
