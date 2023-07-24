import { useRef, useEffect } from "react";

function useIntersectionObserver(
  isFetching: boolean,
  canFetchMore: boolean | undefined,
  fetchMore: () => void
) {
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isFetching || !canFetchMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting) {
          fetchMore();
        }
      },
      { threshold: 1.0 }
    );

    const currentObserverRef = observerRef.current! as Element;
    observer.observe(currentObserverRef);

    // Clean up function
    return () => observer.unobserve(currentObserverRef);
  }, [observerRef, isFetching, canFetchMore]);

  return observerRef;
}

export default useIntersectionObserver;
