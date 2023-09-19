import { useEffect, useState } from "react";
import UserManagementCell from "./user-management-cell";

export default function UserManagementTable() {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const testData = [
    {
      NO: 1,
      ID: "test1",
      name: "Test User 1",
      job: "Job 1",
      authority: "User",
    },
    {
      NO: 2,
      ID: "test2",
      name: "Test User 2",
      job: "Job 2",
      authority: "Admin",
    },
    {
      NO: 3,
      ID: "test3",
      name: "Test User 3",
      job: "Job 3",
      authority: "User",
    },
    {
      NO: 4,
      ID: "test4",
      name: "Test User 4",
      job: "Job 4",
      authority: "Admin",
    },
    {
      NO: 5,
      ID: "test5",
      name: "Test User 5",
      job: "Job 5",
      authority: "User",
    },
    {
      NO: 6,
      ID: "test6",
      name: "Test User 6",
      job: "Job 6",
      authority: "Admin",
    },
    {
      NO: 7,
      ID: "test7",
      name: "Test User 7",
      job: "Job 7",
      authority: "User",
    },
    {
      NO: 8,
      ID: "test8",
      name: "Test User 8",
      job: "Job 8",
      authority: "Admin",
    },
    {
      NO: 9,
      ID: "test9",
      name: "Test User 9",
      job: "Job 9",
      authority: "User",
    },
    {
      NO: 10,
      ID: "test10",
      name: "Test User 10",
      job: "Job 10",
      authority: "Admin",
    },
  ];
  return (
    mounted && (
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
          {testData.map((data) => {
            return <UserManagementCell key={data.NO} data={data} />;
          })}
        </tbody>
      </table>
    )
  );
}
