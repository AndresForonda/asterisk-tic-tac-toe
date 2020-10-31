// Validar La existencia de dos usuarios en el canal
const io = require('./socket');
const store = require('./store');

module.exports.getChannelCount = async (ari) => {
  const channels = await ari.channels.list();
  return channels.length === 2;
};

let count = 0;

// On stasis start init this function
module.exports.stasisStart = (event, channel) => {
  count += 1;
  // Validate two players in the game
  if (count === 2) {
    io.emit("start"); // Emit the start event
    store.onGame = true; // Init the game
  }
  // Register the event when someone press a key
  channel.on("ChannelDtmfReceived", async (e, channel) => {
    if (store.onGame) { // if the game is running
      const { digit } = e; // get the pressed digit from the event
      const { number } = channel.caller; // Get the user number that pressed a key
      if (store.added.includes(digit)) io.emit("alreadyAdded", digit); // validate that the number has not been pressed
      else if (number === store.turn) { // validate if the event comes from the user who has the turn
        store.added.push(digit); // Add the digit to the store.added array, used to validate that only one digit of some value is in the board
        io.emit("movement", { digit, number }); // Emit the movement event with the number and the digit
        store.turn = store.turn === "5000" ? "5001" : "5000"; // Set the current turn
      }
    }
  });
};

module.exports.stasisEnd = () => {
  if (count) count -= 1;
  console.log(count);
};
