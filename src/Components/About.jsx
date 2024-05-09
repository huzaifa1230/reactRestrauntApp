import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Story from "../Components/Story";
import Mission from "./Mission";
import Team from "./Team";

function About() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-300 pt-2">
        <Story />
        <Team />
        <Mission />
      </div>
      <Footer />
    </>
  );
}

export default About;
