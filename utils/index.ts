import { format, parseISO } from "date-fns";


export const formatDate = (date:string, dateFormat='MMMM dd, yyyy') => {
  return format(parseISO(date), dateFormat);
}

