import PromptInputBox from "./prompt-input-box";

export default function PromptBox() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex-grow flex text-center w-full">Seity Chat</div>
      <div
        className="flex-grow-0 w-full min-h-[100px] flex justify-center items-center"
        style={{
          background: "#F5F5F5",
        }}
      >
        <PromptInputBox />
      </div>
    </div>
  );
}
