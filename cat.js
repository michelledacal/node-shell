const fs = require('fs');
const path = require('path');

module.exports = function (file) {
  fs.readFile(`${process.cwd()}/${file}`, (err, data) => {
  if (err) {
    console.log(err)
  } else {
    process.stdout.write(data)
  }
  process.stdout.write('\nprompt > ')
})}