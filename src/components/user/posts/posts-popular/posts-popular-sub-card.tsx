import ProfileIcon from "@/components/ui/posts/profile-icon";
import formatDate from "@/utils/formatDate";
import Image from "next/image";
import { useRouter } from "next/navigation";

type PostsPopularSubCardProps = {
  post: Post;
};

export function PostsPopularSubCard({ post }: PostsPopularSubCardProps) {
  const router = useRouter();
  const handleCardClick = () => {
    router.push(`/share/${post.id}`);
  };
  return (
    <div
      className="bg-white w-[410px] h-[125px] rounded-2xl py-5 px-5 flex-col flex gap-2.5 posts-sub-card"
      onClick={handleCardClick}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <ProfileIcon
            name={post.memberName}
            size="sm"
            textColor={post.memberProfileTextHex}
            bgColor={post.memberProfileBackgroundHex}
          />
          <p className="text-[13px] text-whitebg-info">{post.memberPart}</p>
        </div>
        <div className="text-[13px] text-whitebg-info">
          {formatDate(post.lastModifiedAt)}
        </div>
      </div>
      <div className="text-[17px] line-clamp-1">{post.title}</div>
      <div className="flex">
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
  );
}
