import { useEffect } from "react";

export default function useSlideUp() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("slide-up-show");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15,
            }
        );

        const elements = document.querySelectorAll(".slide-up");

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
}