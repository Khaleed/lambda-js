"use strict";

/*
 * HIGHER ORDER FUNCTIONS - MAP, REDUCE, FILTER
 **/

const pets = [{name: "Tabby", species: "Cat"},
              {name:"Leo", species: "Cat"},
              {name:"Diesel", species: "Dog"},
              {name: "Duffy", species: "Bird"},
              {name: "Tweety", species: "Bird"}];

/* FILTER
 * Task - Filter Birds and Cats from Pets
 **/

// Filter bird- 1st style
const getBirds = pets.filter(pet => pet.species === "Bird");
// console.log(getBirds);

// Filter cat - 1st style
const getCats = pets.filter(pet => pet.species === "Cat");
// console.log(getCats);

// Filter - 2nd style
const isBird = pet => pet.species === "Bird";
pets.filter(isBird);

// Filter - 3rd style
Array.prototype.filter.call(pets, pet => pet.species === "Bird");

// Imperative style
let birds = [];
for (let i = 0; i < pets.length; i += 1) {
    if (pets[i].species === "Bird") {
        birds.push(pets[i]);
    }
}

/* MAP
 * Task - Grab the name of pets
 * Use Map and show the non-functional style too
**/

/* Map - get name of pets
 **/
const getPetNames = pets.map(pet => pet.name);

// Non functional example of map
const petNames = [];
for (let i = 0; i < pets.length; i += 1) {
    petNames.push(pets[i].name);
}

// Map Chaining/Composition
const list = [1, 2, 3, 4, 5]; // [1, 4, 9, 16, 25] -> [2, 8, 18, 32, 50]
const newList = list.map(n => n * n)
                    .map(n => n + n);

/* Map and Filter Example 1 - Double each number and filter nos that are divisible by two
 **/
const nos = [1, 2, 3, 4, 5];
const newNos = nos.map(n => n * 2)
                  .filter(n => n % 2 === 0);

/* Filter and Map Example 2 - Double only the even numbers
 **/
const nosList = [1, 2, 4, 5, 6, 7, 8, 9, 10];
const newNumList = nosList.filter(n => n % 2 === 0)
                          .map(n => n * 2);

// Non-functional alternative to Example 2
const newList2 = [];
for (let i = 0; i < nosList.length; i += 1) {
    if (nosList[i] % 2 === 0) {
        newList2.push(nosList[i] * 2);
    }
}

/* Combine Map, Filter, and Reduce - Example 1
**/
const myList = [2, 4, 5, 6, 8, 10];
const myNewList = myList.map(n => n * 3) // [6, 12, 15, 18, 24, 30]
                        .map(n => n - 1) // [5, 11, 14, 17, 23, 29]
                        .filter(n => n % 2 !== 0) // [5, 11, 17, 23, 29]
                        .reduce((sum, n) => sum + n, 0); // 85

/* REDUCE
 *
 Task - Reduce to just one value
 *
 **/

const totalCost = [{value: 100},
                   {value:200},
                   {value: 300},
                   {value:400},
                   {value: 500}];

/* Reduce Example 1
 **/
const getTotalCost = totalCost.reduce((total, cost) => total + cost.value, 0);

// Imperative alternative to Example 1
let counter = 0;
for (let i = 0; i < totalCost.length; i += 1) {
    counter += totalCost[i].value;
}

/* Reduce Example 2
 **/
const arr = [100, 200, 300, 400, 500];
const newArr = arr.reduce((p, c) => p + c);

// Imperative version of Example 2
let sum = 0;
for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
}

/* Reduce Example 3 - Double each number and then add the nos together to produce a single value
 **/
const someNos = [5, 7, 8, 9 ,10];
const newSomeNos = someNos.map(n => n * 2)
                          .reduce((totalNo, n) => totalNo + n, 0);

// Imperative version of Example 3
let total = 0;
for (let i = 0; i < someNos.length; i += 1) {
    total += someNos[i] * 2;
}

/* Reduce Example 4 - Reduce to an array that has nos divisible by 2
**/
const otherNos = [10, 11, 12, 13, 14, 15, 16, 18, 20];
const even = otherNos.reduce( (arrayWithEvenNos, n) => {
    if (n % 2 === 0) {
        arrayWithEvenNos.push(n);
    }
    return arrayWithEvenNos;
},[]);

// Imperative style
let arrayWithEvenNos = [];
for (let i = 0; i < otherNos.length; i += 1) {
    if (otherNos[i] % 2 === 0) {
        arrayWithEvenNos.push(otherNos[i]);
    }
}

/* Reduce Example 5 - Flatten a multi-dimensional array
 **/
const nestedArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15]];
const singleArr = nestedArr.reduce((singleArr, arr) => singleArr.concat(arr), []);

// Imperative example
let finalArr = [];
for (let i = 0; i < nestedArr.length; i += 1) {
    finalArr = finalArr.concat(nestedArr[i]);
}

/* Reduce Example 6 - The value of reduce as a swiss army knife
 **/
const sumAnyNums = (...args) => args.reduce((sum, arg) => sum + arg, 0);

// Imperative style
let totalSum = 0;
const sumNums = (...args) => {
    if (args.length === 0) {
        throw("error");
    } else {
        for (let i = 0; i < args.length; i += 1) {
            totalSum += args[i];
        }
    }
    return totalSum;
};
sumNums(1, 2);

/* Reduce Example 7 - Map written as a Reduce
 **/
const anotherNumList = [11, 12, 13, 14, 15];
const doubleList = anotherNumList.map(n => n * 2);
// ;=> [22, 24, 26, 28, 30]

const newArray = anotherNumList.reduce((newArray, num) => {
    newArray.push(num * 2);
    return newArray;
},[]);

/* Reduce Example 8 - Filter written as Reduce
 **/
const yetAnotherList = [20, 21, 22, 23, 24, 25, 26, 27];
const findOddNums = yetAnotherList.filter((num) => num % 2 !== 0);

const reduceToOddNums = yetAnotherList.reduce((oddArr, n) => {
    if (n % 2 !== 0) {
        oddArr.push(n);
    }
    return oddArr;
}, []);
