import * as React from "react";

// Screen size breakpoints
const BREAKPOINTS = {
  mobile: 640,     // sm: 640px
  tablet: 768,     // md: 768px
  laptop: 1024,    // lg: 1024px
  desktop: 1280,   // xl: 1280px
  widescreen: 1536 // 2xl: 1536px
};

export function useMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${BREAKPOINTS.tablet - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < BREAKPOINTS.tablet);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < BREAKPOINTS.tablet);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}

export function useResponsive() {
  const [screenSize, setScreenSize] = React.useState({
    isMobile: false,
    isTablet: false,
    isLaptop: false,
    isDesktop: false,
    isWidescreen: false
  });

  React.useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setScreenSize({
        isMobile: width < BREAKPOINTS.mobile,
        isTablet: width >= BREAKPOINTS.mobile && width < BREAKPOINTS.laptop,
        isLaptop: width >= BREAKPOINTS.laptop && width < BREAKPOINTS.desktop,
        isDesktop: width >= BREAKPOINTS.desktop && width < BREAKPOINTS.widescreen,
        isWidescreen: width >= BREAKPOINTS.widescreen
      });
    };

    // Initial check
    checkScreenSize();

    // Add event listener
    window.addEventListener('resize', checkScreenSize);

    // Clean up
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return screenSize;
}
