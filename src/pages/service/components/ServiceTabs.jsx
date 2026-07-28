import { useState } from "react";
import { services } from "../data/services";
import TabNavigation from "./TabNavigation";
import ServiceContent from "./ServiceContent";

export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState("residential");

  const activeService =
    services.find((service) => service.id === activeTab) || services[0];

  return (
    <section id="services" className="bg-slate-50 py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-amber-100 px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-800 border border-amber-200">
            Our Services
          </span>
          <h2 className="mt-3 text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight">
            Construction Solutions
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto font-normal">
            Complete construction solutions from architectural planning and structural execution to interiors, renovation, and commercial complexes with engineering precision.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-8 sm:mt-10">
          <TabNavigation
            services={services}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>

        {/* Active Content */}
        <div className="mt-6 sm:mt-8 rounded-2xl bg-white p-5 sm:p-8 shadow-lg border border-slate-200/80">
          <ServiceContent service={activeService} />
        </div>
      </div>
    </section>
  );
}
