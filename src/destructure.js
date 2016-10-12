/* Destructuring in JS will aid writing in functional JS
 * Destructuring is useful in a function that takes an object
 * The idea is to assign the properties of an object into local variables
 **/

//  Example 1 - Call a function that takes an optional object without destructuring
const getToKnowAstranger1 = args => {
    console.log("Hi, I'm " + args.name + " and I'm from " + args.location);
};
getToKnowAstranger1({ name: "Max", location: "Montreal" }); // ;=> Hi, my name is Max and I'm from Montreal

// Example 2 - Assign properties of the args object to variables for readability
const getToKnowAstranger2 = args => {
    const name = args.name;
    const location = args.location;
    console.log("Hi, I'm " + name + " and I'm from " + location);
};
getToKnowAstranger2({ name: "Max", location: "Montreal" }); // ;=> Hi, my name is Max and I'm from Montreal

// Example 3 - Call a function using an optional object with destructuring
const getToKnowAstranger3 = args => {
    const { name, location } = args;
    console.log("Hi, I'm " + name + " and I'm from " + location);
};
getToKnowAstranger3({ name: "Max", location: "Montreal" }); // ;=> Hi, my name is Max and I'm from Montreal

// Example 4 - Call a function using an optional object and property without destructuring
getToKnowAstranger4 = args => {
    const name = args.name || "a Recurser";
    const location = args.location;
    console.log("Hi, I'm " + name + " and I'm from " + location);
};
getToKnowAstranger4({ location: "Montreal" }); // ;=> Hi, my name is a Recurser and I'm from Montreal

// Example 5 - Call a function using an optional object and property with destructuring
getToKnowAstranger5 = args => {
    const { name = "a Recurser", location } = args;
    console.log("Hi, I'm " + name + " and I'm from " + location);
};
getToKnowAstranger5({ location: "Montreal" }); // ;=> Hi, my name is a Recurser and I'm from Montreal

// Example 6 - Call a function with a destructured options object inside the function's signature
const getToKnowAstranger6 = ({ name = "a Recurser", location }) => {
    console.log("Hi, I'm " + name + " and I'm from " + location);
};
getToKnowAstranger6({ location: "Montreal"});
