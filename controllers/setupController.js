config = require('../config'),

module.exports = function(app) {
    app.get('/api/googleConfig', function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
        res.send(config.getCredentials());
    });
}