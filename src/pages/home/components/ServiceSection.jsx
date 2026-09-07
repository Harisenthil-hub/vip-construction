import { data_container_1, data_container_2 } from "../data/service";
import useSlideUp from "../../../hooks/useSlideUp";

export function ServiceSection() {
  useSlideUp();
  return (
    <section className="py-7 sm:py-14 lg:py-20 lg:max-w-[1200px] m-auto">
      <div>
        {/* SERVICE HEADER */}
        <div className="home-container-header">
          <span className="span-heading">What We Do</span>
          <h2 className="h2-heading">
            From Foundation to Finish, We Handle It All
          </h2>
          <div className="divider" />
        </div>

        {/* 1'ST GRID CONTAINER */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mx-3 sm:mx-4 lg:mx-2">
          {data_container_1.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="slide-up p-4 sm:p-6 lg:p-7 group border border-solid rounded-xl border-text-muted/50 hover:border-secondary transition-all duration-300 ease-in-out  hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]"
              >
                <div className="bg-secondary/10 flex w-10 h-10 sm:w-12 sm:h-12 items-center justify-center rounded mb-4 group-hover:-rotate-5 transition-all duration-300 ease-in-out group-hover:bg-secondary">
                  {/* ICON */}
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-secondary group-hover:scale-120 group-hover:-rotate-5 transition-all duration-300 ease-in-out group-hover:text-white" />
                </div>
                <h3 className="mb-1 text-xs sm:text-base font-bold">
                  {service.heading}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-text-dark-muted">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* 2'ND GRID CONTAINER */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mx-3 mt-3 lg:mx-2 sm:mx-4">
          {data_container_2.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="slide-up p-4 sm:p-6 lg:p-7 group border border-solid rounded-xl border-text-muted/50 hover:border-secondary transition-all duration-300 ease-in-out  hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]"
              >
                <div className="bg-secondary/10 flex w-10 h-10 sm:w-12 sm:h-12 items-center justify-center rounded mb-4 group-hover:-rotate-5 transition-all duration-300 ease-in-out group-hover:bg-secondary">
                  {/* ICON */}
                  <Icon
                    size={30}
                    className="w-6 h-6 sm:w-7 sm:h-7 text-secondary group-hover:scale-120 group-hover:-rotate-5 transition-all duration-300 ease-in-out group-hover:text-white"
                  />
                </div>
                <h3 className="mb-1 text-xs sm:text-base font-bold">
                  {service.heading}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-text-dark-muted">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
