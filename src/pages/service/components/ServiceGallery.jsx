export default function ServiceGallery({ images, title }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5">
      {images.map((image, index) => (
        <div
          key={`${title}-${index}`}
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
        </div>
      ))}
    </div>
  );
}
