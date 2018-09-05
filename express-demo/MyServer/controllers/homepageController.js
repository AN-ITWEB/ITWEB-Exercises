/* GET home page */
module.exports.index = function (req, res) {
    res.render('index', { title: 'MyServer' });
};

module.exports.users = function (req, res) {
    //res.render('index', { title: 'MyServer' });
    res.send('respond with a resource test');
};