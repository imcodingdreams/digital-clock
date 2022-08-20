
const currentDate = new Date();
// let cDay = currentDate.getDay();
// let cMonth = currentDate.getDate();
// let cYear = currentDate.getFullYear();
// let cHour = currentDate.getHours();
// let cMinute = currentDate.getMinutes();
// let cSecond = currentDate.getSeconds();

function displayTime() {
  const currentDate = new Date();
  let cHour = currentDate.getHours();
  let cMinute = currentDate.getMinutes();
  let cSecond = currentDate.getSeconds();
  let AmPm = cHour >= 12 ? "PM" : "AM"; // Check whether AM or PM
  cHour = cHour % 12; // To make 12 hr format
  cHour = cHour ? cHour : 12;  // To display "0" as "12"
  cMinute = cMinute < 10 ? "0" + cMinute : cMinute;
  cSecond = cSecond < 10 ? "0" + cSecond : cSecond;
  document.getElementById("currentTime").innerText =
    cHour + " : " + cMinute + " : " + cSecond + " " + AmPm;
}

setInterval(displayTime, 1000);


function displayDate() {
  let cDay = currentDate.getDay();
  let cMonth = currentDate.getMonth();
  let cYear = currentDate.getFullYear();
  // document.getElementById("currentDate").innerText = cDay + "," + cMonth + " " + cYear;
  document.getElementById("currentDate").innerHTML = currentDate.toDateString();
}
  
displayDate();


// function displayTime() {
//   const currentDate = new Date()
//   let cHour = currentDate.getHours();
//   let cMinute = currentDate.getMinutes();
//   let cSecond = currentDate.getSeconds();
//   let AmPm = cHour >= 12 ? "PM" : "AM";
//   cMinute = addZero(cMinute);
//   cSecond = addZero(cSecond);
//   document.getElementById("currentTime").innerText = cHour + " : " + cMinute + " : " + cSecond + " " + AmPm;
// }

// function addZero(number) {
//   if (number < 10) {
//     return '0' + number;
//   } else{
//     return number;
//   }
// }


// setInterval(displayTime, 1000);

// displayTime();


// function formatAMPM(currentDate) {
//   let cHour = currentDate.getHours();
//   let cMinute = currentDate.getMinutes();
//   let cSecond = currentDate.getSeconds();
//   let AmPm = cHour >= 12 ? "pm" : "am";
//   cHour = cHour % 12;
//   cHour = cHour ? cHour : 12; // the hour '0' should be '12'
//   cMinutes = cMinutes < 10 ? "0" + minutes : minutes;
//   var strTime = cHour + " : " + cMinute + " : " + cSecond + " " + AmPm;
//   return strTime;
// }

// console.log(formatAMPM(new Date()));


// function setAmPm() {
// let AmPm = 'AM'
// if (cHour > 12) {
//   AmPm = 'PM'
//   cHour = cHour - 12;
//   }
// }

// setAmPm();



// const AmPm = new Date().toLocaleTimeString("en-US", {
//   hour: "numeric",
//   minute: "numeric",
//   seconds: "numeric",
//   hour12: true,
// });
// console.log(AmPm);


// let AmPm = cHour >= 12 ? "PM" : "AM";
// cHour = cHour % 12

// document.getElementById("currentDate").textContent = currentDate.toTimeString();


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

// To add a zero in front

// function updateTime(k) {
//   if (k < 10) {
//     return "0" + k;
//   } else {
//     return k;
//   }
// }




// console.log(currentDate.toTimeString());
// console.log(currentDate.toDateString());


// let currentDate = new Date();
// let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" currentDate.getSeconds();
// console.log(time);



// function currentDate = monthsOfTheYear;
// var result = "";
// result = (currentDate.getDate() + currentDate.getMonth() + 1 + currentDate.getFullYear();
// return result;