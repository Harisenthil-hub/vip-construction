export default function ContactForm() {
  return (
    <section className="py-20 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-14">

          <p className="uppercase tracking-[4px] text-[#F5A623] font-semibold">
            Get In Touch
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1F2E] mt-3">
            Request A Free Quote
          </h2>

          <p className="text-[#666666] mt-5 max-w-3xl mx-auto leading-8">
            We'd love to hear about your construction project.
            Fill out the form below and our experts will get back
            to you within 24 hours.
          </p>

        </div>

        {/* Form & Map */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Form */}

          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10">

            <h3 className="text-2xl font-bold text-[#1A1F2E] mb-8">
              Send Us A Message
            </h3>

            <form className="space-y-5">

              {/* Name & Email */}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-lg border border-gray-300 p-4 outline-none transition focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-lg border border-gray-300 p-4 outline-none transition focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]"
                />

              </div>

              {/* Phone */}

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-lg border border-gray-300 p-4 outline-none transition focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]"
              />

              {/* Project Type */}

              <div className="relative">

                <select
                  defaultValue=""
                  className="w-full appearance-none rounded-lg border border-gray-300 bg-white p-4 pr-12 outline-none transition focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]"
                >

                  <option value="" disabled>
                    Select Project Type
                  </option>

                  <option>Residential Construction</option>

                  <option>Commercial Construction</option>

                  <option>Industrial Construction</option>

                  <option>Villa Construction</option>

                  <option>Apartment Construction</option>

                  <option>Office Building</option>

                  <option>Warehouse Construction</option>

                  <option>Interior Fit-Out</option>

                  <option>Renovation & Remodeling</option>

                  <option>Building Extension</option>

                  <option>Road & Infrastructure</option>

                  <option>Project Consultation</option>

                  <option>Maintenance & Repair</option>

                  <option>Other</option>

                </select>

                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-[#F5A623]"
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

              {/* Budget */}

              <div className="relative">

                <select
                  defaultValue=""
                  className="w-full appearance-none rounded-lg border border-gray-300 bg-white p-4 pr-12 outline-none transition focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]"
                >

                  <option value="" disabled>
                    Estimated Budget
                  </option>

                  <option>Below ₹10 Lakhs</option>

                  <option>₹10 Lakhs - ₹25 Lakhs</option>

                  <option>₹25 Lakhs - ₹50 Lakhs</option>

                  <option>₹50 Lakhs - ₹1 Crore</option>

                  <option>Above ₹1 Crore</option>

                  <option>Prefer to Discuss</option>

                </select>

                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-[#F5A623]"
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
                placeholder="Tell us about your project..."
                className="w-full rounded-lg border border-gray-300 p-4 outline-none transition focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]"
              ></textarea>

              {/* Button */}

              <button
                type="submit"
                className="w-full bg-[#F5A623] hover:bg-[#E09200] transition-all duration-300 text-white font-semibold py-4 rounded-lg shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>

            </form>

          </div>

          {/* Google Map */}

          <div className="rounded-2xl overflow-hidden shadow-xl min-h-[650px]">

            <iframe
              title="Google Maps"
              src="https://www.google.com/maps?q=Coimbatore,Tamil%20Nadu&output=embed"
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
            ></iframe>

          </div>

        </div>

      </div>
    </section>
  );
}