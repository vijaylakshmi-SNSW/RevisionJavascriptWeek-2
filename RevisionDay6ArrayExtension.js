// Q1 - Write some code to find the first name in the names array that starts with an "F"
// Q2 - Write some code to find the first number in the numbers array that is smaller than 10
// Q3 - Write some code to find all the names that are 4 or less characters long
// Q4 - Write some code to find all the numbers in the numbers array that are divisible by 3
// Create an array of people with the following properties: firstName, lastName, age
// Q5 - Write some code to find the first person that is under 18 years old and log their full name;
// Q6 - Write some code to get an array of all the people that have more than 10 characters in their first and last names combined 
// (eg. Luke Parker has exactly 10 characters and should not be included)
// Q7 - Write some code to find all the people that have their last name longer than their first name.

// let nameArray = ["Jim", "Tim", "Rim", "Tom", "Fries"];
// let numArray = [5, 3, 7, 2, 5, 15];
// // Q1 Write some code to find the first name in the names array that starts with an "F"
// let nameWithF =nameArray.find(word => word[0] == "F");
// console.log(nameWithF);
// //Q2 Write some code to find the first number in the numbers array that is smaller than 10
// // function smallerThan10(element){

// //         if(element < 10){
// //             return true;
// //         }
// //     }

// // let numSmallerThan10 = numArray.find(smallerThan10);
// // console.log(numSmallerThan10);



// // Q3.Write some code to find all the names that are 4 or less characters long
// // function length4char(char) {
// //     if(char.length <= 4){
// //         return char;
// //     }
// // }
// let nameWith4char =nameArray.filter(length4char);  
// console.log(nameWith4char);


// let nameWith4char =nameArray.filter(c => c.length <= 4);  
// console.log(nameWith4char);
// //Q4 Write some code to find all the numbers in the numbers array that are divisible by 3
// // function divisibleby3 (element){
// //     if(element%3 == 0){
// //         return true;
// //     }
// // }
// // let divisible3 = numArray.filter(divisibleby3);
// // console.log(divisible3);
//[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[   ARROW Function  ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

// let nameArray = ["Jim", "Tim", "Rim", "Tom", "Fries"];
// let numArray = [5, 3, 7, 2, 5, 15];


// //Q1
// let nameWithF =nameArray.find(word => word[0] == "F");
// console.log(nameWithF);
// //Q2.
// let numSmallerThan10 = numArray.find(e => e<10);
// console.log(numSmallerThan10);
// //Q3
// let nameWith4char =nameArray.filter(c => c.length <= 4);  
//  console.log(nameWith4char);

// //Q4
// let divisible3 = numArray.filter(e=>e%3 == 0);
// console.log(divisible3);

// let people = [{ firstName: "Lakshmi", lastName: "Gov", age: 30 },
// { firstName: "Lakshmi", lastName: "Harsha", age: 15 },
// { firstName: "Luke", lastName: "Parker", age: 16 },
// { firstName: "Tom", lastName: "Yoyer", age: 27 }];

// //Q5
// let ageMoreThan18 = people.find(p => p.age < 18);
// //console.log(ageMoreThan18);
// console.log(ageMoreThan18.firstName + " " + ageMoreThan18.lastName)
// //Q6
// let longChar = people.filter(p => p.firstName.length + p.lastName.length > 10);
// console.log(longChar);

// //Q7
// let longLastName = people.filter(p => p.lastName.length > p.firstName.length);
// console.log(longLastName);

// //Q5 Write some code to find the first person that is under 18 years old and log their full name;
// // let people = [{ firstName: "Lakshmi", lastName: "Gov", age: 30 },
// // { firstName: "Lakshmi", lastName: "Harsha", age: 15 },
// // { firstName: "Luke", lastName: "Parker", age: 16 },
// // { firstName: "Tom", lastName: "Davis", age: 27 }];
// // function ageUnder18(person) {
// //     if (person.age < 18) {
// //         return true;
// //     }
// }
// let ageMoreThan18 = people.find(ageUnder18);
// console.log(ageMoreThan18);

// //q6 Write some code to get an array of all the people that have more than 10 characters in their first and last names combined 
// // (eg. Luke Parker has exactly 10 characters and should not be included)
// function checkmoreThan10Char(person) {
//     if (person.firstName.length + person.lastName.length > 10) {
//         return true;
//     }   
// } 
// let longChar = people.filter(checkmoreThan10Char);
// console.log(longChar);
// //Q7 Write some code to find all the people that have their last name longer than their first name.
// function checkLastName(person){
//     if(person.lastName.length > person.firstName.length)
//     return true;
// }
// let longLastName = people.filter(checkLastName);
// console.log(longLastName);

//{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{  SOME OPERATOR    }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
// Q1 - Create an array of numbers. Use array extension methods to find whether all the elements in the array have a value that is not 
// // divisible by 5

