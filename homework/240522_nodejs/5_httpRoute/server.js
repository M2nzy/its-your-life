const http = require('http');

const index = require('./index.js');
const contact = require('./contact.js');
const home = require('./home.js');

const server = http.createServer((req, res) => {

    const { url, method } = req;
    console.log(req);
    if (url === '/' || url === '/index') {
        index(req, res);
    }
    else if (url === '/contact' && method == 'GET') {
        contact(req, res);
    }
    else if (url === '/home' && method == 'GET') {
        home(req, res);
    }
    else {
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Error!</h1>');
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('3000번 포트 실행중')
});
