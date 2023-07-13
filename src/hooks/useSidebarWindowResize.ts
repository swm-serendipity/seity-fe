// useWindowResize.js
import { useStore } from "@/store/store";
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
  const disableNotification = useStore((state) => state.disableNotification);

  useEffect(() => {
    const checkScreenSize = () => {
      setShowSidebar(window.innerWidth > 900);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (!showSidebar) {
      disableNotification();
    }
  }, [disableNotification, showSidebar]);

  return [showSidebar, setShowSidebar, showHiddenbar, setShowHiddenbar];
};

export default useSidebarWindowResize;
