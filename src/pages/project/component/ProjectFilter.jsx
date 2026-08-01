import {
  LayoutGrid,
  Home,
  Building2,
  Factory,
  Clock,
  CheckCircle,
  Wrench,
  Rocket,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

const filters = [
  { name: "All Projects", icon: LayoutGrid },
  { name: "Residential", icon: Home },
  { name: "Commercial", icon: Building2 },
  { name: "Industrial", icon: Factory },
  { name: "Renovation", icon: Wrench },
  { name: "Ongoing", icon: Clock },
  { name: "Completed", icon: CheckCircle },
  { name: "Upcoming", icon: Rocket },
];

const ProjectFilter = ({ activeFilter, setActiveFilter }) => {
  const scrollRef = useRef(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(true);

  const checkScrollButtons = () => {
    const container = scrollRef.current;

    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;

      setShowLeftFade(scrollLeft > 10);
      setShowRightFade(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;

    if (container) {
      container.addEventListener("scroll", checkScrollButtons);
      window.addEventListener("resize", checkScrollButtons);

      checkScrollButtons();

      return () => {
        container.removeEventListener("scroll", checkScrollButtons);
        window.removeEventListener("resize", checkScrollButtons);
      };
    }
  }, []);

  return (
    <div className="relative">

      {/* Left Fade */}
      {showLeftFade && (
        <div className="hidden md:block pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 lg:w-20 bg-gradient-to-r from-surface via-surface/80 to-transparent" />
      )}

      {/* Right Fade */}
      {showRightFade && (
        <div className="hidden md:block pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 lg:w-20 bg-gradient-to-l from-surface via-surface/80 to-transparent" />
      )}

      {/* Filter Buttons */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth py-2 px-4 md:px-0"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {filters.map((filter) => {
          const Icon = filter.icon;

          const active = activeFilter === filter.name;

          return (
            <button
              key={filter.name}
              onClick={() => setActiveFilter(filter.name)}
              className={`
                flex-shrink-0
                flex
                items-center
                gap-2
                px-5
                py-3
                rounded-full
                border
                font-medium
                transition-all
                duration-300

                ${
                  active
                    ? "bg-secondary text-white border-secondary shadow-lg"
                    : "bg-white border-gray-200 text-text-primary hover:bg-secondary hover:text-white hover:border-secondary"
                }
              `}
            >
              <Icon size={18} />

              <span>{filter.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectFilter;