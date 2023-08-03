import { useStore } from "@/store/store";
import TitleOkPopup from "./title-ok-popup";
import TitleOkCancelPopup from "./title-ok-cancel-popup";

export default function Popup() {
  const { popupData, setPopupData } = useStore();

  if (popupData.type == "title-ok") {
    return <TitleOkPopup />;
  }
  if (popupData.type == "title-ok-cancel") {
    return <TitleOkCancelPopup />;
  }

  return <></>;
}
