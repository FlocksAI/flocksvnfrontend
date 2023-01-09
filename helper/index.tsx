import { MONTHS } from "../constant/content-project";

export const formatNumber = (
  number: number,
  minPrecision = 2,
  maxPrecision = 2
) => {
  const options = {
    minimumFractionDigits: minPrecision,
    maximumFractionDigits: maxPrecision,
  };
  return number.toLocaleString(undefined, options);
};

export const formatedDate = (date: string) => {
  if (!date) return "";
  const dateObj = new Date(date);
  const monthIndex = dateObj.getMonth();
  const monthName = MONTHS[monthIndex];
  const monthDay = dateObj.getDay();
  const fullYear = dateObj.getFullYear();

  return `${monthName} ${monthDay}, ${fullYear}`;
};

export const getMonthDay = (date: string) => {
  if (!date) return "";
  const dateObj = new Date(date);
  const monthDay = dateObj.getMonth();
  const monthName = MONTHS[monthDay];
  const fullYear = dateObj.getFullYear();
  return `${monthName} ${fullYear}`;
};

export const getTime = (date: string) => {
  if (!date) return "";
  const dateObj = new Date(date);
  const time = dateObj.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return time;
};
