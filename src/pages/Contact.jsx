import Button from '../components/Button';
import { PhoneIcon } from "@heroicons/react/24/solid";
import { FaPhone, FaFacebook, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="flex flex-col items-center justify-start w-full h-[170vh] mt-[-10vh] bg-[#FFE3E5]">
        
            <div className="flex flex-col items-center justify-center w-1/2 h-[100vh] gap-8 mt-[-50px]">
                {/* Contact Form */}
                <h2 className="text-2xl font-bold text-[#490101]">Send us a Message</h2>
                    <form className="flex flex-col w-full max-w-md gap-4">
                        <input
                        type="text"
                        placeholder="Your Name"
                        className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E74A4A]"
                        />
                        <input
                        type="email"
                        placeholder="Your Email"
                        className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E74A4A]"
                        />
                        <textarea
                        placeholder="Your Message"
                        rows="4"
                        className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E74A4A]"
                        />
                            <Button variant='red'>Send</Button>
                    </form>
            </div>

            <div className="flex flex-col items-center justify-center px-10 w-full h-[80vh]">
                
                <div className="flex flex-col items-center gap-4 text-[#490101]">
                    {/* Phone */}
                    <div className="flex items-center gap-3">
                        <FaPhone className="w-6 h-6 text-[#E74A4A]" />
                        <a href="tel:+639465910841" className="text-lg font-medium hover:underline">
                        +639465910841
                        </a>
                    </div>

                    {/* Facebook */}
                    <div className="flex items-center gap-3">
                        <FaFacebook className="w-6 h-6 text-[#E74A4A]" />
                        <a
                        href="https://www.facebook.com/profile.php?id=100057458259374"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-medium hover:underline"
                        >
                        Hanny's Cakes & Pastries
                        </a>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-3">
                        <FaMapMarkerAlt className="w-6 h-6 text-[#E74A4A]" />
                        <a
                        href="https://www.google.com/maps?q=8.951944,125.625389"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-medium hover:underline"
                        >
                        PUROK5B  Antongalon, Butuan City
                        </a>
                    </div>
                </div>


                {/* Map with pinpoint */}
                <div className="w-full h-96 bg-white shadow-[-10px_10px_0px_#F7C4C4] overflow-hidden flex flex-col alignment-center justify-center ">
                    <div className="w-full h-86 px-5 overflow-hidden">
                        <iframe
                        title="Antongalon Pinpoint"
                        src="https://www.google.com/maps?q=8.951944,125.625389&hl=en&z=15&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        ></iframe>
                    </div>
                </div>

            </div>
        </div>
  );
}

export default Contact;
