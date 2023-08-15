import getLoginInfo from "@/apis/get-login-info";
import { useQuery } from "@tanstack/react-query";

type PromptUserChatProps = {
  text: string;
};

export default function PromptUserChat({ text }: PromptUserChatProps) {
  const { data, isFetched } = useQuery(["user-info"], () => getLoginInfo());
  return (
    <div className="flex mt-6 items-end">
      <div className="flex-1 justify-end items-end" />
      <div className="bg-prompt-chat-user-bg-color px-6 pt-3 pb-4 rounded-ss-3xl rounded-se-3xl rounded-bl-3xl max-w-[600px] xl:max-w-[640px]">
        <p className="text-blackbg-default whitespace-pre-wrap">{text}</p>
      </div>
      <div className="ml-4 rounded-full bg-blackbg-point w-11 h-11 hidden lg:flex justify-center items-center">
        {isFetched && data?.name ? data.name[0] : ""}
      </div>
    </div>
  );
}
