const R = require("Ramda");
const curry = R.curry;

// Example 1

// base fns
const match = curry((what, str) => str.match(what));

const replace = curry((what, replacement, str) => str.replace(what, replacement));

const filter = curry((f, array) => array.filter(f));

const map = curry((f, array) => array.map(f));

// custom fns
const hasSpaces = match(/\s+/g); // (str) => str.match(/\s+/g)

const findSpaces = filter(hasSpaces); // (xs) => xs.filter((x) => x.match(/\s+/g))

const noVowels = replace(/[aeiouy]/ig); // (replacement, x) => x.replace(/[aeiouy]/ig, replacement)

const censored = noVowels("*"); // (x) => x.replace(/[aeiouy]/ig, "*")

console.log(censored("Tiger-Upper-Cut"));
