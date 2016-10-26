var http = require('http'); 

http.createServer(function (request, response) {

    console.log('request starting...');

    response.writeHead(200, { 'Content-Type': 'text/html' });

    var html = '<!DOCTYPE html><html><head><title>My Title</title></head><body>';
    html += 'Some more static content';
    html += 'Some more static content';
    html += 'Some more static content';
    html += 'Some dynamic content';
    html += '</body></html>';

    response.end(html, 'utf-8');

}).listen(38316);