// to understand closure you must first understand scoping and hoisting

let name = "Michael Jackson";
function showCelebrity() {
    console.log(name);
}
function showOrdinaryPersonName() {
    name = "Hassan Mannah";
    console.log(name);
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
showName("Joe", "Bloggs"); // "Joe Bloggs"
