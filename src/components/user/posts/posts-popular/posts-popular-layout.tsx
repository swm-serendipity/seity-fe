import PostsPopularMainSection from "./posts-popular-main-section";
import PostsPopularSubSection from "./posts-popular-sub-section";

export default function PostsPopularLayout() {
  return (
    <div className="flex flex-col flex-1 h-screen bg-[#FAFBFD] z-10 w-full overflow-y-auto">
      <PostsPopularMainSection />
      <PostsPopularSubSection />
    </div>
  );
}
