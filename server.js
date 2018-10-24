const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

var pythonPort = 5000;
var serverAddress = 'localhost';

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log("New user connected");

    socket.on('overspeeding', (response) => {
    	console.log('overspeeding detected');
    	console.log(response);
    	// socket.emit('action_on_overspeed');

    });

    socket.on('disconnect', () => {
        console.log("User disconnected");
    });

});



server.listen(port, () => {
    console.log(`Server is up on ${port}`);
});