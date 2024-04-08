"use client";
import { useEffect, useState } from "react";

//Max width mobile 640px
const MAX_WIDTH_MOBILE = 640;

export function useDevice() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      let size = window.matchMedia("(max-width: 640px)").matches;
      if (size) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    // Initial check

    // Event listener for screen resize
    window.addEventListener("resize", handleResize);

    return () => {
      // Clean up event listener on component unmount
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return { isMobile };
}
