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

  chatData: [],
  setChatData: (fn: (data: Chat[]) => Chat[]) =>
    set((state) => ({ chatData: fn(state.chatData) })),

  addChatData: (data) =>
    set((state) => ({ chatData: [...state.chatData, data] })),

  isAnswering: false,

  setIsAnswering: (isAnswering) => set({ isAnswering: isAnswering }),

  chatSessionId: "",
  setChatSessionId: (sessionId) => set({ chatSessionId: sessionId }),
}));
