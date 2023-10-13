import { useStore } from "@/store/store";
import { ColoredButton } from "../color-button";
import Lottie from "lottie-react";
import loadingLottie from "../../assets/loading-animation.json";
import ShareUserChat from "@/components/user/share-popup/share-popup-user-chat";
import ShareAIChat from "@/components/user/share-popup/share-popup-ai-chat";
import Image from "next/image";
import CheckBox from "../checkbox";
import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import getSingleCallingNotification from "@/apis/get-single-calling-notification";
import postCallingSend from "@/apis/post-calling-send";

export default function CallingPopup() {
  const { callingData, setCallingData, setPopupData } = useStore();
  const [checkBoxData, setCheckBoxData] = useState({
    isPersonalInfo: false,
    isConfidentialInfo: false,
    isProhibitedWord: false,
  });
  const canResponse =
    checkBoxData.isPersonalInfo ||
    checkBoxData.isConfidentialInfo ||
    checkBoxData.isProhibitedWord;

  const { mutate, isLoading } = useMutation(postCallingSend, {
    onError: (error) => {
      setPopupData({
        type: "title-ok",
        title: "문제가 발생했어요!",
        content: `잠시 후 다시 시도해주세요.`,
        handleCancel: () => {},
        handleOk: () => {},
        isVisible: true,
      });
    },
    onMutate: () => {
      setPopupData({
        type: "title-ok",
        title: "소명 완료",
        content: `소명 처리가 정상적으로 반영되었어요.`,
        handleCancel: () => {},
        handleOk: () => {},
        isVisible: true,
      });
    },
  });

  const {} = useQuery(
    ["get-calling-data", callingData.id],
    getSingleCallingNotification,
    {
      onSettled(data, error) {
        if (error) {
          setCallingData({
            id: "",
            isLoading: false,
            isVisible: false,
            answer: "",
            question: "",
            onRemove: () => {},
            handleSend: () => {},
          });
          setPopupData({
            type: "title-ok",
            title: "문제가 발생했어요!",
            content: `잠시 후 다시 시도해주세요.`,
            handleCancel: () => {},
            handleOk: () => {},
            isVisible: true,
          });
        } else {
          setCallingData({
            id: callingData.id,
            isLoading: false,
            isVisible: true,
            answer: data.result.answer,
            question: data.result.question,
            onRemove: callingData.onRemove,
            handleSend: () => {},
          });
        }
      },
    }
  );

  const stopPropagation = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
  };

  const handleOkButton = () => {
    setCallingData({
      id: "",
      isLoading: false,
      isVisible: false,
      answer: "",
      question: "",
      onRemove: () => {},
      handleSend: () => {},
    });
    const content = checkBoxData.isPersonalInfo
      ? "개인정보가 아님"
      : checkBoxData.isConfidentialInfo
      ? "기밀정보가 아님"
      : "금칙어가 아님";
    mutate({
      id: callingData.id,
      content: content,
    });
    console.log(callingData.id);
    callingData.onRemove(callingData.id);
  };

  const handleCancel = () => {
    setCallingData({
      id: "",
      isLoading: false,
      isVisible: false,
      answer: "",
      question: "",
      onRemove: () => {},
      handleSend: () => {},
    });
  };

  if (callingData.isLoading || isLoading) {
    return (
      <div className="fixed w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <Lottie
          animationData={loadingLottie}
          className="fixed left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
        />
      </div>
    );
  }

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-auto"
      onClick={handleCancel}
    >
      <div
        className="flex-col flex justify-between bg-white rounded-2xl w-[550px] h-[664px] px-7.5 pb-7.5 pt-6"
        onClick={stopPropagation}
      >
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="flex font-h3 text-h3">소명응답</div>
            <button onClick={handleCancel}>
              <Image
                src="/chat/share-close.png"
                alt="close"
                width="20"
                height="20"
              />
            </button>
          </div>
          <div className="w-auto overflow-y-auto max-h-[222px] bg-share-chat-bg rounded-xl pb-4 custom-scrollbar pl-4 mt-9">
            <ShareUserChat text={callingData.question} />
            <ShareAIChat text={callingData.answer} />
          </div>
          <div className="flex flex-col gap-2.5 mt-5">
            <div
              className="w-[490px] h-[52px] border rounded-lg flex items-center px-5 cursor-pointer"
              onClick={() => {
                setCheckBoxData({
                  isConfidentialInfo: false,
                  isProhibitedWord: false,
                  isPersonalInfo: true,
                });
              }}
            >
              <CheckBox isChecked={checkBoxData.isPersonalInfo} />
              <div className="ml-3">개인정보가 아님</div>
            </div>
            <div
              className="w-[490px] h-[52px] border rounded-lg flex items-center px-5 cursor-pointer"
              onClick={() => {
                setCheckBoxData({
                  isConfidentialInfo: true,
                  isProhibitedWord: false,
                  isPersonalInfo: false,
                });
              }}
            >
              <CheckBox isChecked={checkBoxData.isConfidentialInfo} />
              <div className="ml-3">기밀정보가 아님</div>
            </div>
            <div
              className="w-[490px] h-[52px] border rounded-lg flex items-center px-5 cursor-pointer"
              onClick={() => {
                setCheckBoxData({
                  isConfidentialInfo: false,
                  isProhibitedWord: true,
                  isPersonalInfo: false,
                });
              }}
            >
              <CheckBox isChecked={checkBoxData.isProhibitedWord} />
              <div className="ml-3">금칙어가 아님</div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full gap-3 mt-10">
          <ColoredButton
            width={490}
            height={52}
            buttonText="응답"
            color={canResponse ? "point" : "gray"}
            onClick={canResponse ? handleOkButton : () => {}}
            textColor="black"
          />
        </div>
      </div>
    </div>
  );
}
