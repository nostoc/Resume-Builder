import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
    <div className=" mx-auto ">
      <Header />
      <div className="my-8">
        <Hero />
      </div>
      
    </div>
    <Footer />
    </div>
  );
};

export default Home;
