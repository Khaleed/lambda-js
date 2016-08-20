"use strict";

// to understand closures you must first understand scoping and hoisting
const name = "Michael Jordan";
function showCelebrity() {
    console.log(name); // "Michael Jordan"
}

function showOrdinaryPersonName() {
    name = "Joe Bloggs";
    console.log(name); // "Joe Bloggs"
}

showCelebrity(); // "Michael Jackson"
showOrdinaryPersonName(); // "Hassan Mannah"

// basic func to show full name
const showFullName = (first, middle, last) => "your name is " + first + " " + middle + " " + last;

// partially applied function
const withFirstAndLastPartial = (first, last) => {
    return middle => showFullName(first, middle, last);
};

const withMiddleName = withFirstAndLastPartial("Andy", "Liang");
withMiddleName("D"); // Andy D Liang

// closure is an inner function that has access to the outer functions' variables and parametres
const showName = (first, last) => {
    function makeFullName(middle) {
        return "Your name is " + first + " " + middle + " " + last;
    }
    return makeFullName;
};

const joeBlogsWithMiddleName = showName("Joe", "Bloggs");

joeBlogsWithMiddleName("M"); // Joe M Blogs

// closures have access to outer function's variables even after the outer function has returned
const greeting = say => {
    function greetFriend(name) {
        return say + " " + name;
    }
    return greetFriend;
};

const greetArecurser = greeting("Never graduate"); // greeting has now returned
// the closure is called and it has access to the greeting function's paremeters/variables
greetArecurser("Ginger"); // "Never graduate Ginger"
