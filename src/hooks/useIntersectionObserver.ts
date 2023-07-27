import { useRef, useEffect } from "react";

function useIntersectionObserver(
  isFetching: boolean,
  canFetchMore: boolean | undefined,
  fetchMore: () => void
) {
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentObserverRef = observerRef.current;

    if (isFetching || !canFetchMore || !currentObserverRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting) {
          fetchMore();
          console.log(1);
        }
      },
      { threshold: 1.0 }
    );

    observer.observe(currentObserverRef);

    // Clean up function
    return () => observer.unobserve(currentObserverRef);
  }, [observerRef.current, isFetching, canFetchMore]); // observerRef.current를 사용하도록 수정

  return observerRef;
}

export default useIntersectionObserver;
