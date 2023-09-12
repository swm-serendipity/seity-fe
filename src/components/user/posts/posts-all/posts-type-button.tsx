import Image from "next/image";

type Props = {
  type: "all" | "scrap" | "share";
  title: string;
};

export default function PostsTypeButton({ type, title }: Props) {
  const handleScrapClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
  };
  if (type == "scrap") {
    return (
      <div className="flex justify-between">
        <div className="line-clamp-1 mr-10 text-body-large font-bold">
          {title}
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
    );
  } else {
    return (
      <div className="line-clamp-1 mr-10 text-body-large font-bold">
        {title}
      </div>
    );
  }
}
