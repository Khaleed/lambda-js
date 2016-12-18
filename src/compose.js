"use strict";

const R = require("ramda");

const reduce = R.reduce;

const curry = (f, ...init) => (...args) => f.apply(null, [...init, ...args]);

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

const args = ["Jumpkick", "Roundhouse", "Uppercut"];

const printLast = last(args);

// console.log(printLast); //=> "Uppercut";

// Associative Law applies to Compose
const lastUpper = compose(toUpperCase, head, reverse);

const printLastUpper = lastUpper(args);//=> "UPPERCUT"

// console.log(printLastUpper);

const loudLastUpper = compose(exclaim, toUpperCase, head, reverse);

const printLoudLastUpper = loudLastUpper(args);

// console.log(printLoudLastUpper);

