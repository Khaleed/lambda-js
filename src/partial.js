/*
 Partial takes a function and few args than normal and returns a new function that takes the rest of the args.
 */

const partial = (f, ...init) => (...rest) => f(...init, ...rest);

const add = (a, b, c) => a + b + c;

const addTwo = partial(add, a, b);

console.log(addTwo(1, 2)); //=> 3
