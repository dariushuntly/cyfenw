#!/usr/bin/env node

const ansoddeiriau = require('../assets/ansoddeiriau.json');
const enwau = require('../assets/enwau.json');

const res = [];

let enw,
    ansoddair,
    defnyddiwr;

for(let i = 0; i<10; i++) {
  do {
    ansoddair = ansoddeiriau[Math.floor(Math.random() * ansoddeiriau.length)];
    enw = enwau[Math.floor(Math.random() * enwau.length)];

    defnyddiwr = `${enw.shortname} ${ansoddair.cy}`;
  } while(res.indexOf(defnyddiwr) >= 0)

  res.push(defnyddiwr)
}

for(const defnyddiwr of res) {
  console.log(defnyddiwr);
}