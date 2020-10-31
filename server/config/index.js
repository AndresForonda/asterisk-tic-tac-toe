// This import/export way allows to import the config module and use its
// modules in dot notation ie: config.ari.someMethod

const ari = require("./ari.js"); // Import the ari module

module.exports.ari = ari; // Export the ari module path
