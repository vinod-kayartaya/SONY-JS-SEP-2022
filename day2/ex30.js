const express = require('express');
const process = require('process');
const { getCustomersHandler } = require('./request-handlers/customer-handlers');
const app = express(); // http server
const port = process.env.SERVER_PORT || 1234;

// define request handler for given paths:
// http://localhost:1234/api/customers
app.get('/api/customers', getCustomersHandler);

app.listen(port, () => console.log('Server start at port %d', port));
