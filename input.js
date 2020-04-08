// const { connect } = require('./client');

// console.log('Connecting ...');
// let connection = connect;

// Stores the active TCP connection object.
let connection;

const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  process.stdin.on('data', handleUserInput);
  connection = conn;
  return stdin;
}

//setupInput();




const handleUserInput = function (key) {
  if (key === '\u0003') {
    console.log('im quitting');
    process.exit();
  };

  if (key === 'w') {
    console.log('up');
    connection.write(`Move: up`)
  };

  if (key === 'a') {
    console.log('left');
    connection.write(`Move: left`)
  };

  if (key === 's') {
    console.log('down');
    connection.write(`Move: down`)
  };

  if (key === 'd') {
    console.log('right');
    connection.write(`Move: right`)
  };

};

//setupInput(connection);

module.exports = {setupInput};