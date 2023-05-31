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

