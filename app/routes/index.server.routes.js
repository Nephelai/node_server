module.exports = function (app) {
    var index = require('../controllers/index.server.controller');
    app.get('/', index.render);
    app.get('/blog', function (req, res) {
        var ip = req.headers['x-forwarded-for'] ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress ||
            req.connection.socket.remoteAddress;

        if (ip.length < 15) {
            ip = ip;
        }
        else {
            var nyIP = ip.slice(7);
            ip = nyIP;
        }

        console.log(ip);
        res.render('../views/index.html');
    });
};