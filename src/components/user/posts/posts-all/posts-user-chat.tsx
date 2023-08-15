type PostsUserChatProps = {
  text: string;
  user: string;
};

export default function PostsAllUserChat({ text, user }: PostsUserChatProps) {
  return (
    <div className="flex mt-5">
      <div className="mr-2.5 rounded-full bg-blackbg-point w-[30px] h-[30px] flex justify-center items-center text-body-medium">
        {user[0]}
      </div>
      <div className="bg-prompt-chat-user-bg-color px-4 py-2 rounded-se-3xl rounded-bl-3xl rounded-br-3xl max-w-[700px] overflow-hidden">
        <p className="text-blackbg-default whitespace-pre-wrap text-[13px] line-clamp-1">
          {text}
        </p>
      </div>

      <div className="flex-1 justify-end items-end" />
    </div>
  );
}
