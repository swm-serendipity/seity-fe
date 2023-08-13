import { PostsPopularSubCard } from "./posts-popular-sub-card";

export default function PostsPopularSubSection() {
  return (
    <div className="flex mt-14 w-full">
      <div className="ml-12 flex overflow-x-auto custom-scrollbar gap-5 pb-1 mb-4">
        <div className="flex-col flex">
          <p className="font-h1 text-h3 mb-4">최근 공유된 프롬프트✨</p>
          <div className="flex gap-2.5 flex-col overflow-y-auto custom-scrollbar">
            <PostsPopularSubCard />
            <PostsPopularSubCard />
            <PostsPopularSubCard />
            <PostsPopularSubCard />
          </div>
        </div>

        <div className="flex-col flex">
          <p className="font-h1 text-h3 mb-4">명예의 전당🥇</p>
          <div className="flex gap-2.5 flex-col overflow-y-auto custom-scrollbar">
            <PostsPopularSubCard />
            <PostsPopularSubCard />
            <PostsPopularSubCard />
            <PostsPopularSubCard />
          </div>
        </div>
        <div className="flex-col flex mr-12">
          <p className="font-h1 text-h3 mb-4">이번 주 인기 프롬프트🥇</p>
          <div className="flex gap-2.5 flex-col overflow-y-auto custom-scrollbar">
            <PostsPopularSubCard />
            <PostsPopularSubCard />
            <PostsPopularSubCard />
            <PostsPopularSubCard />
          </div>
        </div>
      </div>
    </div>
  );
}
