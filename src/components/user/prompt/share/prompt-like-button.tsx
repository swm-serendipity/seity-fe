import Image from "next/image";

type PromptLikeButtonProps = {
  onClick: () => void;
  isLiked?: boolean;
};

export default function PromptLikeButton({
  onClick,
  isLiked = false,
}: PromptLikeButtonProps) {
  if (isLiked) {
    return (
      <button
        className="w-[40px] h-[40px] rounded-full chat-bottom-button absolute 
        right-4 md:right-7 lg:right-12 xl:right-40 2xl:right-60 bottom-[186px] bg-[#54D889] z-50
        flex flex-col justify-center items-center"
        onClick={onClick}
      >
        <Image
          src="/share/share-like-on.png"
          width={18}
          height={18}
          alt="좋아요"
          priority
        />
      </button>
    );
  } else {
    return (
      <button
        className="w-[40px] h-[40px] rounded-full chat-bottom-button absolute 
        right-4 md:right-7 lg:right-12 xl:right-40 2xl:right-60 bottom-[186px] bg-white z-50
        flex flex-col justify-center items-center"
        onClick={onClick}
      >
        <Image
          src="/share/share-like.png"
          width={18}
          height={18}
          alt="좋아요"
          priority
        />
      </button>
    );
  }
}
