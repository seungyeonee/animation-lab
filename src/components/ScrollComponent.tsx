import { useScroll } from "../context/ScrollContext";
import { useEffect, useRef, useState, type HTMLAttributes } from "react";

interface ScrollComponentProps extends HTMLAttributes<HTMLElement> {
  transition?: "start" | "both" | "end";
  gap?: number;
  animation?: {
    name?: string;
    ease?: string;
    duration?: number;
  };
}

const ScrollComponent = ({
  transition = "both",
  gap = 0,
  animation = {
    name: "fade",
    ease: "ease-in-out",
    duration: 0.3,
  },
  className,
  children,
}: ScrollComponentProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const scrollY = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const { top } = ref.current.getBoundingClientRect();
      if (transition === "both") {
        if (
          top > gap &&
          top < window.innerHeight - ref.current.clientHeight - gap
        ) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else if (transition === "end") {
        if (top < window.innerHeight - ref.current.clientHeight - gap) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else {
        if (top > gap) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    }
  }, [scrollY]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        animation: `${animation.name ?? "fade"}${isVisible ? "In" : "Out"} ${
          animation.duration ?? 0.3
        }s 1 forwards ${animation.ease ?? "ease-in-out"}`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollComponent;
