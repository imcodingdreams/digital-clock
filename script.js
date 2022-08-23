const currentDate = new Date();

function displayTime() {
  const currentDate = new Date();
  let cHour = currentDate.getHours();
  let cMinute = currentDate.getMinutes();
  let cSecond = currentDate.getSeconds();
  let AmPm = cHour >= 12 ? "PM" : "AM"; // Check whether AM or PM
  cHour = cHour % 12; // To make 12 hr format
  cHour = cHour ? cHour : 12; // To display "0" as "12"
  cHour = cHour < 10 ? "0" + cHour : cHour;
  cMinute = cMinute < 10 ? "0" + cMinute : cMinute;
  cSecond = cSecond < 10 ? "0" + cSecond : cSecond;
  document.getElementById("currentTime").innerText = cHour + " : " + cMinute + " : " + cSecond + " " + AmPm;
}

setInterval(displayTime, 1000);

const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const monthsOfTheYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function addSuffix(cDayOfTheMonth) {
  if (cDayOfTheMonth > 20 || cDayOfTheMonth < 10) {
    switch (cDayOfTheMonth % 10) { //Returns 1, 2 or 3
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
    }
  }
  return "th";
}

function displayDate() {
  const currentDate = new Date();
  let cDay = daysOfTheWeek[currentDate.getDay()];
  let cMonth = monthsOfTheYear[currentDate.getMonth()];
  let cDayOfTheMonth = currentDate.getDate();
  let cYear = currentDate.getFullYear();
  document.getElementById("currentDate").innerText = cDay + ", " + cMonth + " " + cDayOfTheMonth + addSuffix(cDayOfTheMonth) + " " + cYear;
}

displayDate();
