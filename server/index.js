const config = require("./config/index.js");

const initServer = async () => {
  try {
    const ari = await config.ari.connect;
    ari.on("StasisStart", async () => {});
    ari.start("tic-tac-toe");
  } catch (error) {
    console.log(error);
  }
};

initServer();
