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

// not functional - 3rd style
let birds = [];
for (var i = 0; i < animals.length; i += 1) {
    if (animals[i].species === "Bird") {
        birds.push(animals[i]);
    }
}

/* MAP

 Task 2 - Grab the name of animals
 Use Map and show non-functional method too

 */

// map - 1st Style
console.log(animals.map(c => c.name));

// not functional - 2nd Style
let names = [];
for (var j = 0; j < animals.length; j += 1) {
    names.push(animals[j].name);
}
console.log(names);
