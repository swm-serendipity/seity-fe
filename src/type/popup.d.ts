export type PopupData = {
  type: "" | "title-ok-cancel" | "title-ok";
  isVisible: boolean;
  title: string;
  content: string;
  handleCancel: () => void;
  handleOk: () => void;
};

export type CallingPopupData = {
  id: string;
  isLoading: boolean;
  isVisible: boolean;
  question: string;
  answer: string;
  handleExit: () => void;
  onRemove: (id: string) => void | null;
};
