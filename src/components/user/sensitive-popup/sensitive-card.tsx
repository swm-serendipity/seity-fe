import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import ShareIcon from "@/components/assets/share";

type SensitiveCardProps = {
  sensitiveData: SensitiveData;
  isSelect: boolean;
  handleCard: () => void;
};

export default function SensitiveCard({
  sensitiveData,
  isSelect,
  handleCard,
}: SensitiveCardProps) {
  const [clicked, setClicked] = useState(false);

  const { x } = useSpring({
    from: { x: 0 },
    to: { x: clicked ? 1 : 0 },
    config: { duration: 100 },
  });

  const handleClick = () => {
    handleCard();
    if (isSelect) return;
    setClicked(true);
    setTimeout(() => setClicked(false), 100);
  };

  return (
    <animated.div
      style={{
        transform: x
          .to({
            range: [0, 1],
            output: [1, 0.95],
          })
          .to((x) => `scale(${x})`),
      }}
      className={`p-5 ${
        isSelect
          ? "de-identification-card-focus-yellow"
          : "de-identification-card"
      } w-full my-4 flex-col flex gap-2`}
      onClick={handleClick}
    >
      <div className="flex items-center">
        <div
          className={`w-[5px] h-[5px] bg-prompt-de-identification-yellow-point-color rounded-full mr-1`}
        />
        <div className="text-whitebg-info text-body-small">
          기업 내부 정보 ({sensitiveData.docs})
        </div>
      </div>
      <div className="mb-12">
        <div className="text-body-medium flex flex-wrap overflow-hidden text-ellipsis break-words">
          {sensitiveData.content}
        </div>
      </div>
      <div className="flex justify-between items-center flex-grow text-whitebg-info text-body-small ">
        요청한 질의에 답변이 될 수 있는 내부 정보가 존재할 수 있습니다. (
        {sensitiveData.similarity}%)
        <div className="flex gap-4 flex-shrink-0 flex-basis items-center">
          <button className="rounded-md bg-whitebg-default text-white text-body-medium px-3 py-1.5 flex gap-2">
            <div>원본 보기</div>
            <ShareIcon />
          </button>
          <button className="de-identification-change-button-yellow text-body-medium px-3 py-1.5">
            무시
          </button>
        </div>
      </div>
    </animated.div>
  );
}
