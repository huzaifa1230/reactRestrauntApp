import React from 'react'
import Contact from "./Contact"
function ContactForm() {
  return (
    <>
    <div className='m-8 mb-0 flex flex-col md:flex-row'>
      <div className='w-full order-2 md:order-1  pt-10 md:w-1/2'>
      <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
      <form className="w-full max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold">Name</label>
          <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-semibold">Phone Number</label>
          <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500" placeholder="Your Phone Number" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
          <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500" placeholder="Your Email Address" />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-semibold">Message</label>
          <textarea id="message" name="message" rows="5" className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500" placeholder="Your Message"></textarea>
        </div>
        <div className="text-center pb-5">
        <button className=" bg-black text-white rounded-md px-6 py-3  btn font-bold hover:bg-gray-500 duration-200">
            Send Now
          </button>
        </div>
      </form>

      </div>




      <div className='w-full order-1 md:order-2 pt-10 md:w-1/2  '>
      <h2 className="text-3xl font-bold text-center mb-4">Our Location</h2>
      <div className="w-full h-full pt-6 " style={{ height: "400px" }}>
      <iframe
        title="Google Map"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.3673475428525!2d74.3587!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904e7ba0e7e17%3A0x8f169a4bfdea27e6!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1647823243067!5m2!1sen!2s"
        allowFullScreen=""
      ></iframe>
    </div>
    </div>
    </div>
   <Contact />
    
    </>
  )
}

export default ContactForm