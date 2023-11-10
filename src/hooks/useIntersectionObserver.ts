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
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(currentObserverRef);

    return () => observer.unobserve(currentObserverRef);
  }, [observerRef.current, isFetching, canFetchMore]);

  return observerRef;
}

export default useIntersectionObserver;
