import React, { createContext, useContext, useEffect, useState } from "react";

// Context 생성
const ScrollContext = createContext<number>(0);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [scrollY, setScrollY] = useState(window.scrollY);
  let ticking = false; // ✅ 중복 이벤트 방지

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        ticking = true;
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={scrollY}>{children}</ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
