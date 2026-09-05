import certifications from '../data/certifications'

export function Certifications() {
  return (
    <section className="py-8 sm:py-12 lg:py-20 lg:max-w-[1200px] m-auto">
      <div>
        {/* CERTIFICATIONS HEADER */}
        <div className="home-container-header">
          <span className="span-heading">
            Certifications & Partners
          </span>
          <h2 className="h2-heading">Proud to Work With</h2>
          <div className="divider" />
        </div>

        {/* CERTIFICATE SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6 mx-4 lg:mx-0" >
          {certifications.map((item) => (
            <div
              key={item.id}
              className="group rounded-lg shadow-sm border border-slate-100 lg:border-none lg:shadow-none  min-h-[120px] sm:min-h-[170px] px-3 sm:px-5  py-4 sm:py-6 flex flex-col items-center justify-center text-center bg-white" >


              {/* LOGO */}
              <div
                className=" h-25 w-full flex items-center justify-center mb-4 "
              >
                <img
                  src={item.logo}
                  alt={item.altText}
                  loading="lazy"
                  className=" max-h-full max-w-full object-cover transition-all duration-300 group-hover:scale-105 " />
              </div>

              {/* NAME */}
              <h3 className=" text-sm lg:text-base font-bold text-primary " > {item.name} </h3>

              {/* TYPE */}
              <p className=" mt-1 text-xs text-text-dark-muted " > {item.type} </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
