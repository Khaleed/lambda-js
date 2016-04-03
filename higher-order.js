let animals = [{ name: "Tabby", species: "Cat"},
               {name:"Leo", species: "Cat"},
               {name:"Diesel", species: "Dog"},
               {name: "Duffy", species: "Bird"},
               {name: "Tweety", species: "Bird"}];

// filter bird - 1st style
animals.filter(c => c.species === "Bird");

// filter - 2nd style
let isBird = c => c.species === "Bird";
animals.filter(isBird);

// loop - 3rd style
let birds = [];
for (var i = 0; i < animals.length; i += 1) {
    if (animals[i].species === "Bird") {
        birds.push(animals[i]);
    }
}

// grab the name of animals
