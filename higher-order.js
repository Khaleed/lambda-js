"use strict";

const pets = [{ name: "Tabby", species: "Cat"},
               {name:"Leo", species: "Cat"},
               {name:"Diesel", species: "Dog"},
               {name: "Duffy", species: "Bird"},
               {name: "Tweety", species: "Bird"}];

/* FILTER

 Task - Filter Birds from Pets

 */

// filter bird - 1st style
pets.filter(c => c.species === "Bird");

// filter - 2nd style
const isBird = c => c.species === "Bird";
pets.filter(isBird);

// not functional
let birds = [];
for (let i = 0; i < pets.length; i += 1) {
    if (pets[i].species === "Bird") {
        birds.push(pets[i]);
    }
}

/* MAP

 Task - Grab the name of pets
 Use Map and show non-functional method too

 */

// Map
pets.map(c => c.name);

// Non functional
let names = [];
for (let j = 0; j < pets.length; j += 1) {
    names.push(pets[j].name);
}

// Map Chaining/Composition
const list = [1, 2, 3, 4, 5];
const transformedList = list.map(n => n * n)
                            .map(n => n + n);

// Map and Filter Example


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
