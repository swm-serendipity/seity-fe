import ChipDelete from "@/components/assets/chip-delete";

type ForbiddenWordManagementChipProps = {
  text: string;
  active: boolean;
  onClickDelete: () => void;
};

export default function ForbiddenWordManagementChip({
  text,
  active,
  onClickDelete,
}: ForbiddenWordManagementChipProps) {
  return (
    <div
      className={`h-8 flex gap-3 items-center max-w-fit pl-3.5 pr-2 rounded-2xl border ${
        active
          ? "border-[#29CCA4] bg-[#C5FFF1]"
          : "border-[#E2E2E2] bg-[#F4F4F4]"
      }`}
    >
      <div className="text-body-medium">{text}</div>
      <button
        className={`w-[18px] h-[18px] flex justify-center items-center ${
          active ? "bg-[#29CCA4]" : "bg-whitebg-info"
        } rounded-full`}
        onClick={onClickDelete}
      >
        <ChipDelete />
      </button>
    </div>
  );
}
