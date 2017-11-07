/*
 Partial takes a function f and fewer args than normal arguments to f,
 and returns a new function that takes variable number of additional args.
 When called, the return function calls f with args and additional args.
 */

const partial = (f, ...init) => (...rest) => f(...init, ...rest);

const add = (a, b, c) => a + b + c;

const addTwo = partial(add, 1, 2);

const addThree = addTwo(3);

// console.log(addThree); //=> 6

const multiply = (w, x, y, z) => w * x * y * z;

const multiplyTwo = partial(multiply, 2, 4);

const multiplyThree = multiplyTwo(3, 1);

// console.log(multiplyThree); //=> 24

/*
Rudimentary Currying Example
*/

// catalogue of items
const items = [{ name: "iPhoneX-64GB", price: 999 },
               { name: "iPhoneX-256GB", price: 1499 }];

// helpers
const map = (fn) => (array) => array.map(fn);
const pluck = (key) => (object) => object[key]; // lodash fn
const loopThroughItems = map(pluck("price"));
const multiplier = (x) => (y) => x * y;

const discount = multiplier(0.95); // (0.95) => (y) => 0.95 * y;
const tax = multiplier(1.20); // (1.20) => (y) => 1.20 * y;

const finalPrice = items.map(pluck('price')) // [999, 1499];
                        .map(discount) // [949.05, 1424.05];
                        .map(tax); // [1138.86, 1708.86];

console.log(`final prices for the iPhoneX are £ ${ finalPrice }`);
