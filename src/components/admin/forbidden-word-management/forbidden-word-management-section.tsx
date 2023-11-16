import Lottie from "lottie-react";
import loadingLottie from "@/components/assets/lottie/loading-animation.json";
import Divider from "@/components/ui/divider";
import ForbiddenWordManagementRegister from "./forbidden-word-management-register";
import ForbiddenWordManagementHeader from "./forbidden-word-managment-header";
import ForbiddenWordManagementBottomSection from "./forbidden-word-management-bottom-section";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import postRegisterForbiddenWord from "@/apis/post-register-forbidden-word";
import { toast } from "react-toastify";
import getForbiddenWord from "@/apis/get-forbidden-word";

export default function ForbiddenWordManagementSection() {
  const { data, isLoading } = useQuery(["forbidden-word"], getForbiddenWord);

  useEffect(() => {
    if (data && data.result) {
      setTextDatas(
        data.result.map((wordObj: { value: string; id: string }) => {
          return {
            word: wordObj.value,
            id: wordObj.id,
          };
        })
      );
    }
  }, [data]);
  const [textDatas, setTextDatas] = useState<{ word: string; id: string }[]>(
    []
  );

  const { mutate } = useMutation(postRegisterForbiddenWord);

  const handleRegister = (text: string) => {
    mutate(
      { word: text },
      {
        onSuccess: (data) => {
          setTextDatas((prev) => [...prev, { word: text, id: data.result.id }]);
        },
        onError: (error) => {
          toast("금칙어 등록에 실패했습니다.");
        },
      }
    );
  };

  if (isLoading)
    return (
      <div className="bg-white w-full flex-1 h-full flex justify-center items-center">
        <Lottie animationData={loadingLottie} />
      </div>
    );

  return (
    <div className=" flex-grow w-full flex-1 h-screen bg-[#FAFAFA] z-10 overflow-y-auto">
      <ForbiddenWordManagementHeader />
      <div className="flex ml-12 mt-8 mb-10 gap-5">
        <div className="w-[940px] h-[870px] bg-white notice-card rounded-xl px-10 py-9">
          <ForbiddenWordManagementRegister
            textDatas={textDatas}
            handleRegister={handleRegister}
          />
          <Divider height={1} className="my-[60px]" />
          <ForbiddenWordManagementBottomSection
            textDatas={textDatas}
            setTextDatas={setTextDatas}
          />
        </div>
      </div>
    </div>
  );
}
