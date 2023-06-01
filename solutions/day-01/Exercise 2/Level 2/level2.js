// 1. Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let scores = prompt("Enter the score of the student :");

if (100 >= scores && scores >= 80) {
    console.log("A");
} else if (79 >= scores && scores >= 70) {
    console.log("B");
} else if (69 >= scores && scores >= 60) {
    console.log("C");
} else if (59 >= scores && scores >= 50) {
    console.log("D");
} else if (49 >= scores && scores >= 0) {
    console.log("F");
}


// 2 . Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

let season = prompt("Enter the month: ").toLowerCase();

if (month === "september" || month === "october" || month === "november") {
    console.log("The seasom is Autumn.");
} else if (month === "december" || month === "january" || month === "autumn") {
    console.log("The season is Winter. ");
} else if (month === "march" || month === "april" || month === "may") {
    console.log("The season is Spring.");
} else if (month === "june" || month === "july" || month === "august") {
    console.log("The season is Summer.");
}

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.
// What is the day  today? Saturday
// Saturday is a weekend.

// What is the day today? saturDaY
// Saturday is a weekend.

// What is the day today? Friday
// Friday is a working day.

// What is the day today? FrIDAy
// Friday is a working day.

let day = prompt("What is the day today ? ").toLowerCase();

if (day === "saturday" || day === "sunday") {
    console.log(`${day} is a weekend.`)
}
else if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday") {
    console.log(`${day} is a working day.`)
} else {
    console.log("Invalid day, Please enter a valid day.");

}

