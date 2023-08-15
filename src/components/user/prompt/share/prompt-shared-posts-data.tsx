import { useStore } from "@/store/store";
import formatDate from "@/utils/formatDate";

export default function PromptSharedPostsData() {
  const { sharePostData } = useStore();

  return (
    <div
      className="mx-4 md:mx-7 lg:mx-12 xl:mx-40 2xl:mx-60 mt-10
    flex flex-col gap-5"
    >
      <div className="text-[24px] font-[700]">{sharePostData.title}</div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div
            className="w-[30px] h-[30px] rounded-full flex justify-center items-center text-body-medium"
            style={{
              background: sharePostData.memberProfileBackgroundHex,
              color: sharePostData.memberProfileTextHex,
            }}
          >
            {sharePostData.memberName[0]}
          </div>
          <div className="text-body-medium">{sharePostData.memberName}</div>
        </div>
        {sharePostData.lastModifiedAt && (
          <div className="text-body-medium text-whitebg-info">
            {formatDate(sharePostData.lastModifiedAt)} | {sharePostData.llm}
          </div>
        )}
      </div>
      <div
        className="w-full
        border h-[2px] border-black"
      ></div>
    </div>
  );
}
