export default function timeAgo(dateString: string | Date) {
  const now = new Date();
  const date = new Date(dateString);

  const secondsPast = (now.getTime() - date.getTime()) / 1000;

  if (secondsPast < 60) {
    return Math.round(secondsPast) + "초 전";
  }

  const minutesPast = secondsPast / 60;
  if (minutesPast < 60) {
    return Math.round(minutesPast) + "분 전";
  }

  const hoursPast = minutesPast / 60;
  if (hoursPast < 24) {
    return Math.round(hoursPast) + "시간 전";
  }

  const daysPast = hoursPast / 24;
  if (daysPast < 30) {
    return Math.round(daysPast) + "일 전";
  }

  const monthsPast = daysPast / 30;
  return Math.round(monthsPast) + "달 전";
}
