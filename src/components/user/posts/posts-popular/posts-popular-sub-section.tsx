import { PostsPopularSubCard } from "./posts-popular-sub-card";

type PostsPopularSubSectionProps = {
  recentSharedPosts: Post[];
  allHotPosts: Post[];
  recentHotPosts: Post[];
};

export default function PostsPopularSubSection({
  recentHotPosts,
  allHotPosts,
  recentSharedPosts,
}: PostsPopularSubSectionProps) {
  return (
    <div className="flex mt-14 w-full">
      <div className="ml-12 flex overflow-x-auto custom-scrollbar gap-5 pb-1 mb-4">
        <div className="flex-col flex">
          <p className="font-h1 text-h3 mb-4">최근 공유된 프롬프트✨</p>
          <div className="flex gap-2.5 flex-col overflow-y-auto custom-scrollbar pb-4">
            {recentHotPosts.length > 0 ? (
              recentHotPosts
                .slice(0, 4)
                .map((post) => (
                  <PostsPopularSubCard post={post} key={post.id} />
                ))
            ) : (
              <div className="w-[410px] h-[125px] rounded-2xl">
                등록된 게시글이 없습니다.
              </div>
            )}
          </div>
        </div>

        <div className="flex-col flex">
          <p className="font-h1 text-h3 mb-4">명예의 전당🥇</p>
          <div className="flex gap-2.5 flex-col overflow-y-auto custom-scrollbar pb-4">
            {allHotPosts.length > 0 ? (
              allHotPosts
                .slice(0, 4)
                .map((post) => (
                  <PostsPopularSubCard post={post} key={post.id} />
                ))
            ) : (
              <div className="w-[410px] h-[125px] rounded-2xl">
                등록된 게시글이 없습니다.
              </div>
            )}
          </div>
        </div>
        <div className="flex-col flex mr-12">
          <p className="font-h1 text-h3 mb-4">이번 주 인기 프롬프트🥇</p>
          <div className="flex gap-2.5 flex-col overflow-y-auto custom-scrollbar pb-4">
            {recentHotPosts.length > 0 ? (
              recentSharedPosts
                .slice(0, 4)
                .map((post) => (
                  <PostsPopularSubCard post={post} key={post.id} />
                ))
            ) : (
              <div className="w-[410px] h-[125px] rounded-2xl">
                등록된 게시글이 없습니다.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
