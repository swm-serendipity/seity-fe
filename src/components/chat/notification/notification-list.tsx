import NotificationListCard from "./notification-list-card";

export default function NotificationList() {
  const data = [
    {
      id: 1,
      name: "김민수",
      team: "보안관리팀",
      content:
        "우리 맺어, 같은 청춘에서만 그들에게 보배를 영락과 운다. 있는 속잎나고, 되려니와, 그들의 사람은 봄바람이다. 그들은 황금시대의 예수는 풀이 눈이",
      alert: true,
    },
    {
      id: 7,
      name: "신종웅",
      team: "보안관리팀",
      content:
        "우리 맺어, 같은 청asdadas춘에서만 그들에게 보배를 영락과 운다. 있는 속잎나고, 되려니와, 그들의 사람은 봄바람이다. 그들은 황금시대의 예수는 풀이 눈이",
      alert: false,
    },
    {
      id: 5,
      name: "신종웅",
      team: "보안관리팀",
      content:
        "우리 맺어, 같은 청asdadas춘에서만 그들에게 보배를 영락과 운다. 있는 속잎나고, 되려니와, 그들의 사람은 봄바람이다. 그들은 황금시대의 예수는 풀이 눈이",
      alert: false,
    },
    {
      id: 2,
      name: "신종웅",
      team: "보안관리팀",
      content:
        "우리 맺어, 같은 청춘에서만 그들에게 보배를 영락과 운다. 있는 속잎나고, 되려니와, 그들의 사람은 봄바람이다. 그들은 황금시대의 예수는 풀이 눈이",
      alert: true,
    },
    {
      id: 3,
      name: "조민호",
      team: "보안관리팀",
      content:
        "우리 맺어, 같은 청춘에서만 그들에게 보배를 영락과 운다. 있는 속잎나고, 되려니와, 그들의 사람은 봄바람이다. 그들은 황금시대의 예수는 풀이 눈이",
      alert: false,
    },
    {
      id: 4,
      name: "안지수",
      team: "보안관리팀",
      content:
        "우리 맺어, 같은 청춘에서만 그들에게 보배를 영락과 운다. 있는 속잎나고, 되려니와, 그들의 사람은 봄바람이다. 그들은 황금시대의 예수는 풀이 눈이",
      alert: false,
    },
  ];
  return (
    <div className="w-full flex-1 overflow-y-auto custom-scrollbar">
      <div className="text-body-medium mt-7 mb-2 mx-5">알림이 없습니다.</div>
      {/* Todo */}
      {[].map((item) => (
        <NotificationListCard key={item} data={item} />
      ))}
    </div>
  );
}
