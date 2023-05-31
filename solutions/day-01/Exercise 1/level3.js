const countries = require('../Exercise 1/level2ex1/countries');
const webTechs = require('../Exercise 1/level2ex1/web_techs');

//1The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] - Sort the array and find the min and max age - Find the median age(one middle item or two middle items divided by two) - Find the average age(all items divided by number of items) - Find the range of the ages(max minus min) - Compare the value of (min - average) and (max - average), use abs() method
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();

//min and max age
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

//median age 
const middleIndex = Math.floor(ages.length / 2)
const middleAge = (ages.length - 1) % 2 === 0
    ? (ages[middleIndex] + ages[middleIndex - 1])
    : (ages[middleIndex]);

//Average data
const sumAge = ages.reduce((temp, age) => temp + age, 0);
const averageAge = sumAge / ages.length;

//range of ages
const range = maxAge - minAge;

//compare values 
const minAvg = Math.abs(minAge - averageAge);
const maxAvg = Math.abs(maxAge - averageAge);

console.log("Minimum age : ", minAge);
console.log("Maximun age : ", maxAge);
console.log("Median data : ", middleAge);
console.log("Average age :", averageAge);
console.log("Range  :", range);
console.log("minAvg  :", minAvg);
console.log("maxAvg  :", maxAvg);

//Slice the first ten countries from the countries array
console.log("Sliced 10 countries :",countries.slice(0,10));

//Find the middle country(ies) in the countries array
const middleCountryIndex = Math.floor(countries.length   / 2);
const middleCountries = [countries[middleCountryIndex] , countries[middleCountryIndex - 1] ]

const middleCountry = (countries.length -1 )%2 === 0 ? (countries[middleCountryIndex]) : middleCountries ;
console.log("Middle country present in the array :", middleCountry );

//3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

let firstHalf;
let secondHalf;

if (countries.length % 2 === 0) {
     firstHalf = countries.slice(0,middleCountryIndex);
     secondHalf = countries.slice(middleCountryIndex);
}else {
     firstHalf = countries.slice(0 , middleCountryIndex+1);
     secondHalf = countries.slice( middleCountryIndex+1);
}

console.log("First half of the countries array :" ,firstHalf);
console.log("Second half of the countries array :" ,secondHalf);




