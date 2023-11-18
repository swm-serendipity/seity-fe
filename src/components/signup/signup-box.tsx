import SignupInputs from "./signup-inputs.client";
import SignupLeftSection from "./signup-left-section";
import SignupToast from "./signup-toast";

export default function SignupBox() {
  return (
    <div className="w-full h-full overflow-y-auto bg-[#FAFBFD] flex items-center justify-center relative">
      <SignupToast />
      <div className="rounded-2xl h-[800px] w-[1140px] signup-box flex">
        <SignupLeftSection />
        <SignupInputs />
      </div>
    </div>
  );
}
