export default function ShareTitleSection() {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // months are 0-based in JS
  const day = date.getDate().toString().padStart(2, "0");

  const formattedDate = `${year}.${month}.${day}`;
  return (
    <div className="flex flex-col gap-1.5">
      <div className="text-body-large line-clamp-2 mt-5">
        프롬프트 제목 노출됩니다. 편집 가능하며 두줄까지 노출가능하도록 합니다.
        두줄 이상일 경우 말줄임처리...
      </div>
      <div>
        <span className="text-body-medium text-whitebg-info">
          {formattedDate}
        </span>
      </div>
    </div>
  );
}
