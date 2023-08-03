export type PopupData = {
  type: "" | "title-ok-cancel" | "title-ok";
  isVisible: boolean;
  title: string;
  content: string;
  handleCancel: () => void;
  handleOk: () => void;
};
