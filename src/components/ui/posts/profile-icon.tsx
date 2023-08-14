type ProfileIconProps = {
  name: string;
  size?: "sm" | "lg";
};

export default function ProfileIcon({ name, size = "lg" }: ProfileIconProps) {
  return (
    <div className="flex items-center">
      {size === "lg" ? (
        <div
          className={`w-[26px] 
        h-[26px] rounded-full bg-[#E77C7C] 
        flex justify-center items-center text-white text-body-small`}
        >
          {name[0]!}
        </div>
      ) : (
        <div
          className={`w-[24px] 
        h-[24px] rounded-full bg-[#E77C7C] 
        flex justify-center items-center text-white text-body-small`}
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
