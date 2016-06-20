// to understand closure you must first understand scoping and hoisting

let name = "Michael Jackson";

function showCelebrity() {
    console.log(name);
}

function showOrdinaryPersonName() {
    name = "Hassan Mannah";
    console.log(name);
}

showCelebrity();
showOrdinaryPersonName();
