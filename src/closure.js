"use strict";

// to understand closures you must first understand scoping and hoisting
let name = "Michael Jordan";
function showCelebrity() {
    console.log(name); // "Michael Jordan"
}

function showOrdinaryPersonName() {
    name = "Joe Bloggs";
    console.log(name); // "Joe Bloggs"
}

showCelebrity(); // "Michael Jackson"
showOrdinaryPersonName(); // "Joe Bloggs"

// basic func to show full name
const showFullName = (f, m, l) => `My name is ${f} ${m} ${l}`;

console.log(showFullName("Joe", "M", "Bloggs"));

const withFirstAndLastPartial = (f, l) => (m) => showFullName(f, m, l);

console.log(withFirstAndLastPartial("Andy", "Liang")); //=> [Function]

const withMiddleName = withFirstAndLastPartial("Andy", "Liang");

withMiddleName("D");

// closure is an inner function that has access to the outer functions' variables and parametres
const showName = (first, last) => {
    const makeFullName = (middle) => {
        return `Your name is ${first} ${middle} ${last}`;
    };
    return makeFullName;
};

const joeBloggsWithMiddleName = showName("Joe", "Bloggs");

console.log(joeBloggsWithMiddleName("M"));//=> Joe M Bloggs

// closures have access to outer function's variables even after the outer function has returned
const greeting = (say) => {
    const greetFriend = (name) => {
        return `${say} ${name}`;
    };
    return greetFriend;
};

const greetArecurser = greeting("Never graduate"); // greeting has now returned
// the closure is called and it has access to the greeting function's paremeters/variables
const greetGinger = greetArecurser("Ginger");//=> "Never graduate Ginger"

console.log(greetGinger);//=> "Never Graduate Ginger";
