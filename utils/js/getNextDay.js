import { daysOfWeek } from "../../data/constants.js";
import getNextElement from "./getNextElement.js";
const getNextDay = (day) => {
  return getNextElement(day, daysOfWeek, true);
};
export default getNextDay;
