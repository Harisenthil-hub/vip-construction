import genkitLogo from "../assets/photos/watermark/transparent-white-text-cutted-logo.webp";

export function WaterMark() {
  return (
    <div className="flex lg:justify-end px-4 lg:px-0 mr-10 mb-5">
      <a
        href="https://genkit.in"
        target="_blank"
        rel="noopener noreferrer"
        className=" group inline-flex flex-col items-start "
        aria-label="Visit Genkit Webservices"
      >
        {/* POWERED BY */}
        <span
          className=" text-[9px] font-medium tracking-[0.2em] text-white/60 uppercase mb-1 ml-1  transition-all
            duration-300 ease-in-out group-hover:text-white" >
          Powered By
        </span>

        {/* LOGO */}
        <img
          src={genkitLogo}
          alt="Genkit Webservices"
          className=" w-32 h-auto object-contain"
        />
      </a>
    </div>
  );
}
