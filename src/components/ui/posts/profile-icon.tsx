type ProfileIconProps = {
  name: string;
  size?: "sm" | "lg";
};

export default function ProfileIcon({ name, size = "lg" }: ProfileIconProps) {
  return (
    <div className="flex items-center">
      <div
        className={`w-[${size == "lg" ? 26 : 22}px] 
        h-[${size == "lg" ? 26 : 22}px] rounded-full bg-[#E77C7C] 
        flex justify-center items-center text-white text-body-small`}
      >
        {name[0]!}
      </div>
      <div className="ml-2.5 text-body-medium text-whitebg-serve">{name}</div>
    </div>
  );
}
