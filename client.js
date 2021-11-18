const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '192.168.0.138',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log('Message from client: ', data)
    console.log('Successfully connected to game server')
  });

  conn.on('connect', () => {
    conn.write('Name: KTH');
    conn.write('Move: up');
    //setTimeout(function(){ conn.write("Move: up"); }, 50);
    //setTimeout(function(){ conn.write("Move: down"); }, 100);
    //setTimeout(function(){ conn.write("Move: left"); }, 150);
    //setTimeout(function(){ conn.write("Move: right"); }, 200);
    //setInterval(function(){ conn.write("Move: up"); }, 50);
  });

  return conn;
};

module.exports = {
  connect,
};