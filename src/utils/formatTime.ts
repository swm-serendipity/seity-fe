export function convertToDotFormat(input: string) {
  const date = new Date(input);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`;
}

function convertToISOFormat(input: string) {
  const [datePart, timePart] = input.split(" ");
  const [year, month, day] = datePart.split(".");

  return `${year}-${month}-${day}T${timePart}`;
}
