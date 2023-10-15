// create web server
// 1. include http module
var http = require('http');
// 2. create server
var server = http.createServer(function(req, res) {
    // 3. set header
    res.setHeader('Content-Type', 'text/html');
    // 4. set response
    res.write('<html><body><h1>Comments</h1></body></html>');
    // 5. end response
    res.end();
});
// 6. listen on port
server.listen(3000);
console.log('Server running at http://localhost:3000');
