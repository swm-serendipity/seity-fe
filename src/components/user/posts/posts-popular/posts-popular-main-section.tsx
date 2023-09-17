import { useRouter } from "next/navigation";
import { PostsPopularMainCard } from "./posts-popular-main-card";
import Image from "next/image";

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
         pl-12 pb-2 last:pr-6"
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
        <div className="flex gap-12">
          <div
            className="ml-12 w-[1268px] h-[304px] bg-white rounded-2xl flex flex-col justify-center items-center posts-main-card
         text-body-medium"
          >
            <Image
              src="/posts/popular-prompt-none.png"
              width={38}
              height={38}
              alt="빈 아이콘"
            />
            <div className="mt-3 text-whitebg-disable">
              부서 공유 페이지가 비어있어요.
            </div>
            <div className="text-whitebg-disable">
              당신의 프롬프트를 먼저 공유해보세요.
            </div>
          </div>
          <div
            className="flex flex-col justify-center items-center ml-7 gap-2 cursor-pointer"
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
      )}
    </div>
  );
}
