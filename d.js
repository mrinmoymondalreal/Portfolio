import fs from 'fs';
const files = fs.readdirSync('./static');
let list = [];
files.forEach((file, i) => {
  list.push(file);

});
console.log(list);

