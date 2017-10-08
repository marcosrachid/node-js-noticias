module.exports.formulario_inclusao_noticia = function(application, req, res) {
	res.render("admin/form_add_noticia", {validacao: {}, noticia: {}});
}

module.exports.noticia_salvar = function(application, req, res) {
	var noticia = req.body;

	req.assert('titulo', 'Título é obrigatório.').notEmpty();
	req.assert('resumo', 'Resumo é obrigatório.').notEmpty();
	req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres.').len(10, 100);
	req.assert('autor', 'Autor é obrigatório.').notEmpty();
	req.assert('data_noticia', 'Data é obrigatório.').notEmpty().isDate;
	req.assert('noticia', 'Notícia é obrigatório.').notEmpty();

	var erros = req.validationErrors();

	if (erros) {
		res.render("admin/form_add_noticia", {validacao: erros, noticia: noticia});
		return;
	}

	var connection = application.config.dbConnection();
	var noticiasDAO = new application.app.model.dao.NoticiasDAO(connection);

	noticiasDAO.salvarNoticia(noticia, function(erro, result){
		res.redirect('/noticias');
	})
}