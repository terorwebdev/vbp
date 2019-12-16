const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

function onConnection(socket) {
    console.log("Socket.id : " + socket.id);

    socket.on('drawing', (data) => {
        socket.broadcast.emit('drawing', data);
        console.log(data);
    });

    socket.on('auth', (data) => {
        socket.broadcast.emit('auth', data);
        console.log(data);
    });

    socket.on('image', (data) => {
        socket.broadcast.emit('image', data);
        console.log(data);
    });

    socket.on('disconnect', function() {
        console.log(socket.id + " disconnected");
    });
}

io.on('connection', onConnection);

http.listen(port, () => {
    console.log('listening on port ' + port)
});