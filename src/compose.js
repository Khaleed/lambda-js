"use strict";

// Example adapted from Mostly Adequate book
const compose = (f, g) => x => f(g(x));

const toUpperCase = x => x.toUpperCase();

const exclaim = x => x + "!";

const socialRule = compose(exclaim, toUpperCase);

const printSocialRule = socialRule("No feigning surprise");

console.log(printSocialRule);

// Without Compose
const socialRuleWithoutCompose = x => exclaim(toUpperCase(x));

console.log(socialRuleWithoutCompose("No Well-Actually's"));
