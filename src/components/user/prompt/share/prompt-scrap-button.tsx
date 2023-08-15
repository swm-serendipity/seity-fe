import Image from "next/image";

type PromptScrapButtonProps = {
  onClick: () => void;
  isScraped?: boolean;
};

export default function PromptScrapButton({
  onClick,
  isScraped = false,
}: PromptScrapButtonProps) {
  if (isScraped) {
    return (
      <button
        className="w-[40px] h-[40px] rounded-full chat-bottom-button absolute 
        right-4 md:right-7 lg:right-12 xl:right-40 2xl:right-60 bottom-[236px] bg-[#8F5ECC] z-50 flex
        flex-col justify-center items-center"
        onClick={onClick}
      >
        <Image
          src="/share/share-scrap-on.png"
          width={15}
          height={15}
          alt="스크랩"
        />
      </button>
    );
  } else {
    return (
      <button
        className="w-[40px] h-[40px] rounded-full chat-bottom-button absolute 
        right-4 md:right-7 lg:right-12 xl:right-40 2xl:right-60 bottom-[236px] bg-white z-50 flex
        flex-col justify-center items-center"
        onClick={onClick}
      >
        <Image
          src="/share/share-scarp.png"
          width={15}
          height={15}
          alt="스크랩"
        />
      </button>
    );
  }
}
