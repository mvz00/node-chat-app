const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(publicPath));

var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'Michael',
        text: 'Hey whats going on',
        createdAt: 123445
    });

    socket.on('createMessage', (message) =>  {
        console.log('createMessage', message);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });

});

server.listen(port, () => {
    console.log(`server listening on port ${port}`);
});