// Q2 - Create an array of strings. Use array extension methods to find whether any of the elements begin with a vowel.

// Q3 - Create an array of pets (name, age, owner) and use array extension methods to find whether any of the pets are owned by Luke.

// Q4 - Jimmy is scared of the letter Q, write some code that takes in an array of pet objects (name, age, owner) and tells Jimmy's parents 
// // if the array contains any pets that have a name or owner with the letter Q. You must use a for..in loop for this.

//Q1
// let numArray = [5, 10, 20, 5, 25, 15];
// let divisibleBy5 = numArray.every(e => e % 5 == 0);
// console.log(divisibleBy5);
//Q2

// function checkVowels(str){
//     if (["A", "E", "I", "O", "U" ].includes(str[0])) {
//         return true;
// }
// }

// let nameArray = ["Jim", "Tim", "Rim", "Aom", "Eries"];
// let strWithVowels = nameArray.some(checkVowels);
// console.log(strWithVowels);



// //Q3.
// let petArray = [{ name: "Rex", age: 4, owner: "Luke" },
// { name: "Tomy", age: 4, owner: "Dan" },
// { name: "Flex", age: 4, owner: "Ram" },
// { name: "Tony", age: 4, owner: "Sam" }]

// petOwnedByLuke = petArray.find(p => p.owner == "Luke");
// console.log(petOwnedByLuke);

// //Q4 Jimmy is scared of the letter Q, write some code that takes in an array of pet objects (name, age, owner) and tells Jimmy's parents 
// // if the array contains any pets that have a name or owner with the letter Q. You must use a for..in loop for this.

// {{{{{{{{    CORRECT ANSWER IN FILE PracticeMoreQues.js      }}}}}}}}

let petArray = [{ name: "Rex", age: 4, owner: "Luke" },
{ name: "Tomy", age: 4, owner: "Dan" },
{ name: "Flex", age: 4, owner: "Ram" },
{ name: "Tony", age: 4, owner: "Qam" }]


for (const key in petArray) {
    if (petArray[key].name.split('').includes("Q") || petArray[key].owner.split('').includes("Q")){  
        console.log(petArray[key]);
    } 
}

// for (const key in people) {
//     // if(people[key].firstName.split('').includes('l')){
//     //     console.log(people[key]);
//     // }
//     // }


// let namesMatches = names.filter(name => ["a" ,"b", ""])

// {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{   SORT ARRAY EXTENSION     }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}

//Q1 - Create an array of numbers and sort them from largest to smallest
// let numbers = [12,15,8,3,43];
// console.log(numbers);

// let sortedNumbers = numbers.sort((num1, num2) => num2 - num1 );
// console.log(sortedNumbers);

// Q2 - Create a sort function that will sort the following array of events into chronological order:
// let events = [
//     {
//         name: "Went on holiday",
//         month: 3,
//         year: 2019
//     }, {
//         name: "Got first car",
//         month: 5,
//         year: 2015
//     }, {
//         name: "Moved out of home",
//         month: 11,
//         year: 2019
//     }
// ];
// function sortByYear(num1, num2) {
//     return num1 - num2;
// }

// function sortByname(event1, event2) {
//     if (event1.name.toLowerCase() < event2.name.toLowerCase()) {
//         return -1;
//     }
//     else if (event1.name.toLowerCase() > event2.name.toLowerCase()) {
//         return 1;
//     }
//     else  {
//         return 0;
//     }
// }
let sortingEvent = events.sort(sortByname).sort(sortByYear);
console.log(sortingEvent);

// // Q3 - Sort the following array in alphabetical order by last name, then by first name
// let people = [
//     {
// firstName:"Margaret",
// lastName:"Cox"
//     }, {
// firstName:"Aaryan",
// lastName:"Bauer"
//     }, {
// firstName:"Asma",
// lastName:"Bauer"
//     }, {
// firstName:"Jazmin",
// lastName:"Flowers"
//     }
// ];

// function sortByLastname(person1,person2){
//     if(person1.lastName.toLowerCase() < person2.lastName.toLowerCase()){
//         return -1;
    
//     }
//     else if(person1.lastName.toLowerCase() > person2.lastName.toLowerCase()){
//         return 1;
    
//     }
//     else {
//         return 0;
    
//     }
// }

// function sortByFirstname(p1,p2){
//     if(p1.firstName.toLowerCase() < p2.firstName.toLowerCase()){
//         return -1;
    
//     }
//     else if (p1.firstName.toLowerCase() > p2.firstName.toLowerCase()){
//         return 1;
    
//     }
//     else {
//         return 0;
    
//     }
// }

// let sortAlphabeticalOrder = people.sort(sortByFirstname).sort(sortByLastname);
// console.log(sortAlphabeticalOrder);
