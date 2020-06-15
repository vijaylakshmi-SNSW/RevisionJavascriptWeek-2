// Create an array of objects called schools. Each school should have the following properties: name (string), address (string), 
// headTeacher (object: title(string), lastName(string))

// Add a property called students to each schoolwhich is an object array. Each student has the following properties: firstName (string), 
// lastName (string), age (number), yearGroup (number)

// Add a property called teachers to each school which is an object array. Each teacher has the following properties: title (string), l
// astName (string), subject (string)

// Use for..of loop(s) to write out all the students with a yearGroup greater than 9

// Q2 - Use for..of loop(s) to write out all the teachers that work at a school with 4 students or less

// Q3 - Use for..of loop(s) to write out the full names of all students who have an age of 12 and a yearGroup of 7

// Q4 - Use for..of loop(s) and any other method you know to log how many students are in each yearGroup across all 
// schools (assume yearGroup is a whole number from 0 - 12)
//==========================================================================================================================
// let schools = [{ name: "QH Public School", address: "Quakers Hill", headTeacher: { title: "Mrs.", lastName: "Parker" } },
// { name: "Sydney Public School", address: "Sydney", headTeacher: { title: "Ms.", lastName: "Leone" } },
// { name: "SH Public School", address: "Seven Hills", headTeacher: { title: "Mrs.", lastName: "Sandra" } }]

// schools.students = [{ firstName: "Tom", lastName: "Roy", age: 5, yearGroup: 1 },
// { firstName: "Ram", lastName: "Con", age: 6, yearGroup: 1 },
// { firstName: "Rex", lastName: "Yes", age: 5, yearGroup: 1 },
// { firstName: "Sam", lastName: "Dan", age: 5, yearGroup: 1 }]


//........................................................................................

let schools = [{
    name: "QH Public School", address: "Quakers Hill", headTeacher: { title: "Mrs.", lastName: "Parker" },
    students: [{ firstName: "tory", lastName: "Roy", age: 5, yearGroup: 1 },
    { firstName: "Rike", lastName: "Coe", age: 6, yearGroup: 1 },
    { firstName: "Rot", lastName: "Yesu", age: 12, yearGroup: 7 },
    { firstName: "Shine", lastName: "Dane", age: 13, yearGroup: 8 }], teacher: [{ title: "Mr", lastName: "Dark", subject: "Maths" }]
},
{
    name: "Sydney Public School", address: "Sydney", headTeacher: { title: "Ms.", lastName: "Leone" },
    students: [{ firstName: "Tomy", lastName: "Royal", age: 5, yearGroup: 9 },
    { firstName: "flex", lastName: "Conis", age: 12, yearGroup: 9 },
    { firstName: "Don", lastName: "toll", age: 12, yearGroup: 7 },
    { firstName: "Samu", lastName: "wish", age: 15, yearGroup: 10 },
    { firstName: "done", lastName: "that", age: 15, yearGroup: 10 },
    { firstName: "Sabr", lastName: "tall", age: 15, yearGroup: 7 }], teacher: [{ title: "Mr", lastName: "yellow", subject: "english" }]
},
{
    name: "SH Public School", address: "Seven Hills", headTeacher: { title: "Mrs.", lastName: "Sandra" },
    students: [{ firstName: "Tom", lastName: "Roy", age: 5, yearGroup: 10 },
    { firstName: "Ram", lastName: "Con", age: 16, yearGroup: 10 },
    { firstName: "Rex", lastName: "Yes", age: 15, yearGroup: 10 },
    { firstName: "Sam", lastName: "Dan", age: 15, yearGroup: 10 }], teacher: [{ title: "Mr", lastName: "brown", subject: "Science" }]
}]

// Use for..of loop(s) to write out all the students with a yearGroup greater than 9

// for (const school of schools) {
//     for (const student of school.students) {
//         if (student.yearGroup > 9){
//         console.log(student)
//     }
// }

// }
//Use for..of loop(s) to write out all the teachers that work at a school with 4 students or less
// let newTeacher = [];
// for (const school of schools) {
//     // for (const teacher of school) {
//     if (school.students.length <= 4) {
//         newTeacher.push(school.teacher)


//     }



// }
// console.log(newTeacher);
// Use for..of loop(s) to write out the full names of all students who have an age of 12 and a yearGroup of 7

// for (const school of schools) {
//     for (const student of school.students) {
//         if (student.age == 12 && student.yearGroup == 7) {
//             console.log(student.firstName + " " + student.lastName)
//         }
//     }

// }
// Use for..of loop(s) and any other method you know to log how many students are in each yearGroup across all 
// schools (assume yearGroup is a whole number from 0 - 12)

// let yearGroupCount = [];
// for (let i = 0; i < 12; i++) {
//     yearGroupCount.push(0);
    
// }
// for (const school of school.students) {
//     for (const student of schoold.students) {
//         yearGroupCount[student.yearGroup]++;
        
//     }
//     for (let i = 0; i < yearGroupCount.length; i++) {
//         if(i == 0){
//         console.log(`there are 4{yearGroupCount[i]} students in kindergarden`);
//     }
// }
// }

let yearGroupCounts = new Array(13).fill(0)
// let yearGroupCount = [];
// for (let i = 0; i < 12; i++) {
//     yearGroupCount.push(0);

for (const school of schools) {
    for (const student of school.students) {
        yearGroupCounts[student.yearGroup]++;
    }
}

for (let i = 0; i < yearGroupCounts.length; i++) {
    if (i == 0) {
        console.log(`There are ${yearGroupCounts[i]} students in Kindergarden`);
    } else {
        console.log(`There are ${yearGroupCounts[i]} students in Year ${i}`);
    }
}
