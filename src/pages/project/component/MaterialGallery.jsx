import materialCategories from "../utils/MaterialData";

const MaterialGallery = () => {
  return (
    <section className="pt-8 pb-8 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="home-container-header">
          <span className="span-heading">
            Premium Quality
          </span>

          <h2 className="h2-heading">
            Materials We Use
          </h2>

          <div className="divider my-3 sm:my-6"></div>

          <p className="max-w-3xl mx-auto text-text-dark-muted text-xs sm:text-base leading-relaxed sm:leading-8">
            We use branded, tested materials on every site — proper cement and steel, checked before they go into your building.
          </p>
        </div>

        {materialCategories.map((category, index) => (
          <div
            key={category.category}
            className={index !== materialCategories.length - 1 ? "mb-8 sm:mb-16" : ""}
          >

            {/* Category Heading */}
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-8">
              <div className="h-1 w-8 sm:w-14 bg-secondary rounded-full"></div>

              <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-primary">
                {category.category}
              </h3>

              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Materials */}
            <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-6 md:gap-8">

              {category.items.map((item) =>
                item.images.map((image, index) => (
                  <div
                    key={`${item.id}-${index}`}
                    className="group flex flex-col items-center"
                  >
                    <div
                      className="
            w-16 h-16
            sm:w-24 sm:h-24
            md:w-28 md:h-28
            overflow-hidden
            bg-white
            transition-all
            duration-300
            group-hover:scale-105
          "
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>

                  </div>
                ))
              )}

            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default MaterialGallery;