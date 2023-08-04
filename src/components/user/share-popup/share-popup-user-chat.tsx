type ShareUserChatProps = {
  text: string;
};

export default function ShareUserChat({ text }: ShareUserChatProps) {
  return (
    <div className="flex mt-6 mr-4">
      <div className="flex-1" />
      <div className="bg-prompt-chat-user-bg-color px-5 pt-2.5 pb-2.5 rounded-ss-3xl rounded-se-3xl rounded-bl-3xl max-w-[360px]">
        <p className="text-blackbg-default whitespace-pre-wrap text-body-medium">
          {text}
        </p>
      </div>
      <div className="ml-4 flex flex-col justify-between">
        <div className="flex-1"></div>
        <div className="rounded-full bg-gray-300 w-[30px] h-[30px]"></div>
      </div>
    </div>
  );
}
