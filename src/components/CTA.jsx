export default function CTA() {
  const handleScroll = () => {
    const form = document.getElementById("contact-form");

    if (!form) return;

    const navbarOffset = 100;

    const top =
      form.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    // Focus the first input after scrolling
    setTimeout(() => {
      const firstInput = form.querySelector("input");
      if (firstInput) {
        firstInput.focus();
      }
    }, 700);
  };

  return (
    <section className="bg-[#111111] py-24 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Ready to Start Your Project?
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-300">
          Partner with experienced builders committed to quality,
          innovation, and timely delivery. Let our experts guide you
          through every stage of your construction journey.
        </p>

        {/* Button */}
        <button
          onClick={handleScroll}
          className="
            mt-10
            inline-flex
            items-center
            justify-center
            bg-[#F5A623]
            hover:bg-[#E09200]
            text-[#1A1F2E]
            font-bold
            px-10
            py-4
            rounded-lg
            shadow-lg
            hover:shadow-2xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:scale-105
          "
        >
          Get Free Consultation
        </button>

      </div>
    </section>
  );
}

