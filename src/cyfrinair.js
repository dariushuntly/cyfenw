const geiriadur = require('../assets/geiriadur.json');
const generadu = (wordLength = 3, includeCapitals = true, includeNumbers = true) => {
  let res;
  const geiriau = [];
  let capsDone = false;
  for(let i = 0; i<wordLength; i++) {
    let gair;
    do {
      gair = geiriadur[Math.floor(Math.random() * geiriadur.length)];
    } while(geiriau.indexOf(gair)>=0);

    if(Math.random() >= 0.5&&!capsDone) {
      capsDone = true;
      gair = gair.toUpperCase();
    }

    geiriau.push(gair);
  }

  if(includeNumbers) {
    geiriau.push(Math.floor(Math.random() * 100) + 1 );
  }

  return geiriau.join('');
}

module.exports = {
  generadu
}