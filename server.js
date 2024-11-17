const http = require('http');
Const port = 3000;

const server = http.createserver((req, res => {
res.StatusCode = 200;
res.setHeader('Content-type' , 'tet/plain');
res.end('Hola Mundo');
});

server.listen (port, () =>{
console.log('Server running on port: ${port}');
});
