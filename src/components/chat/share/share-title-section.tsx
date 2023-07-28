import { useStore } from "@/store/store";

export default function ShareTitleSection() {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // months are 0-based in JS
  const day = date.getDate().toString().padStart(2, "0");

  const formattedDate = `${year}.${month}.${day}`;

  const { chatData } = useStore();
  return (
    <div className="flex flex-col gap-1.5">
      <div className="text-body-large line-clamp-2 mt-5">
        {chatData[0].message}
      </div>
      <div>
        <span className="text-body-medium text-whitebg-info">
          {formattedDate}
        </span>
      </div>
    </div>
  );
}
