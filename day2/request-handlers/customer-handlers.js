const { people } = require('../../day1/data');
function getCustomersHandler(req, resp) {
    // bad idea; use a middleware like 'cors'
    resp.header('Access-Control-Allow-Origin', '*');

    resp.json(people); // response header --> application/json and resp.end()
}

module.exports = { getCustomersHandler };
