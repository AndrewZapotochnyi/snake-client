// const { connect } = require('./client');

// console.log('Connecting ...');
// let connection = connect;

const setupInput = function(connection) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  process.stdin.on('data', handleUserInput);
  
  return stdin;
}

const handleUserInput = function (key) {
  if (key === '\u0003') {
    console.log('im quitting');
    process.exit();
  };
};

//setupInput(connection);

module.exports = {setupInput};