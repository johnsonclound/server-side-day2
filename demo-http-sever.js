const http = require('http');
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
	
	
	if (req.url === '/about') {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		res.end('About Page\n');
	} else if (req.url == '/contact') {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		res.end('Contact Page\n');
	} else if(){
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		const data ={
			message:'Hello from API',
			timestamp: new Date().toISOString()
		};
		res.end(JSON.stringify(data));
	}else {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
			res.end('Hello, World!\n');
	}

});

server.listen(port, hostname,() => {
	console.log(`Server running at http://${hostname}:${port}/`);
});