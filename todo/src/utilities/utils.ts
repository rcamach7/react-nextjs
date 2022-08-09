import { format } from "date-fns";

export const formatDate = (dateString: string) => {
  let date = new Date(dateString);

  let timeZoneCorrection = new Date(
    date.valueOf() + date.getTimezoneOffset() * 60 * 1000
  );

  return format(timeZoneCorrection, "MM/dd");
};
