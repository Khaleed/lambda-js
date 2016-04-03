"use strict";

let animals = [{ name: "Tabby", species: "Cat"},
               {name:"Leo", species: "Cat"},
               {name:"Diesel", species: "Dog"},
               {name: "Duffy", species: "Bird"},
               {name: "Tweety", species: "Bird"}];

/* FILTER

 Task 1 - Filter Birds from Animals

 */

// filter bird - 1st style
animals.filter(c => c.species === "Bird");

// filter - 2nd style
let isBird = c => c.species === "Bird";
animals.filter(isBird);

// not functional
let birds = [];
for (let i = 0; i < animals.length; i += 1) {
    if (animals[i].species === "Bird") {
        birds.push(animals[i]);
    }
}

/* MAP

 Task 2 - Grab the name of animals
 Use Map and show non-functional method too

 */

// map
animals.map(c => c.name);

// non functional
let names = [];
for (let j = 0; j < animals.length; j += 1) {
    names.push(animals[j].name);
}

/* REDUCE

 Task 3 - Reduce to just one value

 */

let totalCost = [{value: 100},
                 {value:200},
                 {value: 300},
                 {value:400},
                 {value: 500}];

// reduce
console.log(totalCost.reduce((p, c) => {
    return p + c.value;
}, 0));


// Non-Functional Alternative to Reduce
let counter = 0;
for (let k = 0; k < totalCost.length; k += 1) {
    counter += totalCost[k].value;
}

// reduce a simple array to one value
let arr = [100, 200, 300, 400, 500];
(arr.reduce((p, c) => p + c));
