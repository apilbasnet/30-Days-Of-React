// 1.Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.

let month = prompt("Enter a month: ").toLowerCase();
switch (month) {
    case "january":
        console.log("January has 31 days.");

        break;
    case "february":
        console.log("February has 28 days.");

        break;
    case "march":
        console.log("March has 31 days.");

        break;
    case "april":
        console.log("April has 30 days.");

        break;

    case "may":
        console.log("May has 31 days.");

        break;
    case "june":
        console.log("June has 31 days.");

        break;
    case "july":
        console.log("July has 31 days.");

        break;
    case "august":
        console.log("August has 31 days.");

        break;
    case "september":
        console.log("September has 30 days.");

        break;
    case "october":
        console.log("October has 31 days.");

        break;
    case "november":
        console.log("November has 30 days.");

        break;

    case "december":
        console.log("December has 31 days.");

        break;
    default:
        console.log("Invalid. Please give a month.")
        break;
}

//Write a program which tells the number of days in a month, now consider leap year.
// let month = prompt("Enter a month: ").toLowerCase();
let days;
if (month === "january" || month === "march" || month === "may" || month === "june" || month === "july" || month === "august" || month === "october" || month === "december") {
    days = 31;
} else if (month === "april" || month === "september" || month === "november") {
    days = 30;

} else if (month === "february") {
    const year = new Date.getFullYear();
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        days = 29;
    } else {
        days = 28;

    }
} else {
    console.log("Invalid month. Please enter a valid month.")
}
if (days !== undefined) {
    console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has ${days} days.`)
}


