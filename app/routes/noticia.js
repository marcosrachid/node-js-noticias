module.exports = function(application){

	application.get('/noticia', function(req, res){

		var connection = application.config.dbConnection();
		var noticiasDAO = new application.app.dao.NoticiasDAO(connection);

		noticiasDAO.getNoticia(function(erro, result){
			res.render("noticias/noticia", {noticia: result});
		});
		
	});

}