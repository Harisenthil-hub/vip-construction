import { FaHome } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaIndustry } from "react-icons/fa";
import { FaCompassDrafting } from "react-icons/fa6";
import { FaCouch } from "react-icons/fa";
import { FaHammer } from "react-icons/fa";

const icons = {
  residential: <FaHome />,
  commercial: <FaBuilding />,
  industrial: <FaIndustry />,
  architecture: <FaCompassDrafting />,
  interior: <FaCouch />,
  renovation: <FaHammer />,
};

export default function TabNavigation({ services, activeTab, setActiveTab }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 w-full">
      {services.map((service) => (
        <button
          key={service.id}
          onClick={() => setActiveTab(service.id)}
          className={`
            group
            flex
            flex-col
            sm:flex-row
            items-center
            justify-center
            sm:justify-start
            text-center
            sm:text-left
            w-full
            gap-2
            sm:gap-3
            rounded-2xl
            px-3
            py-4
            sm:px-4
            sm:py-3.5
            lg:px-3
            lg:py-3
            xl:px-5
            xl:py-4
            transition-all
            duration-300
            border
            active:scale-95
            ${
              activeTab === service.id
                ? "bg-slate-900 border-slate-900 text-white shadow-lg scale-[1.02]"
                : "bg-white border-slate-200 text-slate-800 hover:border-amber-400 hover:shadow-md"
            }
          `}
        >
          <div
            className={`
              text-xl
              sm:text-2xl
              transition-colors
              duration-300
              ${
                activeTab === service.id
                  ? "text-amber-400"
                  : "text-amber-500"
              }
            `}
          >
            {icons[service.id]}
          </div>

          <div>
            <h3 className="font-bold text-xs sm:text-sm lg:text-xs xl:text-base leading-tight">
              {service.title}
            </h3>
            <p
              className={`
                text-[9px]
                sm:text-xs
                lg:text-[10px]
                xl:text-xs
                mt-0.5
                font-medium
                ${
                  activeTab === service.id
                    ? "text-slate-300"
                    : "text-slate-500"
                }
              `}
            >
              {service.subtitle.split(" ")[0] || "Premium"} Choice
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}
