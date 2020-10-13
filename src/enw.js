const ansoddeiriau = require('../assets/ansoddeiriau.json');
const enwau = require('../assets/enwau.json');

const generadu = () => {
  ansoddair = ansoddeiriau[Math.floor(Math.random() * ansoddeiriau.length)];
  enw = enwau[Math.floor(Math.random() * enwau.length)];

  return [`${enw.shortname} ${ansoddair.cy}`, `${ansoddair.en} ${enw.shortname}`];
}

module.exports = {
  generadu
}