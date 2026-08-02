import { useRef, useEffect } from "react";
import VIDEO from "../assets/video/contact-video-vip.webm";
import VIDEOTHUMBNAIL from "../assets/video/contact-video-thumbnail-vip.webp";

export default function VideoSection() {
  const videoRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.muted = false; // Unmute on scroll
          video.play().catch((error) => {
            console.log(error);
          });
        } else {
          video.muted = true; // Force mute when moving away
          video.pause();
        }
      },
      { threshold: 0.6 } // Increased threshold for "particular place" requirement
    );
    observer.observe(video);
    return () => {
      if (video) observer.unobserve(video);
    };
  }, []);
  

  return (
    <section className="relative bg-white py-7 lg:py-10 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#F5A623]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#F5A623]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#1A1F2E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#1A1F2E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 relative">
        {/* Heading */}
        <div className="text-center mb-6 lg:mb-12">
          <span className="span-heading">See Us In Action</span>

          <h2 className="h2-heading mt-3">A Walkthrough Of Our Work</h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-8">
            Take a quick look at how we plan, build and deliver projects —
            straight from our sites to your screen.
          </p>
        </div>

        {/* Video player */}
        <div className="relative rounded-[28px] overflow-hidden shadow-[0_25px_60px_-20px_rgba(26,31,46,0.35)] aspect-video bg-[#1A1F2E]">
          {/* Poster while loading */}


          {/* Video */}
          <video
            ref={videoRef}
            loop
            playsInline
            controls
            poster={VIDEOTHUMBNAIL}
            className="h-full w-full object-cover"
          >
            <source src={VIDEO} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          

          {/* Caption */}
          <div className="hidden lg:absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-white text-xl md:text-2xl font-bold">
              Building Dreams Into Reality
            </h3>

            <p className="mt-2 text-white/80 text-sm md:text-base">
              Premium Residential & Commercial Construction Since 2019
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
