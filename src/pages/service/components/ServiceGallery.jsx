export default function ServiceGallery({ images, title }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5">
      {images.map((image, index) => (
        <div
          key={index}
          className="
            group
            relative
            overflow-hidden
            rounded-2xl
            sm:rounded-3xl
            shadow-md
            hover:shadow-xl
            aspect-[4/3]
            border border-slate-100
            transition-all
            duration-300
          "
        >
          {/* Image */}
          <img
            src={image}
            alt={`${title} project ${index + 1}`}
            loading="lazy"
            decoding="async"
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />

          {/* Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-slate-950/70
              via-transparent
              to-transparent
              opacity-0
              group-hover:opacity-100
              transition
              duration-300
            "
          />

          {/* Caption */}
          <div
            className="
              absolute
              bottom-3
              left-3
              sm:bottom-5
              sm:left-5
              translate-y-4
              opacity-0
              group-hover:translate-y-0
              group-hover:opacity-100
              transition-all
              duration-300
            "
          >
            <h4 className="text-white text-xs sm:text-sm md:text-base font-bold">
              {title} Project
            </h4>
            <p className="text-amber-400 text-[10px] sm:text-xs">
              VIP Construction
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
