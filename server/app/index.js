// Validar La existencia de dos usuarios en el canal
module.exports.getChannelCount = async (ari) => {
  const channels = await ari.channels.list();
  return channels.length === 2;
};

let count = 0;

module.exports.stasisStart = (event, channel) => {
  count += 1;
  // Register the on press key event
  channel.on("ChannelDtmfReceived", async (e, channel) => {
    console.log("count", count);
  });
};

module.exports.stasisEnd = () => {
  count -= 1;
  console.log(count);
};
