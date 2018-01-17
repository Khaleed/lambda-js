// Example of Tail Call Optimisation
const factorial = (n, acc = 1) => (n < 2 ? acc : factorial(n - 1, n * acc));

console.log(factorial(1000)); // Infinity

// simple recursion - countdown from 100 to 1
const countDown = x => {
    if (x === 0) {
        return;
    }
    console.log(x);
    countDown(x - 1);
};

countDown(100);
