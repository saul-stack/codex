//  DaySelector component.
//  Users can select a day of the week from a dropdown menu.
//  When the selected day is updated, handleDayChange function is executed

import { useEffect, useState } from "react";
import { DropDown } from "./DropDown";

export const DaySelector = () => {
  handleDayChange = () => {
    //Do this when the day is updated
  };
  const days = [
    { value: "monday", string: "Monday" },
    { value: "tuesday", string: "Tuesday" },
    { value: "wednesday", string: "Wednesday" },
    { value: "thursday", string: "Thursday" },
    { value: "friday", string: "Friday" },
    { value: "saturday", string: "Saturday" },
    { value: "sunday", string: "Sunday" },
  ];

  const [day, setDay] = useState("monday");

  useEffect(() => {
    handleDayChange();
  }, [day]);

  return (
    <div>
      <DropDown onChange={setDay} options={days} />
    </div>
  );
};
