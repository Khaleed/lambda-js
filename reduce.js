"use strict";

/* Convert Coffee.txt into the below data structure
 {
 Mohamed: [{product: "Peruvian Coffee", price: 100, quantity: 5}],
 Ali : [{product: "Brazilian Coffee", price: 200, quantity: 10}],
 Abdul: [{product: "Kenyan Coffee", price: 300, quantity: 3}],
 Ralph: [{product: "Ethiopian Coffee", price: 400, quantity: 5}],
 Andy: [{product: "Costa Rican Coffee", price: 600, quantity: 10}],
 Diego: [{product:"Mexican Coffee", price: 300, quantity: 6}]
 }
 */

const fs = require('fs');

const result = fs.readFileSync("coffee.txt", "utf-8");
result.split("\n");

fs.readFile("coffee.txt", "utf-8", (err, contents) => {
    console.log(contents.trim()
                .split("\n")
                .map(order => order.split("/t"))
                .reduce((totalOrders, order) => {
                    totalOrders[order[0]] = [];
                    return totalOrders;
                }, {})
               );
            // .map( c => c.split("/t"))
            // .reduce((orders, c) => {
            // assign each name to empty order list
            // orders[c[0]] = orders[c[0]] || [];
            // orders[c[0]].push({
                // name: c[1],
                // coffee: c[2],
                // price: c[3],
                // quantity: c[4]
            // });
            // return orders;
        // }, {});
});

