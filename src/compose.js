"use strict";

const R = require("ramda");

const reduce = R.reduce;

const map = R.map;

const split = R.split;

const join = R.join;

const curry = R.curry;

const replace = R.replace;

const toLower = R.toLower;

// const curry = (f, ...init) => (...args) => f.apply(null, [...init, ...args]);

// compose :: (y -> z, ..., a -> b) -> (a -> z)
const compose = (...fs) => fs.reduce((f, g) => (...args) => f(g(...args)));

const avg = (...args) => args.reduce((acc, x) => acc + x, 0) / args.length;

const doAvg = curry(avg, 1, 2, 3);

// console.log(doAvg(2));

const toUpperCase = x => x.toUpperCase();

const exclaim = x => x + "!";

const socialRule = compose(exclaim, toUpperCase);

const printSocialRule = socialRule("No feigning surprise");

// console.log(printSocialRule);//=> "NO FEIGNING SURPRISE!"

const socialRuleWithoutCompose = x => exclaim(toUpperCase(x));

const printSocialRuleWithoutCompose = socialRuleWithoutCompose("No well-actually's");

// console.log(printSocialRuleWithoutCompose);//=> "NO WELL-ACTUALLY'S!"

// // Example where order matters
const head = x => x[0]; // grab first element in array

const reverse = reduce((acc, x) => [x].concat(acc), []); //

const last = compose(head, reverse);

const angry = compose(exclaim, toUpperCase);

const args = ["Jumpkick", "Roundhouse", "Uppercut"];

const printLast = last(args);

// console.log(printLast);//=> "Uppercut";

// Associative Law applies to Compose
const lastUpper = compose(toUpperCase, head, reverse);

const printLastUpper = lastUpper(args);

// console.log(printLastUpper);//=> "UPPERCUT"

const loudLastUpper = compose(angry, last);

const printLoudLastUpper = loudLastUpper(args);

// console.log(printLoudLastUpper); //=> "UPPERCUT!"

/*
 * Point Free - It can be a double-edged sword
 **/

const initials = name => name.split(" ")
                             .map(compose(toUpperCase, head))
                             .join(". ");

// console.log(initials("Sugar Ray Robinson"));

const freeInitials = compose(join(". "), map(compose(toUpperCase, head)), split(" "));

const printFreeInitials = freeInitials("Sugar Ray Robinson");

// console.log(printFreeInitials);//=> S. R. R

/*
 * Debugging Compose
 **/

const latin = compose(map, angry, reverse);

latin(["frog", "eyes"]); //=> error

const rightLatin = compose(map(angry), reverse);

const printRightLatin = rightLatin(["frog", "eyes"]);

// console.log(rightLatin); //=> ["FROG!", "EYES!"]

const trace = curry((tag, x) => {
    console.log(tag, x);
    return x;
});

const dasherize = compose(join("-"), toLower, split(" "), replace(/\s{2,}/ig, " "));

const callDasherize = dasherize("The world is a vampire");

// console.log(callDasherize);
