import Image from "next/image";

export default function PromptEmpty() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div
        className="px-12 py-10 flex justify-center items-center 
      bg-prompt-chat-ai-bg-color rounded-2xl "
      >
        <div className="flex flex-col">
          <div className="flex flex-col justify-center items-center gap-3">
            <Image
              src="/warning-sign.png"
              width={40}
              height={40}
              alt="주의 표시"
            />
            <div className="font-h4 text-h4">주의해주세요!</div>
          </div>
          <div className="flex gap-3 pt-7">
            <div
              className="flex flex-col w-[200px] h-[240px] justify-center items-center 
            gap-6 bg-white rounded-xl px-8 pb-6 pt-10"
            >
              <Image
                src="/chat-empty-1.png"
                width={110}
                height={110}
                alt="보호 이미지"
              />
              <p className="text-[13px] font-body-medium text-center text-whitebg-serve">
                개인정보를 포함한 질의는 조심해주세요.
              </p>
            </div>
            <div
              className="flex flex-col w-[200px] h-[240px] justify-center items-center 
            gap-6 bg-white rounded-xl px-4 pb-6 pt-10"
            >
              <Image
                src="/chat-empty-2.png"
                width={110}
                height={110}
                alt="보호 이미지"
              />
              <p className="text-[13px] font-body-medium text-center text-whitebg-serve">
                내부 기밀 정보가 포함된 질문은 조심해주세요. (wiki, code 등)
              </p>
            </div>
            <div
              className="flex flex-col w-[200px] h-[240px] justify-center items-center 
            gap-6 bg-white rounded-xl px-4 pb-2 pt-10"
            >
              <Image
                src="/chat-empty-3.png"
                width={110}
                height={110}
                alt="보호 이미지"
              />
              <p className="text-[13px] font-body-medium text-center text-whitebg-serve">
                해당 질문은 관리자 페이지에서 수정/삭제/추가가 가능합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
