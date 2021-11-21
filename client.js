const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log('Message from client: ', data)
    console.log('Successfully connected to game server')
  }); 

  conn.on('connect', () => {
    conn.write('Name: KTH');
    //conn.write('Move: up');
  });

  return conn;
};

module.exports = {
  connect,
};