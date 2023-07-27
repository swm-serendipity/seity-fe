import { PromptHistoryPage } from "@/type/history";
import {
  differenceInCalendarDays,
  differenceInCalendarMonths,
  differenceInCalendarYears,
  format,
  parseISO,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { ko } from "date-fns/locale";

const groupByDate = (results: PromptHistoryPage["result"]) => {
  const groups = results.reduce(
    (groups: { [x: string]: any[] }, item: { lastModifiedAt: string }) => {
      const date = parseISO(item.lastModifiedAt);
      const now = new Date();
      let group;

      if (differenceInCalendarDays(now, date) === 0) {
        group = "오늘";
      } else if (differenceInCalendarDays(now, date) === 1) {
        group = "어제";
      } else if (
        differenceInCalendarDays(now, date) <= 7 &&
        date >= startOfWeek(now)
      ) {
        group = "이번주";
      } else if (
        differenceInCalendarMonths(now, date) === 0 &&
        date >= startOfMonth(now)
      ) {
        group = "이번달";
      } else if (differenceInCalendarYears(now, date) === 0) {
        group = format(date, "MMMM", { locale: ko });
      } else {
        group = format(date, "yyyy년", { locale: ko });
      }

      if (!groups[group]) {
        groups[group] = [];
      }
      groups[group].push(item);
      return groups;
    },
    {}
  );

  const groupArrays = Object.keys(groups).map((date) => {
    return {
      date,
      items: groups[date],
    };
  });

  return groupArrays;
};

export default groupByDate;
