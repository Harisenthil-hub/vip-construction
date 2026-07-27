import {
    LayoutGrid,
    Package,
    Hammer,
    BrickWall,
    Building2,
    Trees,
    Grid2X2,
    Cable,
    Droplets,
    PaintBucket,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

const filters = [
    { name: "All Materials", icon: LayoutGrid },
    { name: "Cement", icon: Package },
    { name: "Steel", icon: Hammer },
    { name: "Bricks", icon: BrickWall },
    { name: "Concrete", icon: Building2 },
    { name: "Wood", icon: Trees },
    { name: "Tiles", icon: Grid2X2 },
    { name: "Electrical", icon: Cable },
    { name: "Plumbing", icon: Droplets },
    { name: "Paint", icon: PaintBucket },
];

const MaterialFilter = ({ activeFilter, setActiveFilter }) => {
    const scrollRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const checkScrollButtons = () => {
        const container = scrollRef.current;
        if (container) {
            const { scrollLeft, scrollWidth, clientWidth } = container;
            setShowLeftArrow(scrollLeft > 10);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    const scroll = (direction) => {
        const container = scrollRef.current;
        if (!container) return;

        const scrollAmount = 300;
        const targetScroll =
            direction === "left"
                ? container.scrollLeft - scrollAmount
                : container.scrollLeft + scrollAmount;

        container.scrollTo({
            left: targetScroll,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const container = scrollRef.current;

        if (container) {
            container.addEventListener("scroll", checkScrollButtons);
            window.addEventListener("resize", checkScrollButtons);

            checkScrollButtons();

            return () => {
                container.removeEventListener(
                    "scroll",
                    checkScrollButtons
                );
                window.removeEventListener(
                    "resize",
                    checkScrollButtons
                );
            };
        }
    }, []);

    return (
        <div className="relative">
            {/* Left Fade - Desktop Only */}
            {showLeftArrow && (
                <div className="hidden md:block pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 lg:w-20 bg-gradient-to-r from-white via-white/80 to-transparent" />
            )}

            {/* Right Fade - Desktop Only */}
            {showRightArrow && (
                <div className="hidden md:block pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 lg:w-20 bg-gradient-to-l from-white via-white/80 to-transparent" />
            )}

            {/* Scroll Container */}
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

                    return (
                        <button
                            key={filter.name}
                            onClick={() => setActiveFilter(filter.name)}
                            className={`flex-shrink-0 flex items-center gap-2 px-5 py-3 rounded-full border transition-all duration-300 ${
                                activeFilter === filter.name
                                    ? "bg-orange-500 text-white border-orange-500 shadow-lg"
                                    : "bg-white border-gray-300 text-gray-700 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-500"
                            }`}
                        >
                            <Icon size={18} />
                            <span className="font-semibold">
                                {filter.name}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default MaterialFilter;