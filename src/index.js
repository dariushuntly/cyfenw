#!/usr/bin/env node

const enw = require('./enw');
const cyfrinair = require('./cyfrinair');

const config = {
  'pwd': false,
  'num': 10,
  'lang': 'cy'
}

for(let arg of process.argv) {
  if(arg.indexOf('--') == 0) {
    const split = arg.replace('--', '').split('=');
    config[split[0]] = split[1];
  }
}

const res = [];

let defnyddiwr;

for(let i = 0; i<config.num; i++) {
  do {
    defnyddiwr = enw.generadu();
  } while(res.indexOf(defnyddiwr) >= 0)

  res.push(defnyddiwr)
}

for(const defnyddiwr of res) {
  let tpwd = cyfrinair.generadu();
  if(config.pwd) {
    tpwd = config.pwd;
  }

  console.log(`${config.lang=='cy'?defnyddiwr[0]:defnyddiwr[1]}, ${tpwd}`);
}