import PostsAllUserChat from "./posts-user-chat";
import PostsAllAIChat from "./posts-ai-chat";
import ProfileIcon from "@/components/ui/posts/profile-icon";
import { useRouter } from "next/navigation";
import Pagination from "@/components/ui/posts/pagination";
import timeAgo from "@/utils/timeAgo";
import Image from "next/image";

type Props = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  data: any;
};

export default function PostsMainSection({
  currentPage,
  setCurrentPage,
  data,
}: Props) {
  const router = useRouter();

  const handleCardClick = (id: string) => {
    router.push(`/share/${id}`);
  };

  const handleScrapClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
  };

  return (
    <div className="w-[1000px] mt-3 mx-12">
      <div className="border border-black w-full"></div>
      <div className="mb-10">
        {data.result?.posts.map((post: Post) => (
          <div
            className="h-[260px] border-b border-[#E2E2E2] px-7.5 py-6 bg-white cursor-pointer"
            key={post.id}
            onClick={() => handleCardClick(post.id)}
          >
            <div className="flex flex-col">
              <div className="h-[190px]">
                <div className="flex justify-between">
                  <div className="line-clamp-1 mr-10 text-body-large font-bold">
                    {post.title}
                  </div>
                  <button onClick={handleScrapClick}>
                    <Image
                      src="/share/share-scrap-on-black.png"
                      width={16}
                      height={16}
                      alt="스크랩"
                    />
                  </button>
                </div>
                <PostsAllUserChat
                  text={post.firstQna.question}
                  user={post.memberName}
                />
                <PostsAllAIChat text={post.firstQna.answer} />
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <ProfileIcon
                    bgColor={post.memberProfileBackgroundHex}
                    textColor={post.memberProfileTextHex}
                    name={post.memberName}
                  />
                  <div className="text-[13px] text-whitebg-info">
                    {post.memberPart}
                  </div>
                </div>
                <div className="text-body-small text-whitebg-info">
                  {`${timeAgo(post.lastModifiedAt)} · 좋아요 ${
                    post.likeNumber
                  }`}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={data!.result.totalPages}
      />
    </div>
  );
}
