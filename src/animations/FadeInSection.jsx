import { useInView } from "./useInView";
import { useEffect, useState } from "react";

function FadeInSection({ children, className = "", value = 0.3 }) {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Track viewport width
  useEffect(() => {
    const checkScreen = () => setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint
    checkScreen(); // initial check
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Only use inView if large screen
  const [ref, inView] = useInView({ threshold: value });

  return (
    <div
      ref={isLargeScreen ? ref : null}
      className={`${className} transition-opacity duration-700 ease-out ${
        isLargeScreen
          ? inView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
          : "opacity-100 translate-y-0" // small screens: always visible
      }`}
    >
      {children}
    </div>
  );
}

export default FadeInSection;
