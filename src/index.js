#!/usr/bin/env node

const enw = require('./enw');
const cyfrinair = require('./cyfrinair');

const res = [];

let defnyddiwr;

for(let i = 0; i<10; i++) {
  do {
    defnyddiwr = enw.generadu();
  } while(res.indexOf(defnyddiwr) >= 0)

  res.push(defnyddiwr)
}

for(const defnyddiwr of res) {
  console.log(`${defnyddiwr[0]}, ${defnyddiwr[1]}, ${cyfrinair.generadu()}`);
}