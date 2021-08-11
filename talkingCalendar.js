const talkingCalendar = function(date) {
  let year = "";
  let month = "";
  let day = "";
  year = date.substring(0,4);
  month = date.substring(5,7);
  day = date.substring(8,10);
  switch (month) {
  case "01":
    month = "Janaury";
    break;
  case "02":
    month = "Febraury";
    break;
  case "03":
    month = "March";
    break;
  case "04":
    month = "April";
    break;
  case "05":
    month = "May";
    break;
  case "06":
    month = "June";
    break;
  case "07":
    month = "July";
    break;
  case "08":
    month = "August";
    break;
  case "09":
    month = "September";
    break;
  case "10":
    month = "October";
    break;
  case "11":
    month = "November";
    break;
  case "12":
    month = "December";
    break;
  }
  if (day[0] === "0" && day[1] === "1") {
    day = "1st,";
  } else if (day[0] === "0" && day[1] === "2") {
    day = "2nd,";
  } else if (day[0] === "0" && day[1] === "3") {
    day = "3rd,";
  } else if (day[0] === "0") {
    day = day[1] + "th,";
  } else if (day[0] > "0") {
    day = day + "th,";
  }
  return month + " " + day + " " + year;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));