function UsuariosDAO(connection){
	this._connection = connection();
}

UsuariosDAO.prototype.inserirUsuario = function(usuario){
	this._connection.open(function(err, mongoclient){
		mongoclient.collection("usuarios", function(err, collection){
			console.log(usuario);
			collection.insert(usuario);

		mongoclient.close();
		});
	});

}

module.exports = function(){
	return UsuariosDAO;
}