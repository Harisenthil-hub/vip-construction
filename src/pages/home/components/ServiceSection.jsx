import { data_container_1, data_container_2 } from "../data/service";

export function ServiceSection() {
  return (
    <section className="py-15 lg:py-20 lg:max-w-[1200px] m-auto">
      <div>
        {/* SERVICE HEADER */}
        <div className="text-center mb-14 mx-3 lg:mx-2">
          <span className="inline-block uppercase text-secondary font-bold tracking-widest text-lg lg:text-xl mb-2">
            Our Services
          </span>
          <h2 className="text-2xl md:lg-text-3xl lg:text-4xl font-extrabold text-primary mb-4 ">
            Comprehensive Construction Solutions
          </h2>
          <div className="w-[150px] lg:w-3xs bg-secondary h-1 m-auto rounded" />
        </div>

        {/* 1'ST GRID CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4 lg:mx-2">
          {data_container_1.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="px-5 py-7 sm:px-6 sm:py-8 lg:px-8 lg:py-10 group border border-solid rounded-xl border-text-muted/50 hover:border-secondary transition-all duration-300 ease-in-out  hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]"
              >
                <div className="bg-secondary/10 flex w-12 items-center justify-center h-12 rounded mb-4 group-hover:-rotate-5 transition-all duration-300 ease-in-out group-hover:bg-secondary">
                  {/* ICON */}
                  <Icon
                    size={30}
                    className="text-secondary group-hover:scale-120 group-hover:-rotate-5 transition-all duration-300 ease-in-out group-hover:text-white"
                  />
                </div>
                <h3 className="mb-1 font-bold font-xs">{service.heading}</h3>
                <p className="text-sm leading-[1.6] text-text-dark-muted">{service.description}</p>
              </div>
            );
          })}
        </div>


        {/* 2'ND GRID CONTAINER */}
        <div className="grid lg:grid-cols-3 gap-4 mt-5 lg:mx-2 mx-4">
          {data_container_2.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="px-5 py-7 sm:px-6 sm:py-8 lg:px-8 lg:py-10 group border border-solid rounded-xl border-text-muted/50 hover:border-secondary transition-all duration-300 ease-in-out  hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]"
              >
                <div className="bg-secondary/10 flex w-12 items-center justify-center h-12 rounded mb-4 group-hover:-rotate-5 transition-all duration-300 ease-in-out group-hover:bg-secondary">
                  {/* ICON */}
                  <Icon
                    size={30}
                    className="text-secondary group-hover:scale-120 group-hover:-rotate-5 transition-all duration-300 ease-in-out group-hover:text-white"
                  />
                </div>
                <h3 className="mb-1 font-bold font-sm">{service.heading}</h3>
                <p className="text-sm leading-[1.6] text-text-dark-muted">{service.description}</p>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
}
