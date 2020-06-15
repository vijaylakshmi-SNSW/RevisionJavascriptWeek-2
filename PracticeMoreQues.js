// let people = [{ firstName: "Lakshmi", lastName: "Gov", age: 30 },
//                 { firstName: "Lakshmi", lastName: "Harsha", age: 15 },
//                 { firstName: "Luke", lastName: "Parker", age: 16 },
//                 { firstName: "Tolm", lastName: "Davis", age: 27 }];

// for (const key in people) {
// if(people[key].firstName.split('').includes('l')){
//     console.log(people[key]);
// }
// }

// for (let i = 0; i < people.length; i++) {
//     const element = people[i];
//    console.log(element.firstName) 
// }

// for (const person of people) {
//     console.log(person.firstName)
// }

// for (const key in people) {
//     let count = Number(key) + 1  ;
//     console.log(count + ": " + people[key].firstName);

//     }
// let people = [
//     {
//         firstName: "Margaret",
//         lastName: "Cox",
//         age: 35
//     }, {
//         firstName: "Asma",
//         lastName: "Bauer",
//         age: 29
//     }, {
//         firstName: "Aaryan",
//         lastName: "Molloy",
//         age: 22
//     }, {
//         firstName: "Jazmin",
//         lastName: "Flowers",
//         age: 22
//     }
// ];

// function sortByAge(person1, person2) {
//     return person1.age - person2.age;
// }

// function sortByLastName(person1, person2) {
//     if (person1.lastName.toLowerCase() < person2.lastName.toLowerCase()) {
//         return -1;
//     } else if (person1.lastName.toLowerCase() > person2.lastName.toLowerCase()) {
//         return 1;
//     } else {
//         return 0;
//     }
// }

// let peopleSortedByAge = people.sort(sortByLastName).sort(sortByAge);
// console.log(peopleSortedByAge)


// function sortBytName(a, b) {
//     if (a.name.toLowerCase() < b.name.toLowerCase()) {
//         return -1;
//     } else if (a.name.toLowerCase() > a.name.toLowerCase()) {
//         return 1;
//     } else {
//         return 0;
//     }
// }
// let numArray = [{name:"b",num: 7}, {name: "a",num:7}];
// sortingNum=numArray.sort((a,b) => a.num - b.num).sort(sortBytName);
// console.log(sortingNum)

// function sortByLastName(a, b) {
//         if (a.name.toLowerCase() < b.name.toLowerCase()) {
//             return -1;
//         } else if (a.name.toLowerCase() > a.name.toLowerCase()) {
//             return 1;
//         } else {
//             return 0;
//         }
//     }
//Q4 Jimmy is scared of the letter Q, write some code that takes in an array of pet objects (name, age, owner) and tells Jimmy's parents 
// // if the array contains any pets that have a name or owner with the letter Q. You must use a for..in loop for this.

// let petArray = [{ name: "Rex", age: 4, owner: "Luke" },
// { name: "Tomy", age: 4, owner: "Dan" },
// { name: "Flex", age: 4, owner: "Ram" },
// { name: "Tony", age: 4, owner: "Qam" }]

// function findQ(petArray){
//     for (const pet in petArray) {
//         const element = petArray[pet].toString().toLowerCase();
//         if(element.includes("q")){
//             return true;
//         }
//     }
// }
// let hasQ = petArray.some(findQ);
// console.log(hasQ);

let books = [
    {
        title: "Harry Potter and the Philosopher's Stone",
        yearOfPublication: 1997,
        authorId: "7e7354b8-59e8-4b6a-916b-70882eab6fb6",
        bookId: "426ef1f8-59fc-40c8-8e0b-6943848be1ac"
    }, {
        title: "Harry Potter and the Chamber of Secrets",
        yearOfPublication: 1998,
        authorId: "7e7354b8-59e8-4b6a-916b-70882eab6fb6",
        bookId: "ce215083-e77d-4ead-917e-680d11443b69"
    }, {
        title: "Harry Potter and the Prisoner of Azkaban",
        yearOfPublication: 2000,
        authorId: "7e7354b8-59e8-4b6a-916b-70882eab6fb6",
        bookId: "6454c991-985e-4f1c-b390-76ef4293f6ba"
    }, {
        title: "The Hobbit",
        yearOfPublication: 1937,
        authorId: "184c518a-753f-49ce-9abb-e2e9c29fc980",
        bookId: "fa7cb9a8-0f81-4205-8650-64225d7c1de4"
    }, {
        title: "The Fellowship of the Ring",
        yearOfPublication: 1954,
        authorId: "184c518a-753f-49ce-9abb-e2e9c29fc980",
        bookId: "752b80b5-7b9f-454d-b1d0-b274480d9ad2"
    }, {
        title: "The Two Towers",
        yearOfPublication: 1954,
        authorId: "184c518a-753f-49ce-9abb-e2e9c29fc980",
        bookId: "ba86fdd0-1ac2-4867-a0fa-d1b1bd7de403"
    }, {
        title: "The Return of the King",
        yearOfPublication: 1955,
        authorId: "184c518a-753f-49ce-9abb-e2e9c29fc980",
        bookId: "64e58f34-94b3-4dd5-9701-d00513f83291"
    }
];

