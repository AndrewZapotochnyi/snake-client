const net = require('net');

const name = 'And';
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.148',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write(`Name: ${name}`);

    /* 
    for (let i = 50; i < 5000; i = i+100) {
      setTimeout(function(){conn.write(`Move: left`)}, i);
      setTimeout(function(){conn.write(`Move: up`)}, i);
    }*/

  })


  conn.on('data', (data) => {
    console.log("Server Wrote:");
    console.log(data);
  })

  return conn;
}

module.exports = { connect };