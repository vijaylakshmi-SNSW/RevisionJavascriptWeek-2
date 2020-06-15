let pets = [
    {
        name: "Rex",
        age: 1,
        species: "Dog",
        id: "20ad7703-8350-47e3-95c1-6c1de12d1338",
        ownerId: "d4558c2f-9cda-4ae6-8aef-9ceb9eaefa2d",
    }, {
        name: "Rome",
        age: 5,
        species: "Cat",
        id: "91c02184-534f-4bcf-aba0-4103171d5e92",
        ownerId: "d4558c2f-9cda-4ae6-8aef-9ceb9eaefa2d",
    }, {
        name: "Lucky",
        age: 3,
        species: "Dog",
        id: "2356e9cb-e07d-4c7e-8754-3faf68477fd7",
        ownerId: "913ad967-3199-4f53-a228-79f0615b37af",
    }, {
        name: "Roach",
        age: 7,
        species: "Dog",
        id: "23ad3350-bcae-4153-b79c-4a77d9343956",
        ownerId: "913ad967-3199-4f53-a228-79f0615b37af",
    }, {
        name: "Mair",
        age: 1,
        species: "Goldfish",
        id: "76712e6e-8554-4a94-8990-a5b53a87cef5",
        ownerId: "913ad967-3199-4f53-a228-79f0615b37af",
    }, {
        name: "Hurst",
        age: 1,
        species: "Goldfish",
        id: "604bfac3-c0e4-41c1-ad4f-69081b1c2e3e",
        ownerId: "913ad967-3199-4f53-a228-79f0615b37af",
    }, {
        name: "Hurst",
        age: 1,
        species: "Goldfish",
        id: "9e5384b0-07bb-4067-8a33-6028c89fc155",
        ownerId: "460dca95-df25-4673-8593-905c673efc9e",
    }
];

let owners = [
    {
        firstName: "Mitchell",
        lastName: "Bradshaw",
        id: "d4558c2f-9cda-4ae6-8aef-9ceb9eaefa2d"
    }, {
        firstName: "Sofija",
        lastName: "Byrd",
        id: "913ad967-3199-4f53-a228-79f0615b37af"
    }, {
        firstName: "Erika",
        lastName: "Mcgill",
        id: "460dca95-df25-4673-8593-905c673efc9e"
    }
];

// Q1 - Write a function that returns a pet given its id
// // Q2 - Write a function that returns an owner given its id
// // Q3 - Write a function that returns the all the pets for an owner
// // Q4 - Write a function that returns the number of pets for each owner: return array should be an object with property ownerId and numberOfPets
// // Q5 - Write a function that returns all the names of the pets in order of their owner's last name
//Q1
function getPet(id) {
    return pets.find(pet => pet.id == id)
}

// //let answer = getPet("9e5384b0-07bb-4067-8a33-6028c89fc155");
// //console.log(answer);
// //Q2
function getOwner(id) {
    return owners.find(o => o.id == id)
}

// let answer = getOwner("913ad967-3199-4f53-a228-79f0615b37af");
// console.log(answer);
//Q3
function getPetByOwnerid(id){
    return pets.filter(p => p.ownerId == id)
}
// // let petsByOwner = getPetByOwnerid("d4558c2f-9cda-4ae6-8aef-9ceb9eaefa2d");
// // console.log(petsByOwner);


// // Q4Write a function that returns the number of pets for each owner: return array should be an object with property ownerId and numberOfPets
function numberOfPetsByOwner() {
    function allPetsForOwner(owner) {
        let result = {};
        result.ID = owner.id;
        result.numPets = getPetByOwnerid(owner.id).length;
        return result;
    }
    return owners.map(allPetsForOwner);
};
let numberPets = numberOfPetsByOwner();
//  console.log(numberPets);


//Q5 Write a function that returns all the names of the pets in order of their owner's last name
// function getSortedOwnerLastName(){
//     function mapPet(pet){
//         // function findPetById(owner) {
//         //     return owner.id == pet.ownerId;
//         // }
//         let owner1 = owners.find(owner => owner.id == pet.ownerId);
//         return {
//             name: pet.name,
//             owner: owner1.lastName
//         };
//     }

//     let detailedPets = pets.map(mapPet);
// function sortByLastName (a,b){
//     if(a.owner < b.owner) {
//         return -1;
//     } else if (a.owner > b.owner){
//         return 1;
//     } else {
//         return 0;
//     }
// }
//  console.log(detailedPets.sort(sortByLastName).map(p=>p.name));

// function sortByLastName(pet1,pet2){
//    let owner1 = getOwner(pet1.ownerId);
//     let owner2 = getOwner(pet2.ownerId);
//     if(owner1.lastName < owner2.lastName) {
//         return -1;
//     } else if (owner1.lastName > owner2.lastName){
//         return 1;
//     } else {
//         return 0;
//     } 
//     }


// let sortLastName =pets.sort(sortByLastName).map(p => p.name);
// console.log(sortLastName);

// Write a function that returns all the names of the pets in order of their owner's last name

function getSortedOwnerLastName(pet1, pet2) {
    owner1 = getOwner(pet1.ownerId);
    owner2 = getOwner(pet2.ownerId);
    if (owner1.lastName < owner2.lastName) {
        return -1;
    } else {
        if (owner1.lastName > owner2.lastName) {
            return 1;
        }
        else {
            return 0;
        }
    }
}
function getOwnerByOwnerID(ownerID) {
    return owners.find(p => p.id == ownerID)
}
function mapOwnerName(pet) {
    let petNew = {};
    petNew.name = pet.name,
        // petNew.age = pet.age,
        // petNew.id = pet.id,
        // petNew.ownerId = pet.ownerId,
        petNew.ownerName = getOwnerByOwnerID(pet.ownerId).lastName

    return petNew;
}

let sortByLastName = pets.sort(getSortedOwnerLastName).map(a => mapOwnerName(a));
// let OwnersortedLastName = (sortByLastName.map(o => getOwnerByOwnerID(o)).map(o => o.lastName));
// console.log(getOwnerByOwnerID(sortByLastName));
// console.log(getOwnerByOwnerID("913ad967-3199-4f53-a228-79f0615b37af").lastName);
// console.log(sortByLastName);
// console.log(sortByLastName + " " + OwnersortedLastName);

//Write a function that returns the number of pets for each owner: return array should be an object with property ownerId and numberOfPets

function numberOfPets(owner) {
   let ownId= owner.id
    function countPets(ownId) {
        let count = 0;
        for (const pet of pets) {
            if (pet.ownerId == ownId) {
                count++;
            }
        } return count;
    }
    let newObject = {};
    newObject.Id = ownId,
        newObject.numberOfPets = countPets(ownId)
    return newObject;
}
        // console.log(numberOfPets());
        console.log(owners.map(numberOfPets));
