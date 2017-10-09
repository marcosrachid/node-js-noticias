module.exports.noticias = function(application, req, res) {
	var connection = application.config.dbConnection();
	var noticiasDAO = new application.app.model.dao.NoticiasDAO(connection);

	noticiasDAO.getNoticias(function(erro, result){
		res.render("noticias/noticias", {noticias: result});
	});
}

module.exports.noticia = function(application, req, res) {
	var connection = application.config.dbConnection();
	var noticiasDAO = new application.app.model.dao.NoticiasDAO(connection);

	var id_noticia = req.query.id_noticia;

	noticiasDAO.getNoticia(id_noticia, function(erro, result){
		res.render("noticias/noticia", {noticia: result});
	});
}