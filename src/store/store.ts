import { set } from "date-fns";
import { create } from "zustand";

interface State {
  isDeIdentificationPopupOpen: boolean;
  toggleDeIdentificationPopup: () => void;

  isNotificationOpen: boolean;
  toggleNotification: () => void;
  disableNotification: () => void;

  isSharePopupOpen: boolean;
  toggleSharePopup: () => void;

  chatData: Chat[];
  setChatData: (fn: (data: Chat[]) => Chat[]) => void;
  addChatData: (data: Chat) => void;

  chatSessionId: string;
  setChatSessionId: (sessionId: string) => void;

  isAnswering: boolean;
  setIsAnswering: (isAnswering: boolean) => void;

  answeringData: Chat;
  setAnsweringData: (data: Chat) => void;

  popupData: PopupData;
  setPopupData: (data: PopupData) => void;
}

type PopupData = {
  isVisible: boolean;
  title: string;
  content: string;
  handleCancel: () => void;
  handleOk: () => void;
};

export const useStore = create<State>((set) => ({
  //비식별화 팝업 상태
  isDeIdentificationPopupOpen: false,
  toggleDeIdentificationPopup: () =>
    set((state) => ({
      isDeIdentificationPopupOpen: !state.isDeIdentificationPopupOpen,
    })),

  //알림 팝업 상태
  isNotificationOpen: false,
  toggleNotification: () =>
    set((state) => ({ isNotificationOpen: !state.isNotificationOpen })),
  disableNotification: () => set({ isNotificationOpen: false }),

  //공유 팝업 상태
  isSharePopupOpen: false,
  toggleSharePopup: () =>
    set((state) => ({ isSharePopupOpen: !state.isSharePopupOpen })),

  //전체 채팅 데이터
  chatData: [],
  setChatData: (fn: (data: Chat[]) => Chat[]) =>
    set((state) => ({ chatData: fn(state.chatData) })),
  addChatData: (data) =>
    set((state) => ({ chatData: [...state.chatData, data] })),

  //답변중인지 상태
  isAnswering: false,
  setIsAnswering: (isAnswering) => set({ isAnswering: isAnswering }),

  //답변중인 답변 데이터
  answeringData: { id: "", user: "", message: "", timestamp: "" },
  setAnsweringData: (data: Chat) => set({ answeringData: data }),

  //채팅 세션 아이디
  chatSessionId: "",
  setChatSessionId: (sessionId) => set({ chatSessionId: sessionId }),

  //팝업 데이터
  popupData: {
    isVisible: false,
    title: "",
    content: "",
    handleCancel: () => {},
    handleOk: () => {},
  },

  setPopupData: (data: PopupData) => set({ popupData: data }),
}));
