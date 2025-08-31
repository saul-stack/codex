import { daysOfWeek } from "../../data/constants.js";
import getPreviousElement from "./getPreviousElement.js";
const getPreviousDay = (day) => {
  return getPreviousElement(day, daysOfWeek, true);
};

export default getPreviousDay;
