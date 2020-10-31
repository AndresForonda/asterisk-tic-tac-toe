// Import config module
const config = require("./config");
const app = require("./app/index");

/**
 * Function to start the server application
 */
const initServer = async () => {
  try {
    // Get the ari client instance
    const ari = await config.ari.connect;
    // Register the asterisk StasisStart event to detect a new incoming call
    ari.on("StasisStart", app.stasisStart);

    // Register the asterisk StasisEnd event
    ari.on("StasisEnd", app.stasisEnd);

    // Start the tic-tac-toe webSocket in asterisk
    ari.start("tic-tac-toe");
  } catch (error) {
    console.log(error);
  }
};

initServer();
