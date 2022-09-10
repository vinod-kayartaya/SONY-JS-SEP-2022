const { people } = require('../../day1/data');
function getCustomersHandler(req, resp) {
    resp.json(people); // response header --> application/json and resp.end() 
}

module.exports = { getCustomersHandler };
