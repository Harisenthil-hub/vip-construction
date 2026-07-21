import { useState } from "react";
import { services } from "../data/services";
import TabNavigation from "./TabNavigation";
import ServiceContent from "./ServiceContent";

export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState("residential");

  const activeService =
    services.find((service) => service.id === activeTab) || services[0];

  return (
    <section id="services" className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[3px] text-amber-700 border border-amber-200">
            Our Services
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            Construction Solutions
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
            We provide complete construction solutions from planning and architecture to execution, interiors, renovation, and industrial projects with exceptional quality.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-10 sm:mt-12">
          <TabNavigation
            services={services}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>

        {/* Active Content */}
        <div className="mt-8 sm:mt-12 rounded-3xl bg-white p-6 sm:p-10 shadow-xl lg:p-12 border border-slate-100">
          <ServiceContent service={activeService} />
        </div>
      </div>
    </section>
  );
}
