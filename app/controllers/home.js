module.exports.home = function(application, req, res) {
	var connection = application.config.dbConnection();
	var noticiasDao = new application.app.model.dao.NoticiasDAO(connection);

	noticiasDao.get5UltimasNoticias(function(error, result) {
		res.render('home/index', {noticias: result});
	});
}