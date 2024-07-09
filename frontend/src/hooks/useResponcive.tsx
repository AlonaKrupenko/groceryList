// hooks/useResponsive.js
import { useMediaQuery } from "react-responsive";

export type ScreenSize =
  | "isMobile"
  | "isTablet"
  | "isDesktop"
  | "isLargeDesktop"
  | "isExtraLargeDesktop";

export const useResponsive = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isDesktop = useMediaQuery({ minWidth: 992, maxWidth: 1199 });
  const isLargeDesktop = useMediaQuery({ minWidth: 1200, maxWidth: 1399 });
  const isExtraLargeDesktop = useMediaQuery({ minWidth: 1400 });

  let screenSize: ScreenSize | null = null;

  switch (true) {
    case isMobile:
      screenSize = "isMobile";
      break;
    case isTablet:
      screenSize = "isTablet";
      break;
    case isDesktop:
      screenSize = "isDesktop";
      break;
    case isLargeDesktop:
      screenSize = "isLargeDesktop";
      break;
    case isExtraLargeDesktop:
      screenSize = "isExtraLargeDesktop";
      break;
  }

  return screenSize;
};
