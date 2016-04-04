"use strict";

import fs from 'fs';

fs.readFile("coffee.txt", "utf-8", (err, contents) => {
    console.log(contents);
});
