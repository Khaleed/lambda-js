"use strict";

/*

 Currying refers to when multiple arguments are transformed into a series of functions with only one argument

*/

// Say we have a function that takes multiple arguments
const getLionKingInfo = (name, size, prey) => "The name of the lion who was King is " + name + ", the size is " + size + " and their favourite prey is " + prey;

// Curried
const getLionKingInfo =
        name =>
        size =>
        prey => "The name of the lion who was King is " + name + ", the size is " + size + " and their favourite prey is " + prey;

console.log(getLionKingInfo("Simba")("125-kilos")("Gazelle"));
