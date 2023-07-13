import { create } from "zustand";

interface State {
  isPopupOpen: boolean;
  togglePopup: () => void;

  isNotificationOpen: boolean;
  toggleNotification: () => void;
}

export const useStore = create<State>((set) => ({
  isPopupOpen: false,
  togglePopup: () => set((state) => ({ isPopupOpen: !state.isPopupOpen })),

  isNotificationOpen: false,
  toggleNotification: () =>
    set((state) => ({ isNotificationOpen: !state.isNotificationOpen })),
}));
