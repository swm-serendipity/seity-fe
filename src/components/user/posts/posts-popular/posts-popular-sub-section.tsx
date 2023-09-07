import Image from "next/image";
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
            {recentSharedPosts.length > 0 ? (
              recentSharedPosts
                .slice(0, 4)
                .map((post) => (
                  <PostsPopularSubCard post={post} key={post.id} />
                ))
            ) : (
              <div
                className="w-[410px] h-[530px] bg-white rounded-2xl flex flex-col justify-center items-center posts-main-card
           text-body-medium"
              >
                <Image
                  src="/posts/popular-prompt-none.png"
                  width={38}
                  height={38}
                  alt="빈 아이콘"
                />
                <div className="mt-3 text-whitebg-disable">
                  최근 공유 페이지가 비어있어요.
                </div>
                <div className="text-whitebg-disable">
                  당신의 프롬프트를 먼저 공유해보세요.
                </div>
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
              <div
                className="w-[410px] h-[530px] bg-white rounded-2xl flex flex-col justify-center items-center posts-main-card
             text-body-medium"
              >
                <Image
                  src="/posts/popular-prompt-none.png"
                  width={38}
                  height={38}
                  alt="빈 아이콘"
                />
                <div className="mt-3 text-whitebg-disable">
                  명예의 전당 페이지가 비어있어요.
                </div>
                <div className="text-whitebg-disable">
                  당신의 프롬프트를 먼저 공유해보세요.
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex-col flex mr-12">
          <p className="font-h1 text-h3 mb-4">이번 주 인기 프롬프트🥇</p>
          <div className="flex gap-2.5 flex-col overflow-y-auto custom-scrollbar pb-4">
            {recentHotPosts.length > 0 ? (
              recentHotPosts
                .slice(0, 4)
                .map((post) => (
                  <PostsPopularSubCard post={post} key={post.id} />
                ))
            ) : (
              <div
                className="w-[410px] h-[530px] bg-white rounded-2xl flex flex-col justify-center items-center posts-main-card
           text-body-medium"
              >
                <Image
                  src="/posts/popular-prompt-none.png"
                  width={38}
                  height={38}
                  alt="빈 아이콘"
                />
                <div className="mt-3 text-whitebg-disable">
                  이번주 인기 프롬프트가 비어있어요.
                </div>
                <div className="text-whitebg-disable">
                  당신의 프롬프트를 먼저 공유해보세요.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
