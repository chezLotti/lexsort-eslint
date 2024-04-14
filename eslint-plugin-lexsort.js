const lexsortRule = require("./enforce-lexsort");
const plugin = { rules: { "enforce-lexsort": lexsortRule } };
module.exports = plugin;