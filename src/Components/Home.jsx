import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Special from "./Special";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-300 text-white  pt-2">
        <div className=" ">
          <Hero />
          <Special />
          <Testimonials />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
