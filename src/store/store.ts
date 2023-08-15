import { PopupData } from "@/type/popup";
import { create } from "zustand";
import { GlobalState } from "./interface";
import { SharePostData } from "@/type/share-post";

export const useStore = create<GlobalState>((set) => ({
  //비식별화 팝업 상태
  isDeIdentificationPopupOpen: false,
  toggleDeIdentificationPopup: () =>
    set((state) => ({
      isDeIdentificationPopupOpen: !state.isDeIdentificationPopupOpen,
    })),
  //비식별화 데이터
  deIdentificationData: [],
  setDeIdentificationData: (data: DeIdentification[]) =>
    set({ deIdentificationData: data }),

  //알림 팝업 상태
  isNotificationOpen: false,
  toggleNotification: () =>
    set((state) => ({ isNotificationOpen: !state.isNotificationOpen })),
  disableNotification: () => set({ isNotificationOpen: false }),

  //공유 팝업 상태
  isSharePopupOpen: false,
  toggleSharePopup: () =>
    set((state) => ({ isSharePopupOpen: !state.isSharePopupOpen })),

  //공유 팝업 타이틀
  shareTitle: "",
  setShareTitle: (title) => set({ shareTitle: title }),

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

  //공유 게시물 데이터
  sharePostData: {
    title: "",
    llm: "",
    id: "",
    createdAt: "",
    lastModifiedAt: "",
    like: false,
    likeNumber: 0,
    memberName: "",
    memberPart: "",
    memberProfileBackgroundHex: "",
    memberProfileTextHex: "",
    views: 0,
  },
  setSharePostData: (data: SharePostData) => set({ sharePostData: data }),

  //팝업 데이터
  popupData: {
    type: "",
    isVisible: false,
    title: "",
    content: "",
    handleCancel: () => {},
    handleOk: () => {},
  },
  setPopupData: (data: PopupData) => set({ popupData: data }),

  //답변 지속 상태
  isAnsweringPersist: false,
  setIsAnsweringPersist: (isAnsweringPersist) => set({ isAnsweringPersist }),
}));
