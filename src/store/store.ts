import { CallingPopupData, PopupData } from "@/type/popup";
import { create } from "zustand";
import { GlobalState } from "./interface";
import { SharePostData } from "@/type/share-post";
import { UserDetailSettingData } from "@/type/user-detail-setting-data";

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

  //GPT 버전
  chatLLM: "chatGPT3.5",
  setChatLLM: (llm) => set({ chatLLM: llm }),

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
    scrap: false,
    myPost: false,
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

  //소명 팝업 데이터
  callingData: {
    id: "",
    isLoading: false,
    isVisible: false,
    question: "",
    answer: "",
    handleExit: () => {},
    onRemove: (id: string) => null,
  },
  setCallingData: (data: CallingPopupData) => set({ callingData: data }),

  //답변 지속 상태
  isAnsweringPersist: false,
  setIsAnsweringPersist: (isAnsweringPersist) => set({ isAnsweringPersist }),

  //사용자 세부설정 데이터
  userDetailSettingData: {
    id: "",
    name: "",
    email: "",
    part: "",
    authority: "",
    profileBackgroundHex: "",
    profileTextHex: "",
    isVisible: false,
  },
  setUserDetailSettingData: (data: UserDetailSettingData) =>
    set({ userDetailSettingData: data }),

  //선택된 소명 아이디
  selectedCallingId: "",
  setSelectedCallingId: (id) => set({ selectedCallingId: id }),
}));
