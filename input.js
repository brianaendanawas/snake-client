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
  } else if (key === 'f') {
    connection.write("Say: This is fun!");
  } else if (key === 'm') {
    connection.write("Say: I'm moving!");
  } else if (key === 'n') {
    connection.write("Say: I'm number one!");
  } else if (key === 'j') {
    connection.write("Say: JIMIN JIMIN");
  }
}

standardInput.on("data", handleUserInput);

module.exports = {
  setupInput,
}