const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

function onConnection(socket) {
    console.log("Socket.id : " + socket.id);
    //console.log("Socket.rooms : ", socket.rooms);
    //console.log("Socket.client : ", socket.client);
    //console.log("Socket.conn : ", socket.conn);

    socket.on('drawing', (data) => {
        //console.log(data);
        socket.broadcast.emit('drawing', data);
    });

    socket.on('disconnect', function() {
        console.log(socket.id + " disconnected");
    });
}

io.on('connection', onConnection);

http.listen(port, () => {
    console.log('listening on port ' + port)
});