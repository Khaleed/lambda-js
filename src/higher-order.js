"use strict";

/*

 HIGHER ORDER FUNCTIONS - MAP, REDUCE, FILTER

 */

const pets = [{name: "Tabby", species: "Cat"},
              {name:"Leo", species: "Cat"},
              {name:"Diesel", species: "Dog"},
              {name: "Duffy", species: "Bird"},
              {name: "Tweety", species: "Bird"}];

/* FILTER

 Task - Filter Birds from Pets

 */

// filter bird - 1st style
pets.filter(c => c.species === "Bird");

// filter cat - 1st style
pets.filter(c => c.species === "Cat");

// filter - 2nd style
const isBird = c => c.species === "Bird";
pets.filter(isBird);

// filter - 3rd style
Array.prototype.filter.call(pets, c => c.species === "Bird");

// we ignore the 3rd stlye because it is somewhat ugly,
// there are functional APIs like lodash and ramda

// imperative style
let birds = [];
for (let i = 0; i < pets.length; i += 1) {
    if (pets[i].species === "Bird") {
        birds.push(pets[i]);
    }
}

/* MAP

 Task - Grab the name of pets
 Use Map and show the non-functional method too

 */

// Map - get name of pets
pets.map(c => c.name);

// Non functional
let petNames = [];
for (let j = 0; j < pets.length; j += 1) {
    petNames.push(pets[j].name);
}

// Map Chaining/Composition
const list = [1, 2, 3, 4, 5];
list.map(n => n * n)
    .map(n => n + n);

// Map and Filter Example 1 - Double each number if it is only divisible by two
const nos = [1, 2, 3, 4, 5];
nos.map(c => c * 2)
    .filter(c => c % 2 === 0);

// Filter and Map Example 2 - double only the even numbers
const nosList = [1, 2, 4, 5, 6, 7, 8, 9, 10];
nosList.filter(c => c % 2 === 0)
    .map(c => c * 2);

// Non-functional way of doing the above is as follows:-
const newNosList = [];
for (let i = 0; i < nosList.length; i += 1) {
    // if it is an even number
    if (nosList[i] % 2 === 0) {
        // double that number and get rid of odd nos
        newNosList.push(nosList[i] * 2);
    }
}

/* REDUCE

 Task - Reduce to just one value

 */

const totalCost = [{value: 100},
                   {value:200},
                   {value: 300},
                   {value:400},
                   {value: 500}];

// Reduce Example 1
totalCost.reduce((total, cost) => total + cost.value, 0);

// Imperative alternative to Example 1
let counter = 0;
for (let i = 0; i < totalCost.length; i += 1) {
    counter += totalCost[i].value;
}

// Reduce Example 2 on Array
const arr = [100, 200, 300, 400, 500];
arr.reduce((p, c) => p + c);

// Imperative version of Example 2
let sum = 0;
for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
}
console.log(sum);

// Reduce Example 3 - double each number and then add the nos together to produce a single value
const someNos = [5, 7, 8, 9 ,10];
someNos.map(n => n * 2)
       .reduce((totalNo, n) => totalNo + n, 0);

// Imperative version of Example 3
let total = 0;
for (let i = 0; i < someNos.length; i += 1) {
    total += someNos[i] * 2;
}
console.log(total);

// Reduce Example 4 -  reduce to an array that has nos divisible by 2
const otherNos = [10, 11, 12, 13, 14, 15, 16, 18, 20];
const even = otherNos.reduce( (arrayWithEvenNos, n) => {
    if (n % 2 === 0) {
        arrayWithEvenNos.push(n);
    }
    return arrayWithEvenNos;
},[]);
console.log(even);

// Reduce Example 5 - flatten a multi-dimensional array
const flattened = [[1, 2, 3], [4, 5, 6], [7,8,9], [10, 11, 12], [13, 14, 15]];
const result = flattened.reduce((p, c) => {
    p.concat(c);
});
console.log(result);
