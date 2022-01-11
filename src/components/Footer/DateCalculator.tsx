import { date } from "../Date";
export default function DateExtractor() {
  const date1 = new Date(date);
  const date2 = new Date();
  const diffTimeSigned = date2.getTime() - date1.getTime();
  const diffTime = Math.abs(diffTimeSigned);
  const diffDays = diffTime / (1000 * 60 * 60 * 24);
  const diffHours = (diffDays % 1) * 24;
  const diffMinutes = (diffHours % 1) * 60;
  if (diffTimeSigned > 0) {
    return {
      hours: 0,
      minutes: 0,
      days: 0,
    };
  }
  return {
    hours: Math.floor(diffHours),
    minutes: Math.ceil(diffMinutes),
    days: Math.floor(diffDays),
  };
}
