import { useRouter } from "next/navigation";
import { PostsPopularMainCard } from "./posts-popular-main-card";

type PostsPopularMainSectionProps = {
  posts: Post[];
};

export default function PostsPopularMainSection({
  posts,
}: PostsPopularMainSectionProps) {
  const router = useRouter();
  const handleOtherPosts = () => {
    router.push("/posts/all");
  };

  return (
    <div className="flex flex-col mt-14 w-full">
      <p className="font-h1 text-h3 px-12 mb-4">우리 부서 내 인기 프롬프트🔥</p>

      {posts.length > 0 ? (
        <div
          className="flex gap-5 flex-shrink-0 whitespace-nowrap overflow-x-auto custom-scrollbar
         ml-12 pb-1 last:pr-6"
        >
          {posts.slice(0, 3).map((post) => {
            return <PostsPopularMainCard post={post} key={post.id} />;
          })}
          <div
            className="flex flex-col justify-center items-center ml-7 gap-2"
            onClick={handleOtherPosts}
          >
            <div
              className="box-border w-11 h-11 border border-gray-300 
          rounded-full flex flex-col justify-center items-center relative"
            >
              <div className="absolute w-4 h-px border border-whitebg-info" />
              <div className="absolute w-4 h-px border border-whitebg-info -rotate-90" />
            </div>
            <div className="text-body-medium text-whitebg-info">더보기</div>
          </div>
        </div>
      ) : (
        <div className="ml-12 min-w-[410px] h-[304px]">
          등록된 게시글이 없습니다.
        </div>
      )}
    </div>
  );
}
