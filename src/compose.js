"use strict";

// compose :: (y -> z, ..., a -> b) -> (a -> z)
const compose = (...fs) => fs.reduce((f, g) => (...args) => f(g(...args)));

const curry = (fn, ...init) => (...args) => fn.apply(null, init.concat(args));

const avg = (...args) => args.reduce((acc, x) => acc + x, 0) / args.length;

const doAvg = curry(avg, 1, 2, 3);

console.log(doAvg(2));

const toUpperCase = x => x.toUpperCase();

const exclaim = x => x + "!";

const socialRule = compose(exclaim, toUpperCase);

const printSocialRule = socialRule("No feigning surprise");

console.log(printSocialRule);

const socialRuleWithoutCompose = x => exclaim(toUpperCase(x));

const printSocialRuleWithoutCompose = socialRuleWithoutCompose("No well-actually's");

console.log(printSocialRuleWithoutCompose);
