var AdherentDAO = require('../DAO/adherentDAO');
var adherentDAO = new AdherentDAO();

exports.getListAdherents = function(req,res){
    console.log('on est dedans');
    adherentDAO.getListAdherents(
        function(lesAdherents){
            console.log('ca a marché');
            res.send({lesAdherents: lesAdherents})
        }
    );
};