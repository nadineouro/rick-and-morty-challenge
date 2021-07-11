import React from "react";
import { breakpoints } from "../styles/shared/breakpoints";

const useDevice = () => {
  const [width, setWidth] = React.useState<number>(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= breakpoints.sm;
  const isTablet = width > breakpoints.sm && width <= breakpoints.md;
  const isMobileOrTablet = width <= breakpoints.md;

  return { isMobile, isTablet, isMobileOrTablet };
};

export default useDevice;
