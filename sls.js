
const createServer = require('./index');
const app = createServer();
app.binaryTypes = ['*/*']
module.exports = app;
