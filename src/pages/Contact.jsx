import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row overflow-hidden">

      {/* Left: Contact Details */}
      <div className="w-full md:w-1/3 bg-white/95 backdrop-blur-md shadow-2xl p-4 pt-30 sm:p-16 flex flex-col justify-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-[#E74A4A] mb-8">
          Contact Us!
        </h1>

        <div className="flex flex-col gap-6 text-[#490101] text-base sm:text-lg">

          {/* Address */}
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="w-6 h-6 text-[#E74A4A] mt-1" />
            <div>
              <h2 className="font-semibold">Our Address</h2>
              <p>Purok 5B, Antongalon</p>
              <p>Butuan City, 8600</p>
              <p>Philippines</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <FaPhone className="w-6 h-6 text-[#E74A4A]" />
            <div>
              <h2 className="font-semibold">Phone</h2>
              <p>+(63)9465910841</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <FaEnvelope className="w-6 h-6 text-[#E74A4A]" />
            <div>
              <h2 className="font-semibold">Email</h2>
              <p>hannyscakeandpastry@gmail.com</p>
            </div>
          </div>

        </div>
      </div>

      {/* Right: Google Maps */}
      <div className="w-full md:w-2/3 h-96 md:h-full relative">
        <iframe
          title="Antongalon Pinpoint"
          src="https://www.google.com/maps?q=8.951944,125.625389&hl=en&z=15&output=embed"
          className="absolute inset-0 w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
        {/* Optional overlay */}
        <div className="absolute inset-0 pointer-events-none"></div>
      </div>

    </div>
  );
}

export default Contact;
