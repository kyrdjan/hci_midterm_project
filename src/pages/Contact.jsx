
import { FaPhone, FaFacebook, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
    return (
        <div className = "flex flex-col items-center justify-around w-full h-full px-10">
            
            <div className="flex flex-col items-center justify-left w-full h-auto mt-10">
            
                <div className="flex flex-row items-center justify-center w-full px-30 pt-20">
                    <hr className="flex-1 border-t-3 border-black rounded-lg my-3 mr-3" />
                    <h1 className="text-6xl font-bold text-[#E74A4A] text-shadow-[-2px_2px_0px_#F7C4C4]">
                        Contact Us!
                    </h1>
                    <hr className="flex-1 border-t-3 border-black rounded-lg my-3 ml-3" />
                </div>


                <div className="flex flex-row items-center justify-center gap-20 text-[#490101] w-full h-15"> 
                    
                    {/* Location */}
                    <div className="flex items-center gap-3">
                        <FaMapMarkerAlt className="w- h-6 text-[#E74A4A]" />
                        <a
                        href="https://www.google.com/maps?q=8.951944,125.625389"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-medium hover:underline"
                        >
                        PUROK-5B  Antongalon, Butuan City
                        </a>
                    </div>

                    {/* Facebook */}
                    <div className="flex items-center gap-3">
                        <FaFacebook className="w-6 h-6 text-[#E74A4A]" />
                        <a
                        href="https://www.facebook.com/profile.php?id=100057458259374"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-medium hover:underline"
                        >
                        Hanny's Cakes & Pastries
                        </a>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-3">
                        <FaPhone className="w-6 h-6 text-[#E74A4A] transform scale-x-[-1]" />
                        <a href="tel:+639465910841" className="text-xl font-medium hover:underline">
                        +639465910841
                        </a>
                    </div>

                </div>

                {/* Map with pinpoint */}
                <div className="w-[100%] h-96 bg-white shadow-[-10px_10px_0px_#F7C4C4] overflow-hidden flex flex-col alignment-center justify-center mt-10">
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
