import { ColoredButton } from "@/components/ui/color-button";
import { useStore } from "@/store/store";
import { AdminsUser } from "@/type/admin-user";

type UserManagementCellProps = {
  user: AdminsUser;
};

export default function UserManagementCell({ user }: UserManagementCellProps) {
  const { setUserDetailSettingData } = useStore();

  const handleSettingButton = () => {
    setUserDetailSettingData({
      id: user.id.split("-")[0],
      isVisible: true,
      authority: user.role[0],
      name: user.name,
      email: "email@email.com",
      part: user.part,
      profileBackgroundHex: "#B43851",
      profileTextHex: "#fff",
    });
  };
  return (
    <tr className="h-[54px] bg-white border-b border-">
      <td className="text-center">{user.id}</td>
      <td className="text-center">{user.loginId}</td>
      <td className="text-center">{user.name}</td>
      <td className="text-center">{user.part}</td>
      <td className="text-center">{user.role[0]}</td>
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
