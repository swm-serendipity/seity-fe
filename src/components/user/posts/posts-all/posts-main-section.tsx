import getRecentSharedPrompt from "@/apis/get-recent-shared-prompt";
import { useQuery } from "@tanstack/react-query";
import PostsAllUserChat from "./posts-user-chat";
import PostsAllAIChat from "./posts-ai-chat";
import ProfileIcon from "@/components/ui/posts/profile-icon";
import { useRouter } from "next/navigation";
import Pagination from "@/components/ui/posts/pagination";
import { useState } from "react";
import timeAgo from "@/utils/timeAgo";

export default function PostsMainSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useQuery(
    ["recent-shared-prompt", { pageNumber: currentPage - 1, pageSize: 4 }],
    getRecentSharedPrompt
  );
  const router = useRouter();

  const handleCardClick = (id: string) => {
    router.push(`/share/${id}`);
  };

  if (isLoading) return <div></div>;

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
                <div className="line-clamp-1 mr-10 text-body-large font-bold">
                  {post.title}
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
