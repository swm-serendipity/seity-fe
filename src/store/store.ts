import { create } from "zustand";

interface State {
  isPopupOpen: boolean;
  togglePopup: () => void;
}

export const useStore = create<State>((set) => ({
  isPopupOpen: false,
  togglePopup: () => set((state) => ({ isPopupOpen: !state.isPopupOpen })),
}));
