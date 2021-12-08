const net = require("net");
const { IP, PORT } = require("./constants");

// establishes connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // receive messages from the server 
  conn.on('data', (data) => {
    console.log('Message from client: ', data);
    console.log('Successfully connected to game server');
  }); 

  // send name to game server and move up once
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: KTH');
    setTimeout(function(){ conn.write('Move: up'); }, 50);
  });

  return conn;
};

module.exports = {
  connect,
};