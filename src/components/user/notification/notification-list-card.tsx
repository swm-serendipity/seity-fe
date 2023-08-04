type NotificationListCardProps = {
  data: {
    id: number;
    name: string;
    team: string;
    content: string;
    alert: boolean;
  };
};

export default function NotificationListCard({
  data,
}: NotificationListCardProps) {
  return (
    <div
      className={`w-full px-5 pt-4.5 pb-5 flex flex-col border-b gap-2 ${
        data.alert && "bg-gray-50"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className="w-[34px] h-[34px] bg-gray-300 rounded-full" />
          <div className="text-body-large">{data.name}</div>
          <div className="w-[1px] h-3 bg-blackbg-info" />
          <div className="text-whitebg-info text-body-small">{data.team}</div>
        </div>
        {data.alert && (
          <div className="rounded-full bg-prompt-de-identification-red-point-color w-1.5 h-1.5" />
        )}
      </div>
      <div className="text-body-medium line-clamp-3">{data.content}</div>
    </div>
  );
}
