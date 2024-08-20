import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="container mx-auto my-10 flex flex-col md:flex-row items-center justify-between font-outfit px-4">
      <div className="md:w-1/2 my-8 md:mb-0">
        <h1 className="text-4xl font-bold mb-4 text-slate-700">
          Your success story begins with a resume.
        </h1>
        <h2 className="text-2xl font-semibold text-slate-500 mb-6">
          Beat the bots, impress the recruiters.
        </h2>
        <p className="text-lg text-black mb-6">
          Get hired faster with our ATS-friendly resume builder, trusted by
          professionals. Craft a resume that not only looks great but also beats
          the bots, ensuring you stand out in any industry.
        </p>
        <Link to="/login">
          <button className="bg-ash-blue text-white hover:bg-white hover:text-ash-blue border-2 border-transparent hover:border-ash-blue rounded-full px-4 py-2 transition-all duration-300 ease-in-out text-xl">
            Create My Resume Now
          </button>
        </Link>
      </div>
      <div className="md:w-1/2">
        <img
          src="../../src/assets/image.png"
          alt="Hero image"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
