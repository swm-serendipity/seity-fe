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
  setChatData: (data: Chat[]) => void;
  addChatData: (data: Chat) => void;
}

export const useStore = create<State>((set) => ({
  isDeIdentificationPopupOpen: false,
  toggleDeIdentificationPopup: () =>
    set((state) => ({
      isDeIdentificationPopupOpen: !state.isDeIdentificationPopupOpen,
    })),

  isNotificationOpen: false,
  toggleNotification: () =>
    set((state) => ({ isNotificationOpen: !state.isNotificationOpen })),
  disableNotification: () => set({ isNotificationOpen: false }),

  isSharePopupOpen: false,
  toggleSharePopup: () =>
    set((state) => ({ isSharePopupOpen: !state.isSharePopupOpen })),

  chatData: [
    {
      id: 1,
      user: "user",
      message: "안녕?",
      timestamp: Date.now().toString(),
    },
    {
      id: 2,
      user: "ai",
      message: "안녕하세요! 저는 ChatGPT입니다. 무엇을 도와드릴까요?",
      timestamp: Date.now().toString(),
    },
  ],
  setChatData: (data) => set({ chatData: data }),
  addChatData: (data) =>
    set((state) => ({ chatData: [...state.chatData, data] })),
}));
