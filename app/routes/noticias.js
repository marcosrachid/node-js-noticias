//var dbConnection = require('../../config/dbConnection');

module.exports = function(application){

	application.get('/noticias', function(req, res){

		var connection = application.config.dbConnection();
		var noticiasDAO = new application.app.dao.NoticiasDAO(connection);

		noticiasDAO.getNoticias(function(erro, result){
			res.render("noticias/noticias", {noticias: result});
		});
		
	});

}