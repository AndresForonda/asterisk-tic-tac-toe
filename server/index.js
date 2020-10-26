// Import config module
const config = require("./config/index.js");

/**
 * Function to start the server application
 */
const initServer = async () => {
  try {
    // Get the ari client instance
    const ari = await config.ari.connect;
    // Register the asterisk StasisStart event to detect a new incoming call
    ari.on("StasisStart", async (event, incoming) => {
      // Register the on press key event
      incoming.on("ChannelDtmfReceived", (e, channel) => {
        // Get the pressed key value from the channel event
        const digit = e.digit;
        console.log(digit);
      });
    });

    // Start the tic-tac-toe webSocket in asterisk
    ari.start("tic-tac-toe");
  } catch (error) {
    console.log(error);
  }
};

initServer();
