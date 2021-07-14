export const formatTime = (date: Date) =>
  date.toLocaleTimeString("en-gb", { timeStyle: "short" });

export const getFormattedTimes = (start: Date, end: Date) =>
  `${formatTime(start)} - ${formatTime(end)}`;

export const days: Record<number, string> = {
  0: "Sun",
  1: "Mo",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat",
};
