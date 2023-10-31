type DividerProps = {
  width?: number;
  height?: number;
  className?: string;
};

export default function Divider({
  height = 0,
  width = 0,
  className = "",
}: DividerProps) {
  return (
    <div
      style={{
        height: height != 0 ? height : "1px",
        width: width != 0 ? width : "100%",
      }}
      className={`bg-[#E2E2E2] ${className}`}
    ></div>
  );
}
