let hourFormat12 = (hour) => {
  if (hour >= 1 && hour < 12) {
    return hour + " AM";
  } else if (hour == 0) {
    return 12 + " AM";
  } else {
    if (hour == 12) {
      return hour + " PM";
    } else {
      return hour - 12 + " PM";
    }
  }
};

let data = new Date();
let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log("Today is: " + weekdays[data.getDay()]);
console.log(
  `Current time is ${hourFormat12(
    data.getHours()
  )} : ${data.getMinutes()} : ${data.getSeconds()}`
);
