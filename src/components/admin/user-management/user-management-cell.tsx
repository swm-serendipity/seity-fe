import { ColoredButton } from "@/components/ui/color-button";
import { useStore } from "@/store/store";

type UserManagementCellProps = {
  data: {
    NO: number;
    ID: string;
    name: string;
    job: string;
    authority: string;
  };
};

export default function UserManagementCell({ data }: UserManagementCellProps) {
  const { setUserDetailSettingData } = useStore();

  const handleSettingButton = () => {
    setUserDetailSettingData({
      id: "1",
      isVisible: true,
      authority: "User",
      name: "Test User 1",
      email: "whddnd0728@gmail.com",
      part: "Frontend",
      profileBackgroundHex: "#B43851",
      profileTextHex: "#fff",
    });
  };
  return (
    <tr className="h-[54px] bg-white border-b border-">
      <td className="text-center">{data.NO}</td>
      <td className="text-center">{data.ID}</td>
      <td className="text-center">{data.name}</td>
      <td className="text-center">{data.job}</td>
      <td className="text-center">{data.authority}</td>
      <td className="flex justify-center items-center w-full h-[54px]">
        <div className="mt-2">
          <ColoredButton
            textColor="black"
            buttonText="설정"
            color="white"
            width={60}
            height={28}
            onClick={handleSettingButton}
          />
        </div>
      </td>
    </tr>
  );
}
