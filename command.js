window.availableCommands = window.availableCommands || {};

Object.assign(window.availableCommands, {
    help: () => {
        const output = `
            Available commands:
            - help: Displays this message
            - whoami: Shows who you are
        `;
        const outputElement = document.querySelector(".output");
        const p = document.createElement("p");
        p.textContent = output;
        outputElement.appendChild(p);
    },
    whoami: () => {
        const output = "You are a user of this terminal.";
        const outputElement = document.querySelector(".output");
        const p = document.createElement("p");
        p.textContent = output;
        outputElement.appendChild(p);
    },
});
