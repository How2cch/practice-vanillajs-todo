import dayjs from "dayjs";
import { clockDOM } from "./elementInstance";

const updateClock = () => {
  const currentTime = `${dayjs().format("HH:mm:ss")}`;
  clockDOM.time.innerText = currentTime;
  const currentDate = `${dayjs().format("YYYY MMMM DD")}`;
  clockDOM.date.innerText = currentDate;
  const currentWeekDay = `${dayjs().format("dddd")}`;
  clockDOM.weekDay.innerText = currentWeekDay;
};

export const clockElement = {
  init: () =>{
    updateClock();
    setInterval(updateClock, 1000);
  }
};