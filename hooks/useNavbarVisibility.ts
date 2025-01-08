
import { useState, useEffect } from "react";

export default function useNavbarVisibility(
  hideStart: number,
  hideEnd: number
) {
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsNavbarHidden(scrollY >= hideStart && scrollY <= hideEnd);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hideStart, hideEnd]);

  return isNavbarHidden;
}
