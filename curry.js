/* Currying refers to when a function with multiple arguments is transformed into
 a series of functions with single arguments
*/

// Say we have a function that takes multiple arguments
const getLionKingInfo = (name, size, prey) => "Name is " + name + ", size is " + size + " and prey is " + prey;
getLionKingInfo();

// Curried example 1
const curryLionKingInfo =
          name =>
          size =>
          prey => "The name of the lion who became King is " + name + ", the size is " + size + " and their favourite prey is " + prey;

curryLionKingInfo("Simba")("125-kilos")("Gazelle");

// Curried Example 2
const add = (a, b) => {
    // if no args are passed
    if (arguments.length < 1) {
        // just return add
        return add();
        // if one arg is passed return a new function that takes c
        // and that returns c + a
    } else if (arguments.length < 2) {
        return c => a + c;
    } else {
        // if two args are passed
        return a +b;
    }
};

add();
add(1, (4));
add(1, 2);

// Curried Example 3 - As the number of args grow, things get out of control
const sumSixNos =
          n1 =>
          n2 =>
          n3 =>
          n4 =>
          n5 =>
          n6 => n1 + n2 + n3 + n4 + n5 + n6;
sumSixNos(1)(2)(3)(4)(5)(6); // ;=> 21

// Curry Example 4 - Implementing Curry from Scratch
const curry = fx => {
    let arity = fx.length;
    return function f1 () {
        let args = Array.prototype.slice.call(arguments, 0);
        if (args.length >= arity) {
            return fx.apply(null, args);
        } else {
            return function f2() {
                let newArgs = Array.prototype.slice.call(arguments, 0);
                return f1.apply(null, args.concat(newArgs));
            };
        }
    };
};
// Apply curry to multiple args
