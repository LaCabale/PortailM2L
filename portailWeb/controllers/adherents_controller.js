var AdherentDAO = require('../DAO/adherentDAO');
var adherentDAO = new AdherentDAO();

exports.getListAdherents = function(req,res){
    adherentDAO.getListAdherents(
        function(lesAdherents){
            res.send({lesAdherents: lesAdherents})
        }
    );
};