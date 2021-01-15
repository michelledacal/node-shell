
const pwd = require('./pwd')
const ls = require('./ls')
const cat = require('./cat');

console.log(ls);
process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  if(cmd === 'pwd') {
    pwd();
  } else if(cmd === 'ls') {
    ls();
  } else if (cmd.slice(0, 3) === 'cat') {
    cat(cmd.slice(4))
  }
  else {
    process.stdout.write('You typed: ' + cmd);
  }
});
