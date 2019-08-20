module.exports.jogo = function(application, req, res){
	
	if(req.session.autorizado !== true){
		res.send('Usuário precisa fazer login');
		return;
	}

	var usuario = req.session.usuario;
	//var casa = req.session.casa;

	var connection = application.config.dbConnection;
	var JogoDAO = new application.app.models.JogoDAO(connection);

	//var casa = req.session.casa;
	console.log(usuario)
	JogoDAO.iniciaJogo(usuario);
	//JogoDAO.iniciaJogo(res, usuario, casa);
}

module.exports.sair = function(application, req, res){
	if(req.session.autorizado){
		req.session.destroy(function(err){
			res.render('index', {validacao : {}})
		})
	}
}