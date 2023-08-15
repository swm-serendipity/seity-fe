import ProfileIcon from "@/components/ui/posts/profile-icon";
import Image from "next/image";
import PostsUserChat from "./posts-user-chat";
import PostsAIChat from "./posts-ai-chat";
import { useRouter } from "next/navigation";

type PostsPopularMainCardProps = {
  post: Post;
};

export function PostsPopularMainCard({ post }: PostsPopularMainCardProps) {
  const router = useRouter();
  const handleCardClick = () => {
    router.push(`/share/${post.id}`);
  };
  return (
    <div
      className="bg-white min-w-[410px] w-[410px] h-[304px] rounded-2xl flex flex-col px-5 posts-main-card"
      onClick={handleCardClick}
    >
      <div className="bg-[#EEEEEE] mt-5 h-[180px] rounded-lg px-5 overflow-hidden">
        <PostsUserChat text={post.firstQna.question} user="Jay" />
        <PostsAIChat text={post.firstQna.answer} />
      </div>
      <div className="mt-5 text-[18px] font-[600] line-clamp-1">
        {post.title}
      </div>
      <div className="flex justify-between mt-3.5">
        <ProfileIcon
          name={post.memberName}
          textColor={post.memberProfileTextHex}
          bgColor={post.memberProfileBackgroundHex}
        />
        <div className="border-border-default border py-1.5 flex px-3.5 rounded-full">
          <Image
            src="/posts/popular-prompt-like.png"
            width={16}
            height={16}
            alt="좋아요"
          />
          <span className="ml-1.5 text-body-small text-whitebg-info">
            {post.likeNumber}
          </span>
        </div>
      </div>
    </div>
  );
}
