"use strict";

let fs = require('fs');

var result = fs.readFileSync("coffee.txt", "utf-8");

console.log(result.trim()
      .split("/n")
            .map(c => c.split("\t")));
