module.exports = function(application){
	application.get('/formulario_inclusao_noticia', function(req, res){
		res.render("admin/form_add_noticia")
	});

	application.post('/noticias/salvar', function(req, res){
		var noticia = req.body;

		req.assert('titulo', 'Título é obrigatório.').notEmpty();
		req.assert('resumo', 'Resumo é obrigatório.').notEmpty();
		req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres.').len(10, 100);
		req.assert('autor', 'Autor é obrigatório.').notEmpty();
		req.assert('data_noticia', 'Data é obrigatório.').notEmpty().isDate;
		req.assert('noticia', 'Notícia é obrigatório.').notEmpty();

		var erros = req.validationErrors();

		if (erros) {
			res.render("admin/form_add_noticia")
			return;
		}

		var connection = application.config.dbConnection();
		var noticiasDAO = new application.app.dao.NoticiasDAO(connection);

		noticiasDAO.salvarNoticia(noticia, function(erro, result){
			res.redirect('/noticias');
		})

	});
}