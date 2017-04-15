/*
 Partial takes a function f and fewer args than normal arguments to f,
 and returns a new function that takes variable number of additional args.
 When called, the return function calls f with args and additional args.
 */

const partial = (f, ...init) => (...rest) => f(...init, ...rest);

const add = (a, b, c) => a + b + c;

const addTwo = partial(add, 1, 2);

const addThree = addTwo(3);

console.log(addThree); //=> 6

const multiply = (w, x, y, z) => w * x * y * z;

const multiplyTwo = partial(multiply, 2, 4);

const multiplyThree = multiplyTwo(3, 1);

console.log(multiplyThree); //=> 24
