module.exports = function(application){
	application.get('/inicio', function(req, res){
		res.render('inicio');
	});
}