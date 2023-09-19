import CheckboxOff from "../assets/checkbox-off";
import CheckboxOn from "../assets/checkbox-on";

type CheckBoxProps = {
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CheckBox({ isChecked, setIsChecked }: CheckBoxProps) {
  return (
    <button
      onClick={() => setIsChecked(!isChecked)}
      className={`flex rounded-md w-6 h-6 justify-center items-center
  ${isChecked ? "bg-whitebg-default" : "bg-[#E0E0E0]"}`}
    >
      {isChecked ? <CheckboxOn /> : <CheckboxOff />}
    </button>
  );
}
