import { banks } from "../data/banks";

export function BankScroll() {
  return (
    <section className="py-12 lg:py-20 lg:max-w-[1200px] m-auto">
      <div>
        {/* BANKSCROLL HEADER */}
        <div className="home-container-header">
          <span className="span-heading text-xs">Banking Assistance</span>
          <h2 className="h2-heading">25+ Banking Collaborations</h2>
          <div className="divider" />
        </div>

        {/* BANK SCROLL */}
        <div className="relative overflow-hidden mx-8 md:mx-0">
          <div className="flex animate-bank-scroll w-max">
            {[...banks, ...banks].map((bank, index) => (
              <div
                key={index}
                className="mx-8 flex  h-28 w-35 shrink-0 items-center justify-center rounded-xl bg-white"
              >
                <img
                  src={bank.logo}
                  alt={bank.name}
                  className="max-h-14 w-full h-full object-contain transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
