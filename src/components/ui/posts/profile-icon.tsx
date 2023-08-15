type ProfileIconProps = {
  name: string;
  size?: "sm" | "lg";
  bgColor: string;
  textColor: string;
};

export default function ProfileIcon({
  name,
  size = "lg",
  bgColor = "#E77C7C",
  textColor = "#ffffff",
}: ProfileIconProps) {
  return (
    <div className="flex items-center">
      {size === "lg" ? (
        <div
          className={`w-[26px] 
        h-[26px] rounded-full 
        flex justify-center items-center text-body-small`}
          style={{
            background: bgColor,
            color: textColor,
          }}
        >
          {name[0]!}
        </div>
      ) : (
        <div
          className={`w-[24px] 
        h-[24px] rounded-full 
        flex justify-center items-center text-body-small`}
          style={{
            background: bgColor,
            color: textColor,
          }}
        >
          {name[0]!}
        </div>
      )}

      <div
        className={`ml-${
          size == "lg" ? 2.5 : 1
        } text-body-medium text-whitebg-serve`}
      >
        {name}
      </div>
    </div>
  );
}
