import { RefObject, useEffect, useState } from "react";

const useBottomScrollListener = (ref: RefObject<HTMLDivElement>) => {
  const [isBottom, setIsBottom] = useState(true);

  const handleScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } = ref.current!;

    const isAtBottom =
      clientHeight === scrollHeight ||
      Math.ceil(scrollTop + clientHeight) >= scrollHeight;
    setIsBottom(isAtBottom);
  };

  useEffect(() => {
    if (!ref.current) return;
    handleScroll();
    ref.current!.addEventListener("scroll", handleScroll);
    return () => {
      if (!ref.current) return;
      ref.current!.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  return isBottom;
};

export default useBottomScrollListener;
