import { RefObject, useEffect, useState } from "react";

const useBottomScrollListener = (ref: RefObject<HTMLDivElement>) => {
  const [isBottom, setIsBottom] = useState(false);

  const handleScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } = ref.current!;
    const isAtBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
    setIsBottom(isAtBottom);
  };

  useEffect(() => {
    if (!ref.current) return;
    ref.current!.addEventListener("scroll", handleScroll);
    return () => {
      if (!ref.current) return;
      ref.current!.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  return isBottom;
};

export default useBottomScrollListener;
