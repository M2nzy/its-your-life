const http = require('http');

const server = http.createServer((req, res) => {

    const {url, method} = req;
    console.log(req);
    if(method == 'GET'){
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello Node');
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('3000번 포트 실행중')
});
