
const currentDate = new Date();
let cDay = currentDate.getDay();
let cMonth = currentDate.getDate();
let cYear = currentDate.getFullYear();


function displayTime() {
  const currentDate = new Date();
  let cDay = currentDate.getDay();
  let cMonth = currentDate.getDate();
  let cYear = currentDate.getFullYear();
  document.getElementById("currentTime").textContent = currentDate.toTimeString();
}

setInterval(displayTime, 1000);

// console.log(currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds());


let daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

// let = daysOfTheWeek[currentDate.getDay()];
document.getElementById("currentDate").innerHTML = currentDate.toDateString();
// console.log(daysOfTheWeek[currentDate.getDay()]);



let monthsOfTheYear = [
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








// console.log(currentDate.toTimeString());
// console.log(currentDate.toDateString());


// let currentDate = new Date();
// let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" currentDate.getSeconds();
// console.log(time);



// function currentDate = monthsOfTheYear;
// var result = "";
// result = (currentDate.getDate() + currentDate.getMonth() + 1 + currentDate.getFullYear();
// return result;