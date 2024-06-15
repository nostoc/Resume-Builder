
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Side with Background Image */}
      <div 
        className="hidden md:block w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('http://127.0.0.1:5500/client/src/assets/undraw_online_resume_re_ru7s.svg')" }}
      ></div>
      
      {/* Right Side with Options */}
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-8">
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg text-center w-full max-w-lg">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">Welcome to the Resume Builder App</h1>
          <p className="text-lg mb-8 text-gray-600">Create your professional resume with ease using our templates and tools.</p>
          <div className="flex flex-col space-y-4">
            <Link to="/profile/create">
              <button className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                Fill Profile Form
              </button>
            </Link>
            <Link to="/templates">
              <button className="w-full px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300">
                View Templates
              </button>
            </Link>
            <Link to="/generate-resume">
              <button className="w-full px-6 py-3 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300">
                Generate Resume
              </button>
            </Link>
            <Link to="/view-resumes">
              <button className="w-full px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300">
                View Resumes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
