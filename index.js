// run `node index.js` in the terminal

const fs = require('fs');
console.log(fs);
fs.writeFile('./index.json', `{"name": "zs"}`, () => {});
