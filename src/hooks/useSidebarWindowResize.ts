// useWindowResize.js
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const useSidebarWindowResize = (
  initialState: boolean
): [
  boolean,
  Dispatch<SetStateAction<boolean>>,
  boolean,
  Dispatch<SetStateAction<boolean>>
] => {
  const [showSidebar, setShowSidebar] = useState(initialState);
  const [showHiddenbar, setShowHiddenbar] = useState(!initialState);

  useEffect(() => {
    const checkScreenSize = () => {
      setShowSidebar(window.innerWidth > 900);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return [showSidebar, setShowSidebar, showHiddenbar, setShowHiddenbar];
};

export default useSidebarWindowResize;
