
const io = require("socket.io")(3300);
const store = require('./store');

io.on("connection", (socket) => {
  // register some events
  socket.on("playAgain", () => { // Play again event to clear the store.added array
    store.added = [];
  });
  socket.on("setTurn", (turn) => {
    // Event to store the current turn
    store.turn = turn;
  });
})

module.exports.emit = (message, data) => io.emit(message, data);
// module.exports.io = io;