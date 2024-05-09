import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <>
      <div className="  container mx-auto pt-10 pb-24 ">
        <h2 className="mb-12 text-3xl font-bold  text-black text-center">
          Contact Us
        </h2>
        <div className="flex flex-wrap justify-center">
          {/* card 1 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-8">
            <div className="bg-gray-600 rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <FaHome size={36} />
                </div>
                <div>
                  <h2 className="text-lg text-left mb-1 font-semibold">
                    Address
                  </h2>
                  <p className="text-white">24 Street Johar Town, Lahore</p>
                </div>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-8">
            <div className="bg-gray-600 rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <FaPhoneAlt size={36} />
                </div>
                <div>
                  <h2 className="text-lg text-left mb-1 font-semibold">
                    Phone
                  </h2>
                  <p className="text-white">+92- 3200000000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-8">
            <div className="bg-gray-600 rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <MdEmail size={36} />
                </div>
                <div>
                  <h2 className="text-lg text-left mb-1 font-semibold">
                    Email
                  </h2>
                  <p className="text-white">thetastyhub01@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <button className=" bg-black text-white rounded-md px-6 py-3  btn-lg font-bold hover:bg-gray-500 duration-200">
            Reserve Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Contact;
