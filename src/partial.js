/*
 Partial takes a function and few args than normal and returns a new function that takes the rest of the args.
 */

const partial = (f, ...init) => (...rest) => f(...init, ...rest);
