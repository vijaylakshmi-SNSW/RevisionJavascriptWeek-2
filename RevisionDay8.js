let pets = [{name: "Rex", age:6, species: " Poodler", id : "0a5808ca-ab30-457d-828a-617b2e6d9b72", ownerId :20},
{name: "Jimmy", age:7, species: " Bulldog", id : "ad1bdd41-b4a5-4b8f-ac46-e1b02185412d", ownerId :30},
{name: "Tommy", age:10, species: " Beagle", id : "06e4a63c-b094-4aa7-a30e-504c257b72cc", ownerId :40},
{name: "Lucy", age:3, species: " Pug", id : "a4a4ba35-ad41-461d-a09f-4953321ea33d", ownerId :50}]

let owners = [{firstName: "Luke", lastName: "Parker", id:"0a5808ca-ab30-457d-828a-617b2e6d9b72" },
{firstName: "Rocky", lastName: "Wright", id:"ad1bdd41-b4a5-4b8f-ac46-e1b02185412d"},
{firstName: "Sam", lastName: "Wood", id:"06e4a63c-b094-4aa7-a30e-504c257b72cc" },
{firstName: "Timothy", lastName: "Buller", id:"a4a4ba35-ad41-461d-a09f-4953321ea33d"}]


// ==============================================================  PETAPP.js ====================================================
// Q1 - Write a function that returns a pet given its id
// Q2 - Write a function that returns an owner given its id
// Q3 - Write a function that returns the all the pets for an owner
// Q4 - Write a function that returns the number of pets for each owner: return array should be an object with property ownerId and numberOfPets
// Q5 - Write a function that returns all the names of the pets in order of their owner's last name

//Q1
function getPet (id){
    return pets.find(pet=> pet.id == id)
}

let answer = getPet("0a5808ca-ab30-457d-828a-617b2e6d9b72");
console.log(answer);    

// ==========================================  SCHOOL ARRAY QUESTIONS =================================================================

// Q1 - Create a function called getStudentById which takes a parameter called id and returns the student object from the students array that 
// matches the given id
// Q2 - Create a function called getTeacherById which takes a parameter called id and returns the teacher object from the teachers array 
// that matches the given id
// Q3 - Create a function called getClassById which takes a parameter called id and returns the class object from the classes array that 
// matches the given id
// Q4 - Create a function called getTeacherByClassId which takes a parameter called classId and returns the teacher for that class
// Q5 - Create a function called getStudentsInClass which takes a parameter called classId and returns an array of all the students in that 
// class. A student is in a class if there is an element in the studentClasses array that has a studentId that matches the student and a 
// classId that matches the class

//[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
// Q6 - Create a function called getSubjectsForStudent which takes a parameter called studentId and returns an array of all the subjects that 
// student is studying.
// Q7 - Create a function called getTeacherSchedule which takes a parameter called teacherId and returns an object with a property 
// morningTimeslot and another property called eveningTimeslot. Each proprety should be an array of all the students in that class.
// Q8 - Create a function called getStudentSchedule which takes a parameter called studentId and returns an object with a property 
// morningTimeslot and another property called eveningTimeslot. Each property be an object with teacherName which should be the title of the teacher plus their name and subject which should be the subject of that class
// Q9 - Create a question called doesTeach which takes 2 parameters, teacherId and studentId. The function should return true if the student 
// is in any of the teacher's classes or false otherwise.

// function getTeacherSchedule(teacherId) {
    //     let schedule = classes.filter(cls => cls.teacherId == teacherId);
    //     // let students = {};
    //     // for (let cls of schedule) {
    //     //     if (cls.timeslot == timeslots.morning) {
    //     //         students.morningTimeslot = (getStudentsInClass(cls.id))
    //     //     } else {
    //     //         students.eveningTimeslot = (getStudentsInClass(cls.id))
    //     //     }
    //     // }
    //     return schedule;
    // }
    //  console.log(getTeacherSchedule("948c3641-f95d-483b-8c59-b84c27041313"));