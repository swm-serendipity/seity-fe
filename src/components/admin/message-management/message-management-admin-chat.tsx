import SemiColorButton from "@/components/ui/semi-color-button";

export default function MessageManagementAdminChat() {
  return (
    <div className="flex-1 w-full h-full overflow-y-auto px-7.5">
      <div className="flex-col flex">
        <div className="flex mt-5 justify-end">
          <div className="flex flex-col gap-1.5">
            <div className="w-[260px] h-[200px] bg-[#F9F9F9] rounded-xl"></div>
            <div className="flex justify-end">
              <SemiColorButton text="삭제" type="negative" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col flex">
        <div className="flex mt-5 justify-start">
          <div className="flex flex-col gap-1.5">
            <div className="w-[260px] h-[200px] bg-[#F9F9F9] rounded-xl"></div>
            <div className="flex justify-end">
              <SemiColorButton text="승인" type="positive" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
