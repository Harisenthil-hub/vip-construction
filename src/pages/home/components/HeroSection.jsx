import heroVideo from "../../../assets/videos/hero-home.webm";
import heroPoster from "../../../assets/photos/hero-home.webp";
import { HeroContent } from "./HeroContent";



export function HeroSection() {
  return (
    <section className=" relative min-h-[calc(100vh-100px)] lg:min-h-[720px] flex items-center overflow-hidden ">
      {/* DESKTOP BACKGROUND VIDEO */}
      <video
        className=" hidden lg:block absolute inset-0 w-full h-full object-cover "
        autoPlay
        muted
        loop
        playsInline
        poster={heroPoster}
        aria-hidden="true"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* MOBILE / TABLET BACKGROUND IMAGE */}
      <div
        className=" lg:hidden absolute inset-0 bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${heroPoster})` }}
        aria-hidden="true"
      />

      {/* DARK OVERLAY */}
      <div
        className=" absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/45 lg:from-slate-950/95 lg:via-slate-950/75 lg:to-slate-950/40 "
        aria-hidden="true"
      />

      {/* HERO CONTENT */}
      <HeroContent />
    </section>
  );
}
