// commands.js
function showHelp() {
  alert("Available commands:\nhelp - Displays this message\nwhoami - Shows who you are\nclear - Clears the terminal");
}

function showWhoami() {
  alert("You are the master of this terminal.");
}

function clearTerminal() {
  const terminalOutput = document.querySelector(".output");
  terminalOutput.innerHTML = "";
}

// Registering the commands to be used in the terminal
const availableCommands = {
  help: showHelp,
  whoami: showWhoami,
  clear: clearTerminal
};

// Making the availableCommands object globally accessible
window.availableCommands = availableCommands;
