// Example of Tail Call Optimisation
const factorial_inner = (n, acc) => {
    // fail fast
    if (n < 0) {
        return "undefined";
    // base case
    } else if (n === 0) {
        return acc;
    // recursive calls, reduce calls to base case
    } else {
        return factorial_inner(n - 1, acc * n);
    }
};

// console.log(factorial_inner(2, 1));
// console.log(factorial_inner(3, 1));
// console.log(factorial_inner(4, 1));
// console.log(factorial_inner(5, 1));

// simple recursion - countdown from 100 to 1
const countDown = x => {
    if (x === 0) {
        return;
    }
    console.log(x);
    countDown(x - 1);
};

countDown(100);
