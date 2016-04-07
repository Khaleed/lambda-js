"use strict";

// Currying refers to when multiple arguments are transformed into a series of functions with only one argument

let lionKing =
        name =>
        size =>
        prey => "The name of the lion who was King is " + name + ", the size is " + size + " and their favourite prey is " + prey;

console.log(lionKing("Simba")("125-kilos")("Gazelle"));
