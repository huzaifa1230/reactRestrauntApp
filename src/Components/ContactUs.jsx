import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import ContactForm from "./ContactForm"
function ContactUs() {
  return (
    <>
    <Navbar />
    <div className="bg-gray-300  pt-2">
     <ContactForm />
    </div>
    <Footer />
   
    </>
  )
}

export default ContactUs