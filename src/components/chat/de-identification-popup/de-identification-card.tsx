import { DeIdentificationData } from "./de-identification-popup.box";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";

type DeIdentificationCardProps = {
  deidentificateData: DeIdentificationData;
  isChange: boolean;
  isSelect: boolean;
  handleCard: () => void;
  handleChangeButton: () => void;
};

export default function DeIdentificationCard({
  deidentificateData,
  isChange,
  isSelect,
  handleCard,
  handleChangeButton,
}: DeIdentificationCardProps) {
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
          ? isChange
            ? "de-identification-card-focus-green"
            : "de-identification-card-focus-red"
          : "de-identification-card"
      } w-full my-4 flex-col flex gap-2`}
      onClick={handleClick}
    >
      <div className="flex items-center">
        <div
          className={`w-[5px] h-[5px] ${
            isChange
              ? "bg-prompt-de-identification-green-point-color"
              : "bg-prompt-de-identification-red-point-color"
          } rounded-full mr-1`}
        />
        <div className="text-whitebg-info text-body-small">
          {deidentificateData.type} 내용 탐지
        </div>
      </div>
      <div className="mb-12">
        <div className="text-body-medium flex flex-wrap overflow-hidden text-ellipsis break-words">
          {isChange
            ? deidentificateData.text
            : deidentificateData.deIdentificateData}
          <Image
            className="mx-1"
            src="/deidentification-arrow.svg"
            width={12}
            height={12}
            alt="변환"
          />
          {isChange
            ? deidentificateData.deIdentificateData
            : deidentificateData.text}
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleChangeButton}
          className={`${
            isChange
              ? "de-identification-change-button-green"
              : "de-identification-change-button-red"
          } text-body-medium px-3 py-1.5`}
        >
          {isChange ? "비식별화" : "복원"}
        </button>
      </div>
    </animated.div>
  );
}
