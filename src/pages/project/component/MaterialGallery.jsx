import materialCategories from "../utils/MaterialData";

const MaterialGallery = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="home-container-header">
          <span className="span-heading">
            Premium Quality
          </span>

          <h2 className="h2-heading">
            Materials We Use
          </h2>

          <div className="divider mb-6"></div>

          <p className="max-w-3xl mx-auto text-text-dark-muted leading-8">
            We use branded, tested materials on every site — proper cement and steel, checked before they go into your building.
          </p>
        </div>

        {materialCategories.map((category) => (
          <div key={category.category} className="mb-16">

            {/* Category Heading */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-1 w-14 bg-secondary rounded-full"></div>

              <h3 className="text-2xl lg:text-3xl font-bold text-primary">
                {category.category}
              </h3>

              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Materials */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 md:gap-8">

              {category.items.map((item) =>
                item.images.map((image, index) => (
                  <div
                    key={`${item.id}-${index}`}
                    className="group flex flex-col items-center"
                  >
                    <div
                      className="
            w-20 h-20
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

                    {/* <p className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-primary text-center">
                      {item.name}
                    </p> */}
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