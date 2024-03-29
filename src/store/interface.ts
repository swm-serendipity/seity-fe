import { CallingPopupData, PopupData } from "@/type/popup";
import { SharePostData } from "@/type/share-post";
import { UserDetailSettingData } from "@/type/user-detail-setting-data";

export interface GlobalState {
  isDeIdentificationPopupOpen: boolean;
  toggleDeIdentificationPopup: () => void;

  deIdentificationData: DeIdentification[];
  setDeIdentificationData: (data: DeIdentification[]) => void;

  isSensitiveDataPopupOpen: boolean;
  toggleSensitiveDataPopup: () => void;

  sensitiveDatas: {
    result: SensitiveDataWithId[];
    question: string;
    detectionData:
      | ({
          index: number;
          length: number;
          entity: string;
          isDeIdentified: boolean;
        } | null)[]
      | null;
  };
  setSensitiveDatas: (data: {
    result: SensitiveDataWithId[];
    question: string;
    detectionData:
      | ({
          index: number;
          length: number;
          entity: string;
          isDeIdentified: boolean;
        } | null)[]
      | null;
  }) => void;

  isNotificationOpen: boolean;
  toggleNotification: () => void;
  disableNotification: () => void;

  isSharePopupOpen: boolean;
  toggleSharePopup: () => void;

  shareTitle: string;
  setShareTitle: (title: string) => void;

  chatData: Chat[];
  setChatData: (fn: (data: Chat[]) => Chat[]) => void;
  addChatData: (data: Chat) => void;

  chatLLM: "gpt-3.5-turbo" | "gpt-4";
  setChatLLM: (llm: "gpt-3.5-turbo" | "gpt-4") => void;

  chatSessionId: string;
  setChatSessionId: (sessionId: string) => void;

  sharePostData: SharePostData;
  setSharePostData: (data: SharePostData) => void;

  isAnswering: boolean;
  setIsAnswering: (isAnswering: boolean) => void;

  answeringData: Chat;
  setAnsweringData: (data: Chat) => void;

  popupData: PopupData;
  setPopupData: (data: PopupData) => void;

  callingData: CallingPopupData;
  setCallingData: (data: CallingPopupData) => void;

  isAnsweringPersist: boolean;
  setIsAnsweringPersist: (isAnsweringPersist: boolean) => void;

  userDetailSettingData: UserDetailSettingData;
  setUserDetailSettingData: (data: UserDetailSettingData) => void;

  selectedCallingId: string;
  setSelectedCallingId: (id: string) => void;
}
