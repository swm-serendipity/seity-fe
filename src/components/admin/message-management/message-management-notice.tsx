import NoticeAdd from "@/components/assets/notice-add";
import { useStore } from "@/store/store";

export default function MessageManagementNotice() {
  const { setPopupData } = useStore();
  return (
    <div className="bg-white notice-card w-[400px] h-[310px] rounded-xl flex flex-col">
      <div className="flex justify-between px-7.5 pt-5 pb-4.5 border-b border-[#E2E2E2] items-center">
        <div className="text-h4 font-h4">공지사항</div>
        <div
          className="w-8 h-8 flex justify-center items-center bg-[#F5F5F5] rounded-lg cursor-pointer"
          onClick={() => {
            setPopupData({
              type: "title-ok",
              content: "공지사항 작성 기능은 비활성화 되어 있어요.",
              handleCancel: () => {},
              handleOk: () => {},
              isVisible: true,
              title: "알림",
            });
          }}
        >
          <NoticeAdd />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center text-whitebg-info text-body-medium">
        공지사항이 비어있어요. 새 공지를 작성해주세요
      </div>
      {/* <div className="w-full h-20 px-7.5 py-4.5 flex flex-col gap-1.5 border-b border-[#E2E2E2]">
        <div className="flex justify-between">
          <div className="text-body-medium font-bold">ChatGPT 관련</div>
          <div className="text-body-small text-whitebg-info">오늘, 9:52pm</div>
        </div>
        <div className="line-clamp-1 text-body-medium">
          ChatGPT 관련 일시 사용 중지 안내입니다. 반갑습니다 신종웅입니다.
        </div>
      </div>

      <div className="w-full h-20 px-7.5 py-4.5 flex flex-col gap-1.5 border-b border-[#E2E2E2]">
        <div className="flex justify-between">
          <div className="text-body-medium font-bold">ChatGPT 관련</div>
          <div className="text-body-small text-whitebg-info">오늘, 9:52pm</div>
        </div>
        <div className="line-clamp-1 text-body-medium">
          ChatGPT 관련 일시 사용 중지 안내입니다. 반갑습니다 신종웅입니다.
        </div>
      </div>
      <div className="w-full h-20 px-7.5 py-4.5 flex flex-col gap-1.5 border-b border-[#E2E2E2]">
        <div className="flex justify-between">
          <div className="text-body-medium font-bold">ChatGPT 관련</div>
          <div className="text-body-small text-whitebg-info">오늘, 9:52pm</div>
        </div>
        <div className="line-clamp-1 text-body-medium">
          ChatGPT 관련 일시 사용 중지 안내입니다. 반갑습니다 신종웅입니다.
        </div>
      </div> */}
    </div>
  );
}
