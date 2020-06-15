// let numbers = [3,6,4,3,2];

// function multiplyReducer (acc,value){
//     return acc*value;
// }

// let product = numbers.reduce(multiplyReducer);
// console.log(product);

// let product = numbers.reduce((acc,val)=> acc*val);
// console.log(product);

// Q1 - Create an array of numbers and use the array.reduce method to find the smallest number in the array
// Q2 - Create an array of strings and use the array.reduce method to find the length of the longest string in the array
// Q3 - Create an array of objects called bankers. Each should have a name (string) and netWorth (number). Use the array.reduce method to 
// find the total netWorth of all the bankers. Then use that number to calculate the average netWorth of all the bankers.
//Q1
// let numbers = [2,6,2,7,4,6,4];
// smallestNum = numbers.reduce((acc,val) => acc <val ? acc : val);

// console.log(smallestNum);
//Q2.
// strArray = ["Sam", "Tomy", "Hilton", "Wonderful"];

// // let lengthOfLongestStr = strArray.reduce((acc, val) => (acc.length > val.length ? acc : val));
// // console.log(lengthOfLongestStr.length);

// function lengthOfLongest(acc, val){
//      return Math.max(acc, val.length)
// }
// answer= strArray.reduce(lengthOfLongest,0)
// console.log(answer);

//Q3


// let bankers = [{ name: "Luke", networth: 40000 },
// { name: "Tom", networth: 50000 },
// { name: "Sam", networth: 70000 }]


// function addNetWorth(acc, val) {
//     return acc + val.networth
// }
// let totalNetWorth = bankers.reduce(addNetWorth, 0)

// console.log(totalNetWorth);
// console.log(totalNetWorth/bankers.length);

// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[    MAP FUNCTION ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

// Q1 - Use the array.map function to convert an array of strings into an array of the length of each of those string
// Q2 - Create an array of numbers. Use the array.map function to add 5 to each of those numbers
// Q3 - Create an array of people with properties firstName and lastName. Use the array.map function to create an array of the full names of 
// each of the people.
// Q4 - Create an array of pets with properties name (string), age (number) and owner (object with name and age). Use the array.map function 
// to get an array of the names of all the owners.

// Q1 Use the array.map function to convert an array of strings into an array of the length of each of those string

// let strArry = ["Tom", "Ram", "Sam", "Dan", "Right"];
// let answer = strArry.map(e => e.length);
// console.log(answer)
// //Q2 Create an array of numbers. Use the array.map function to add 5 to each of those numbers

// numArray = [3,7,4,2,3];
// let add5ToArray = numArray.map(e => e+5);
// console.log(add5ToArray);

// //Q3. Create an array of people with properties firstName and lastName. Use the array.map function to create an array of the full names of 
// // each of the people.

// let people =[{firstName: "Tom", lastName: "Wright"},{firstName: "Henna", lastName: "Abul"},{firstName: "Chris", lastName: "Sought"}];
// let fullName =people.map(obj => obj.firstName + " " + obj.lastName);
// console.log(fullName);

// //Q4.Create an array of pets with properties name (string), age (number) and owner (object with name and age). Use the array.map function 
// // to get an array of the names of all the owners.

// let pets = [{name: "Tomy", age: 5, Owner: {name: "Flex", age: 20} },
// {name: "Rex", age: 5, Owner: {name: "Luke", age: 23} },
// {name: "Jimmy", age: 5, Owner: {name: "Dan", age: 26} },
// {name: "cute", age: 5, Owner: {name: "Sam", age: 21} }]

// let namesOfOwner = pets.map(obj => obj.Owner.name);
// console.log(namesOfOwner);


// {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{  FOR EACH        }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}

// let number = [4,6,7,3,6,7];
// let element = "The element is:";
// number.forEach((element, data) => {
//     element += `${data}`
    
// });

//Declare an array of objects with properties name and age. Use an array.forEach loop to iterate over each object and print the name and 
// age of the object to the console. Do the same using a for and for..of loop

// let pets = [{name: "Tomy", age: 5 },
// {name: "Rex", age: 7 },
// {name: "Jimmy", age: 3},
// {name: "cute", age: 2}];

// let answer =pets.forEach(obj => console.log(obj.name + " " + obj.age));


// for (const pet of pets) {
//     console.log(pet.name + " " + pet.age);
// }

// for (let i = 0; i < pets.length; i++) {
//     let answer = pets[i]
//     console.log(answer.name + " " + answer.age);
// }

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<