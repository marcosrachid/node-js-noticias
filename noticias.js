var http = require('http');

var server = http.createServer(function(req, res) {

	var categoria = req.url;
	console.log(categoria);

	switch (categoria) {
		case '/tecnologia':
		res.end("<html><body>Notícias de tecnologia</body></html>");
		break;
		case '/moda'	:
		res.end("<html><body>Notícias de moda</body></html>");
		break;
		case '/beleza'	:
		res.end("<html><body>Notícias de beleza</body></html>");
		break;
		default:
		res.end("<html><body>Portal de notícias</body></html>");	
	}
	

}).listen(3000);