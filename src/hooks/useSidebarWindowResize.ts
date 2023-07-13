// useWindowResize.js
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const useSidebarWindowResize = (
  initialState: boolean
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const checkScreenSize = () => {
      setState(window.innerWidth > 900);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return [state, setState];
};

export default useSidebarWindowResize;
