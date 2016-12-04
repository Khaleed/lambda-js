"use strict";

// compose :: (y -> z, ..., a -> b) -> (a -> z)
const compose = (...args) => args.reduce((f, g) => (...args) => f(g(...args)));

const toUpperCase = x => x.toUpperCase();

const exclaim = x => x + "!";

const socialRule = compose(exclaim, toUpperCase);

const printSocialRule = socialRule("No feigning surprise");

console.log(printSocialRule);

const socialRuleWithoutCompose = x => exclaim(toUpperCase(x));

const printSocialRuleWithoutCompose = socialRuleWithoutCompose("No well-actually's");

console.log(printSocialRuleWithoutCompose);
