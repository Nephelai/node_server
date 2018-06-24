module.exports = function (app) {
    var index = require('../controllers/index.server.controller');
    app.get('/', index.render);
    app.get('/blog', function (req, res) {
       res.render('../views/index.html');
    });
    app.get('/ob', function (req, res) {
        res.render('../views/old_index.html');
    });
};