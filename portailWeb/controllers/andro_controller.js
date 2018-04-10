const AndroidDAO = require('../DAO/AndroidDAO');
const androidDAO = new AndroidDAO();


exports.index = function (req,res,next) {
    androidDAO.getAllDeplacement(function(lesDeplacements) {
        let test =JSON.stringify(lesDeplacements);
        res.send(test);
    });

}