let authors = [
    {
        firstName: "J. K.",
        lastName: "Rowling",
        id: "7e7354b8-59e8-4b6a-916b-70882eab6fb6"
    }, {
        firstName: "J. R. R.",
        lastName: "Tolkien",
        id: "184c518a-753f-49ce-9abb-e2e9c29fc980"
    }
];
// Create a function called searchBooks which takes a string which is a search term as an argument. The function should return all books 
// where the title or author name contains the given string.

// function mapBooks(book){
//     function matchingId (author){
//         return author.id == books.id   
//     }
//     let newAuthor = authors.find(matchingId)
//     return {title: book.title,
//     authorId: book.authorId,
//     firstName: newAuthor.firstName,
//     lastName: newAuthor.lastName }

// }

// let booksAuthors = books.map(mapBooks);
// function searchBooks(searchTerm){
//     return booksAuthors.filter(obj => obj.title == searchTerm || obj.firstName == searchTerm || obj.lastName == searchTerm)
// }
// let answer = searchBooks("Rowling");
// // console.log(answer);

// Create a function that takes an 2 arguments, an array of objects and a string character (eg. "a" or "b", etc.). The function should return 
// all the objects in the array where the property name of that object contains the string character.
// function searchByChar(array, searchTerm) {
//     let resultArr = [];
//     for (let i = 0; i < array.length; i++) {
//         let element = array[i];

//         let found = false;
//         for(let i = 0; i < element.name.length; i++){
//             let letter = element.name[i];
//             if(letter.toLowerCase() == searchTerm.toLowerCase()){
//                 found = true;
//             }
//         }

//         if(found) {
//             resultArr.push(element);
//         }
//     }
//     return resultArr;
// }

// console.log(searchByChar(people, "F"));

// .filter(p =>p.name == searchTerm)

function getArrayByChar(people, searchTerm) {
    let newArray = [];
    for (const person of people) {
        let answer = person.name.split('').indexOf(searchTerm)
        if (answer != -1) {
            newArray.push(person);
        }

    } return newArray;

}
// console.log(getArrayByChar(people, "J"));

function addAge(people){
    function mapAge(person){
        var newObj = {};
        changedAge = person.age + 5;
        newObj.age = changedAge
        newObj.name = person.name
        return newObj;
    }
    let increasedAge = people.map(mapAge);
   return increasedAge; 
}

// console.log(addAge(people));


let people = [
    {
        name: "Jane",
        age: 25,
        addressId: "e1dffa29-20e6-4378-bf49-d9cfd79b9b7c"
    },
    {
        name: "Bob",
        age: 40,
        addressId:"d44d153b-3351-4d23-b08a-3079c6ed31df"
    },
    {
        name: "Dana",
        age: 46,
        addressId:"b45a7634-fd3d-4220-ad7d-e5dd2031198c"
    },
    {
        name: "Jade",
        age: 19,
        addressId: "ac50e952-88c9-4d62-a774-12cf8f73791c"
    },
    {
        name: "Jim",
        age: 12,
        addressId:"a6647620-94d6-432b-a9cb-4c7c029bfe93"
    }
];

let addresses = [
    {street: "Ward" ,
    house: 17, 
    postcode: 2655,
    id: "e1dffa29-20e6-4378-bf49-d9cfd79b9b7c" }, 
    {street: "Mount" ,
    house: 14, 
    postcode: 2644,
    id:"d44d153b-3351-4d23-b08a-3079c6ed31df" },
    {street: "altrove" ,
    house: 10, 
    postcode: 2654,
    id: "b45a7634-fd3d-4220-ad7d-e5dd2031198c"},
    {street: "light" ,
    house: 1, 
    postcode: 2723,
    id: "ac50e952-88c9-4d62-a774-12cf8f73791c"},
    {street: "round" ,
    house: 11, 
    postcode: 2000,
    id: "a6647620-94d6-432b-a9cb-4c7c029bfe93"}];
//Q1 In the people array print all the elements of address array.
    
function printPeople(person){

    let newPerson = {};

    function getAddress(person){
       let addr =  addresses.find( addr => addr.id == person.addressId);
       return addr;
    }
    
    newPerson.name = person.name;
    newPerson.age = person.age;
    newPerson.address = getAddress(person);


    return newPerson;
}

let obj = people.map(printPeople)
// console.log(obj);


//Q2 In the addressess array print the name from the people array.
function printName(address){
    function getNameById(address){
        let newName = people.find(a => a.addressId == address.id);
        return newName.name;
    }
    newAddr = {};
    newAddr.name = getNameById(address)
    newAddr.street = address.street;
    newAddr.house = address.house;
    newAddr.postcode = address.postcode;

    return newAddr;
}
// console.log(addresses.map(printName));

//Q3 in the address array, print only the street name.
function printStreet(address){
    return address.street;
}
console.log(addresses.map(printStreet));

//Q4 sort by name
function sortingPeopleName(person1,person2){
    if(person1.name < person2.name) {
        return -1;
    } else if(person1.name > person2.name){
            return 1;
        } else return 0;
    
}
// console.log(people.sort(sortingPeopleName));

//Q5 sort by age
function sortingPeopleAge(person1,person2){
    if(person1.age < person2.age) {
        return -1;
    } else if(person1.age > person2.age){
            return 1;
        } else return 0;
    
}
//  console.log(people.sort(sortingPeopleAge));
