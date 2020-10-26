const client = require("ari-client"); // Import the node-ari-client library

// Get the login information from env variables or use default
const ariUrl = process.env.ARI_URL || "https://localhost:8088";
const userName = process.env.ARI_USER_NAME || "asterisk";
const password = process.env.ARI_PASSWORD || "asterisk";

// export the ari connect method
module.exports.connect = client.connect(ariUrl, userName, password);
