import getLoginInfo from "@/apis/get-login-info";
import { useQuery } from "@tanstack/react-query";

type ShareUserChatProps = {
  text: string;
};

export default function ShareUserChat({ text }: ShareUserChatProps) {
  const { data, isFetched } = useQuery(["user-info"], () => getLoginInfo());
  return (
    <div className="flex mt-6 mr-4 items-end">
      <div className="flex-1" />
      <div className="bg-prompt-chat-user-bg-color px-5 pt-2.5 pb-2.5 rounded-ss-3xl rounded-se-3xl rounded-bl-3xl max-w-[360px]">
        <p className="text-blackbg-default whitespace-pre-wrap text-body-medium">
          {text}
        </p>
      </div>
      <div className="ml-4 rounded-full bg-blackbg-point w-[30px] h-[30px] hidden lg:flex justify-center items-center text-body-small">
        {isFetched && data?.name ? data.name[0] : ""}
      </div>
    </div>
  );
}
