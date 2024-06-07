import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" bg-purple-100 font-montserrat text-xl ">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-4 " >
      <Link to="/"><h1 className=" font-bold">Eazy Rezume</h1></Link>
      <ul className=" flex gap-5"> 
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/sign-in"><li>Sign In</li></Link>
        <Link to="/my-rezumes"><li>My Rezumes</li></Link>
        
        
      </ul>
      </div>
    </div>
  );
};

export default Header;
