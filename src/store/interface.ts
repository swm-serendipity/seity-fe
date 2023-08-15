import { PopupData } from "@/type/popup";
import { SharePostData } from "@/type/share-post";

export interface GlobalState {
  isDeIdentificationPopupOpen: boolean;
  toggleDeIdentificationPopup: () => void;

  deIdentificationData: DeIdentification[];
  setDeIdentificationData: (data: DeIdentification[]) => void;

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

  isAnsweringPersist: boolean;
  setIsAnsweringPersist: (isAnsweringPersist: boolean) => void;
}
