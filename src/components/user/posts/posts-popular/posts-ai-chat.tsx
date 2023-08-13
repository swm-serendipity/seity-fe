import Image from "next/image";

type PostsAIChatProps = {
  text: string;
};

export default function PostsAIChat({ text }: PostsAIChatProps) {
  return (
    <div className="flex mt-6">
      <div className="mr-1.5 rounded-full bg-whitebg-default w-[30px] h-[30px] flex justify-center items-center text-body-medium">
        <Image
          src="/chat-ai-profile.png"
          width={17}
          height={17}
          alt="ai 프로필 아이콘"
        />
      </div>
      <div className="bg-white px-4 py-1.5 rounded-br-3xl rounded-se-3xl rounded-bl-3xl max-w-[260px] overflow-hidden">
        <p className="text-whitebg-default whitespace-pre-wrap text-[13px] line-clamp-3">
          {text}
        </p>
      </div>
      <div className="flex-1 justify-end items-end" />
    </div>
  );
}
