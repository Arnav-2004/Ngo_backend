import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import tz from "dayjs/plugin/timezone.js";

dayjs.extend(utc);
dayjs.extend(tz);

export const formatDate = async (date) => {
  const startDate = dayjs(date)
    .tz("Asia/Kolkata")
    .startOf("day")
    .utc()
    .toISOString();

  const endDate = dayjs(date)
    .endOf("day")
    .tz("Asia/Kolkata")
    .utc()
    .toISOString();

  return { startDate, endDate };
};

export const formatFullDate = async (date) => {
  return dayjs(date).tz("Asia/Kolkata").utc().toISOString();
};

export const getTodayDate = async () => {
  return dayjs().format("YYYY-MM-DD");
};

export const getTodayWithTime = async () => {
  return dayjs();
};

export const CustomDateFormat = async (date, format) => {
  return dayjs(date).format(format ?? "YYYY-MM-DD");
};
