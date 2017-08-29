'use strict';
var express = require('../../../20.Transversal/node_modules/express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require('../../../20.Transversal/node_modules/socket.io').listen(server);
var users = [];
var connections = [];

server.listen(process.env.PORT || 3000);
app.get('/', function(req, res) {
    var url = (__dirname + '/10.Presentation/PartialView/Chat/Chat.html')
        .replace('30.Services/30.1.Controladores/Server/', '');
    res.sendfile(url);
});
console.log('server running');

io.sockets.on('connection', function(socket) {
    connections.push(socket);
    console.log('Connected: %s sockets connected', connections.length);

    connections.splice(connections.indexOf(socket), 1);
    console.log('Disconnected: %s sockets connected', connections.length);
});