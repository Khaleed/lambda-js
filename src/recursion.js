// Example of Tail Call Optimisation
const factorial = (n, acc = 1) => {
    // base case
    if (n < 2) {
        return acc;
    }
    // recursive case
    return factorial(n - 1, n * acc);
};

// simple recursion - countdown from 100 to 1
const countDown = x => {
    if (x === 0) {
        return;
    }
    console.log(x);
    countDown(x - 1);
};

countDown(100);
