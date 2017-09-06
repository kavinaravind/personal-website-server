var configValues = require('./config');

module.exports = {
    getCredentials: function() {
        return JSON.stringify(configValues);
    }
}