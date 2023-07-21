import SignupInputs from "./signup-inputs.client";
import SignupLeftSection from "./signup-left-section";

export default function SignupBox() {
  return (
    <div className="w-full h-screen bg-[#FAFBFD] flex justify-center items-center">
      <div className="rounded-2xl w-[1140px] h-[850px] signup-box flex">
        <SignupLeftSection />
        <SignupInputs />
      </div>
    </div>
  );
}
