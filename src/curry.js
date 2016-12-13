/* Currying refers to when a function with multiple arguments is transformed into a series of functions with single arguments
*/
// Say we have a function that takes multiple arguments
const getLionKingInfo = (name, size, prey) => "Name is " + name + ", size is " + size + " and prey is " + prey;
getLionKingInfo("Simba", "190-kilos", "Gazelle");

// Curried example 1
const curryLionKingInfo =
          name =>
              size =>
                  prey => "The lion who became King is " + name + ", the size is " + size + " and their favourite prey is " + prey;

curryLionKingInfo("Simba")("190-kilos")("Gazelle");


// Curried Example 2 - As the number of args grow, things get out of control
const sumSixNos =
          n1 =>
          n2 =>
          n3 =>
          n4 =>
          n5 =>
          n6 => n1 + n2 + n3 + n4 + n5 + n6;
sumSixNos(1)(2)(3)(4)(5)(6); // ;=> 21

// Curry Example 4 - Using Ramda
const _ = require("ramda");

const addThreeNums = (a, b, c) => a + b + c;
const curriedAddThreeNums = _.curry(addThreeNums);
const f = curriedAddThreeNums(1, 2);
const g = f(3);
// console.log(g);

// Curry Example 3 - Implementation
const curry = fn => {
    const arity = fn.length;
    const curried = (f, init) =>
              (...args) => {
                  // concat initial and current args
                  const acc = [...init, ...args];
                  return acc.length >= arity ? f(...acc) : curried(f, acc);
              };
    return curried(fn, []);
};

const addTwoNums = (a, b) => a + b;

const curriedAddTwoNums = curry(addTwoNums);

const fn = curriedAddTwoNums(1);

console.log(fn); //=> [Function]

const gx = fn(2);

console.log(gx); //=> 3

// Partial Example 1
const partial = (f, ...args) => {
    return f.bind(null, ...args);
};

// Partial Example 2
const partialWithoutBind = (f, ...init) => (...args) => f(...init, ...args);
