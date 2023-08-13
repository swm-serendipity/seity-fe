type PostsUserChatProps = {
  text: string;
  user: string;
};

export default function PostsUserChat({ text, user }: PostsUserChatProps) {
  return (
    <div className="flex mt-6">
      <div className="flex-1 justify-end items-end" />
      <div className="bg-prompt-chat-user-bg-color px-4 py-1.5 rounded-ss-3xl rounded-se-3xl rounded-bl-3xl max-w-[260px] overflow-hidden">
        <p className="text-blackbg-default whitespace-pre-wrap text-[13px] line-clamp-1">
          {text}
        </p>
      </div>
      <div className="ml-1.5 rounded-full bg-blackbg-point w-[30px] h-[30px] flex justify-center items-center text-body-medium">
        {user[0]}
      </div>
    </div>
  );
}
