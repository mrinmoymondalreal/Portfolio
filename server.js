import http from 'http';

http.createServer((req, res)=>{
	if(req.url == '/'){
		console.log(res);
	}
}).listen(3000);
