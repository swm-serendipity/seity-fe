type DashboardLeftCardProps = {
  id: string;
  title: string;
  name: string;
  nameColor: string;
  nameBackgroundColor: string;
  time: string;
  isSelected?: boolean;
  handleCard: (id: string) => void;
};

export default function DetectionRequestLeftCard({
  id,
  title,
  name,
  nameColor,
  nameBackgroundColor,
  time,
  isSelected = false,
  handleCard,
}: DashboardLeftCardProps) {
  return (
    <div
      onClick={() => handleCard(id)}
      className={`w-[420px] h-[96px] bg-white gap-2 mb-2.5 dashboard-card px-6 py-5.5 flex flex-col cursor-pointer ml-2 ${
        isSelected && "border border-whitebg-default"
      }`}
    >
      <div className="flex justify-between items-center ">
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-full flex justify-center items-center text-body-small"
            style={{
              color: nameColor,
              backgroundColor: nameBackgroundColor,
            }}
          >
            {name.slice(0, 1)}
          </div>
          <div className="text-body-medium text-whitebg-serve">{name}</div>
        </div>
        <div className="text-body-small text-whitebg-info">{time}</div>
      </div>
      <div className="text-body-medium line-clamp-1">{title}</div>
    </div>
  );
}
