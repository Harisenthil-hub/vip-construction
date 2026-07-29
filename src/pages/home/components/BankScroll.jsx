import { banks } from "../data/banks";

export function BankScroll() {
  return (
    <section className="py-12 lg:py-20 lg:max-w-[1200px] m-auto">
      <div>
        {/* BANKSCROLL HEADER */}
        <div className="home-container-header">
          <span className="span-heading text-xs">Banking Assistance</span>
          <h2 className="h2-heading">25+ Trusted Bank Partners</h2>
          <div className="divider" />
        </div>

        {/* BANK SCROLL */}
        <div className="relative overflow-hidden">
          <div className="flex animate-bank-scroll w-max">
            {[...banks, ...banks].map((bank, index) => (
              <div
                key={index}
                className="mx-8 flex m-4 h-28 w-52 shrink-0 items-center justify-center rounded-xl bg-white p-6"
              >
                <img
                  src={bank.logo}
                  alt={bank.name}
                  className="max-h-14 w-full h-full object-contain hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
