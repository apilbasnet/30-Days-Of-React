//Exercise : Level 1
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
]

//Declare an empty array;
const emptyArray = [];
//Declare an array with more than 5 number of elements

const array5 = [1, 2, 3, 4, 5, 6];

//Find the length of your array
console.log(emptyArray.length);
console.log(array5.length);

//Get the first item, the middle item and the last item of the array
const newArray = [array5[0] , array5[array5.length/2] , array5[array5.length-1]];
console.log(newArray);

//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [
    500,
    "Apil Basnet",
    {firstName:"Apil" , age:"20"},
    true,
    2000,
    "string"
];

console.log(mixedDataTypes.length);

//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ["Facebook", "Google" ,"Microsoft" , "Apple", "IBM", "Oracle", "Amazon"];

//Print the array using console.log()
console.log(itCompanies);

//Print the number of companies in the array
console.log(itCompanies.length);

//Print the first company, middle and last company
console.log(itCompanies[0] , itCompanies[3] , itCompanies[itCompanies.length-1]);

//Print out each company
console.log(itCompanies);

//Change each company name to uppercase one by one and print them out


//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const sentence = itCompanies.join(", ");
const sentence2 = `${sentence}`+ ` are big IT companies.`
console.log(sentence2);

//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
function checkCompany() {
const isPresent = itCompanies.includes ("Facebook");
if(isPresent ){
    return "Facebook"
}
    else{
    
        console.log("Facebook is not found.")

    } 

}

console.log(checkCompany());

//Filter out companies which have more than one 'o' without the filter method

const filteredCompanies = itCompanies.reduce((result, company) => {
    let count = 0 ;
    
    for (let i = 0; i < company.length; i++) {
        if (company[i].toLowerCase() === 'o') {
            count++ ;
            }
        }
        
        if (count>1) {
            result.push(company);
        }

        return result;
} , [])

console.log(filteredCompanies);


//Sort the array using sort() method
const sortedCompanies = itCompanies.sort();
console.log(sortedCompanies);

//Reverse the array using reverse() method
const reverseCompanies = itCompanies.reverse();
console.log(reverseCompanies);

//Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3));

//Slice out the last 3 companies from the array
console.log(itCompanies.slice(4 , 7));

//Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(3,4));

//Remove the first IT company from the array
console.log(itCompanies.shift());

//Remove the middle IT company or companies from the array
console.log(itCompanies.splice(2,1))

//Remove the last IT company from the array
console.log(itCompanies.pop());


