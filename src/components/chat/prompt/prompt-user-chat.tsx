type PromptUserChatProps = {
  text: string;
};

export default function PromptUserChat({ text }: PromptUserChatProps) {
  return (
    <div className="flex mt-6">
      <div className="flex-1 justify-end items-end" />
      <div className="bg-prompt-chat-user-bg-color px-6 pt-3 pb-4 rounded-ss-3xl rounded-se-3xl rounded-bl-3xl max-w-[600px] xl:max-w-[640px]">
        <p className="text-blackbg-default whitespace-pre-wrap">{text}</p>
      </div>
      <div className="ml-4 rounded-full bg-gray-300 w-11 h-11 hidden lg:flex"></div>
    </div>
  );
}
