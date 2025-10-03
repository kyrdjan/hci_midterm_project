import { useInView } from "./useInView";

function FadeInSection({ children, className = "", value  = 0.3 }) {
  const [ref, inView] = useInView({ threshold: value }); // 10% visible triggers

  return (
    <div
      ref={ref}
      className={`${className} transition-opacity duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
}

export default FadeInSection;
