// to understand closures you must first understand scoping and hoisting
let name = "Michael Jackson";
function showCelebrity() {
    console.log(name); // "Michael Jackson"
}
function showOrdinaryPersonName() {
    name = "Hassan Mannah";
    console.log(name); // "Hassan Mannah"
}
showCelebrity(); // "Michael Jackson"
showOrdinaryPersonName(); // "Hassan Mannah"

// closure is an inner function that has access to the outer functions' variables and parametres
function showName(first, last) {
    function makeFullName() {
        return "Your name is " + first + last;
    }
    return makeFullName();
}
showName("Joe", "Bloggs"); // "Your name is Joe Bloggs"

// closures have access to outer function's variables even after the outer function has returned
function greeting(say) {
    function greetFriend(name) {
        return say + " " + name;
    }
    return greetFriend;
}
let greetRecurser = greeting("Never graduate"); // greeting has now returned
// the closure is called and it has access to the greeting function's paremeters/variables
greetRecurser("Goncalo"); // "Never graduate Goncalo"
