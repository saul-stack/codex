//  TimeSelector component.
//  Users can select an hour and minute from a dropdown menu.
//  When the selected time is updated, handleTimeChange function is executed

import { useEffect, useState } from "react";
import { Dropdown } from "./Dropdown";

export const TimeSelector = () => {
  const handleTimeChange = () => {
    //Do this when the time is updated
  };

  let hoursValues = Array.from({ length: 24 }, (_, i) => i);
  let hoursStrings = hoursValues.map((i) => String(i).padStart(2, "0"));

  let hours = hoursValues.map((_, i) => {
    return { value: hoursValues[i], string: hoursStrings[i] };
  });

  let minutesValues = Array.from({ length: 12 }, (_, i) => i * 5);
  let minutesStrings = minutesValues.map((i) => String(i).padStart(2, "0"));

  let minutes = minutesValues.map((_, i) => {
    return { value: minutesValues[i], string: minutesStrings[i] };
  });

  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const hourString = String(hour).padStart(2, "0");
    const minuteString = String(minute).padStart(2, "0");
    const timeString = `${hourString}${minuteString}`;
    setTime(timeString);
  }, [hour, minute]);

  useEffect(() => {
    handleTimeChange();
  }, [time]);

  return (
    <div className="time-dropdown">
      <Dropdown onChange={setHour} options={hours} />
      <Dropdown onChange={setMinute} options={minutes} />
    </div>
  );
};
