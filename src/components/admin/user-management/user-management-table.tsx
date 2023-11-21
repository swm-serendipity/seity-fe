import { AdminsUser } from "@/type/admin-user";
import UserManagementCell from "./user-management-cell";

export default function UserManagementTable({
  users,
}: {
  users: AdminsUser[];
}) {
  return (
    <table className="border-t border-t-black border-b border-b-black text-body-medium font-[400]">
      <colgroup>
        <col width="16.6%" />
        <col width="16.6%" />
        <col width="16.6%" />
        <col width="16.6%" />
        <col width="16.6%" />
        <col width="16.7%" />
      </colgroup>
      <thead>
        <tr className="bg-[#ECECEC] h-[46px] text-center">
          <td>No.</td>
          <td>ID</td>
          <td>이름</td>
          <td>직무</td>
          <td>권한</td>
          <td>세부 설정</td>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return <UserManagementCell key={user.id} user={user} />;
        })}
      </tbody>
    </table>
  );
}
