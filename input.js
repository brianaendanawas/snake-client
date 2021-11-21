let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
}; 

const standardInput = setupInput();

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.stdout.write('Exit program');
    process.exit();
  } else if (key === 'w') {
    connection.write("Move: up");
  } else if (key === 'a') {
    connection.write("Move: left");
  } else if (key === 's') {
    connection.write("Move: down");
  } else if (key === 'd') {
    connection.write("Move: right");
  }
}

standardInput.on("data", handleUserInput);

module.exports = {
  setupInput,
}