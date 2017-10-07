module.exports = function(application){
	application.get('/formulario_inclusao_noticia', function(req, res){
		res.render("admin/form_add_noticia")
	});

	application.post('/noticias/salvar', function(req, res){
		var noticia = req.body;
		var connection = application.config.dbConnection();
		var noticiasDAO = new application.app.dao.NoticiasDAO(connection);

		noticiasDAO.salvarNoticia(noticia, function(erro, result){
			res.redirect('/noticias');
		})

	});
}