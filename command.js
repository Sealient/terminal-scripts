// Custom command from GitHub (command.js)
const customCommand = {
  'customCommand': async () => {
    try {
      const response = await fetch('https://cdn.jsdelivr.net/gh/Sealient/terminal-scripts@main/customCommand.js');
      const commandScript = await response.text();
      eval(commandScript); // Execute the custom command
      return 'Custom command executed!';
    } catch (error) {
      return 'Failed to load or execute custom command.';
    }
  }
};
