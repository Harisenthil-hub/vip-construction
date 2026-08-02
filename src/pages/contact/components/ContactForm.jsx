import { useState } from "react";
import { LuSend } from "react-icons/lu";

export default function ContactForm() {
  
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NO;
    const message = `
      *New Construction Enquiry*
      
      Name: ${formData.fullName}
      
      Phone: ${formData.phone}
      
      ${formData.projectType ? `Project Type: ${formData.projectType}\n` : ""}
      
      ${formData.message ? `Project Details:\n${formData.message}` : ""}
      `;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };
  return (
    <section id="contact-form" className="py-15 bg-[#F8F8F8] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-10 lg:mb-14">
          <span className="span-heading">
            Get In Touch
          </span>

          <h2 className="h2-heading mt-3">Request A Consultation</h2>

          <p className="text-[#666666] mt-5 max-w-3xl mx-auto leading-8">
            We'd love to hear about your construction project. Fill out the form
            below and our experts will get back to you within 24 hours.
          </p>
        </div>

        {/* Form & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-10">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10">
            <h3 className="text-xl lg:text-2xl font-bold text-[#1A1F2E] mb-5 lg:mb-8">
              Send Us A Message
            </h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Full Name */}
              <input
                type="text"
                placeholder="Full Name"
                name="fullName"
                className="contact-input"
                required
                value={formData.fullName}
                onChange={handleChange}
              />

              {/* Phone Number */}
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="contact-input"
                required
                value={formData.phone}
                onChange={handleChange}
              />

              {/* Project Type */}
              <div className="relative group">
                <select
                  name="projectType"
                  className="contact-input appearance-none"
                  value={formData.projectType}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Project Type
                  </option>

                  <option>Residential Construction</option>
                  <option>Commercial Construction</option>
                  <option>Villa Construction</option>
                  <option>Warehouse Construction</option>
                  <option>Interior Fit-Out</option>
                  <option>Renovation & Remodeling</option>
                  <option>Building Extension</option>
                  <option>Project Consultation</option>
                  <option>Maintenance & Repair</option>
                  <option>Other</option>
                </select>

                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-300 transition-colors duration-300 group-focus-within:text-[#F5A623]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              {/* Message */}
              <textarea
                rows="6"
                name="message"
                placeholder="Tell us about your project..."
                className="contact-input"
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-secondary hover:bg-[#E09200] text-white font-semibold py-2 lg:py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <LuSend className="inline mr-2 text-lg" />
                Send Message
              </button>
            </form>
          </div>

          {/* Google Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl  h-[320px] sm:h-[400px] md:h-[500px] lg:min-h-[650px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7813.2210620957885!2d77.2646081!3d10.5846013!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9cdc269835d37%3A0xfedeee2f5ee3146a!2sVIP%20CONSTRUCTION%20%EF%B8%8F!5e1!3m2!1sen!2sin!4v1785590467842!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
