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
for (var j = 0; j < pets.length; j += 1) {
    petNames.push(pets[j].name);
}

// Map Chaining/Composition
const list = [1, 2, 3, 4, 5];
list.map(n => n * n)
    .map(n => n + n);

// Map and Filter Example 1 - Double each number and return if it is only divisible by two
const nos = [1, 2, 3, 4, 5];
nos.map(c => c * 2)
   .filter(c => c % 2 === 0);

const nosList = [1, 2, 4, 5, 6, 7, 8, 9, 10];
// Filter and Map Example 2 - double only the even numbers
nosList.filter(c => c % 2 === 0)
       .map(c => c * 2);
// Non-functional way of doing this is as follows:-
let newNosList = [];
for (var l = 0; l < nosList.length; l += 1) {
    // if it is an even number
    if (nosList[l] % 2 === 0) {
        // double that number and get rid of odd nos
        newNosList[l] = nosList[l] * 2;
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
totalCost.reduce((p, c) => p + c.value, 0);

// Non-Functional Alternative to Reduce
let counter = 0;
for (let k = 0; k < totalCost.length; k += 1) {
    counter += totalCost[k].value;
}

// Reduce Example 2 on Array
const arr = [100, 200, 300, 400, 500];
arr.reduce((p, c) => p + c);

// Reduce Example 3 - double each number and then add the nos together to produce a single value
const someNos = [5, 7, 8, 9 ,10];
someNos.map(n => n * n)
       .reduce((total, n) => total + n, 0);

// Reduce Example 4 -  reduce to an array that has nos divisible by 2
const otherNos = [1, 2, 3, 4, 5];
otherNos.reduce((evenArray, n) => {
    if (n % 2 === 0) {
        evenArray.push(n);
    }
    return evenArray;
}, []);

