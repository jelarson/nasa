const {getAllLaunches} = require('../../models/launches.model');

function httpGetAllLaunches(req, res) {
    // for (value of launches.values()) {...}
    return res.status(200).json(getAllLaunches());
}

module.exports = {
    httpGetAllLaunches,
}