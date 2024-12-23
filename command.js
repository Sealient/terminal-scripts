// Add a custom command to the terminal
const commands = {
    greet: () => {
        return "Hello from the installed command!";
    }
};

// When the script is loaded, add it to the global `commands` object of the terminal
window.commands = { ...window.commands, ...commands };
