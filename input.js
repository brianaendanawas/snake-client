const setupInput = function () {
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
  }
}

standardInput.on("data", handleUserInput);

module.exports = {
  setupInput,
}