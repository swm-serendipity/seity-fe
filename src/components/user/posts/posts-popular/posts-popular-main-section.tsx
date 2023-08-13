import { PostsPopularMainCard } from "./posts-popular-main-card";

export default function PostsPopularMainSection() {
  return (
    <div className="flex flex-col mt-14 w-full">
      <p className="font-h1 text-h3 px-12 mb-4">우리 부서 내 인기 프롬프트🔥</p>
      <div
        className="flex gap-5 flex-shrink-0 whitespace-nowrap overflow-x-auto custom-scrollbar
      ml-12 last:mr-12 pb-1"
      >
        <PostsPopularMainCard />
        <PostsPopularMainCard />
        <PostsPopularMainCard />
      </div>
    </div>
  );
}
