import { Link } from "react-router-dom";
const Footer = () => {
    return (
      <footer className="bg-slate-600 text-white py-6 font-outfit">
        <div className="container max-w-6xl m-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Eazy Rezume</h2>
            <p className="text-sm text-white">
              Building resumes that land you jobs.
            </p>
          </div>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-sm hover:text-slate-800">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-sm hover:text-slate-800">
              Terms of Service
            </Link>
            <Link to="/contact" className="text-sm hover:text-slate-800">
              Contact
            </Link>
          </div>
        </div>
        <div className="container max-w-6xl m-auto mt-4 text-center text-slate-400 text-xs">
          <p>&copy; 2024 Eazy Rezume. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  