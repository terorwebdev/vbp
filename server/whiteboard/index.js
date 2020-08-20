const express = require('express');
const app = express();
var logs = require('./logs');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
const router = express.Router();

var cors = require('cors');
var imagedata = "";
app.use(express.static(__dirname + '/public'));
app.use(cors());

function onConnection(socket) {
    console.log("Socket.id : " + socket.id);

    //testing
    socket.on('kclient-auth', (data) => {
        if (data.cmd == 'req-auth') {
            console.log("kclient-auth Received", data);
            var res = {
                cmd: 'rep-auth',
                type: 'id',
                data: socket.id
            };
            socket.broadcast.emit('kclient-auth', res);
        }
    });
    //

    socket.on('drawing', (data) => {
        socket.broadcast.emit('drawing', data);
        logs.write(JSON.stringify(data));
    });

    socket.on('auth-master', (data) => {
        const item = data;
        item.type = 'Connect';
        item.id = socket.id;
        socket.broadcast.emit('auth-master', item);
        console.log(item);
    });

    socket.on('auth-student', (data) => {
        socket.broadcast.emit('auth-student', data);

        if(data.type === "reconnect") {
             console.log("student this reconnect");
             let img = {
                 type: 'image',
                 data: String(imagedata)
             };
             io.to(socket.id).emit('image', img);
        }
        console.log(data);
    });

    socket.on('image', (data) => {
        socket.broadcast.emit('image', data);
        console.log(data);
        imagedata = data.data;
    });

    socket.on('message-chat', (data) => {
        socket.broadcast.emit('message-chat', data);
        console.log(data);
    });

    socket.on('disconnect', function() {
        const item = { type: 'Disconnect', id: socket.id };
        socket.broadcast.emit('auth-master', item);
        console.log("Disconnected", item);
    });
}

io.on('connection', onConnection);

router.get('/history', function(req, res) {
    res.json({ data: file() });
});

router.get('/clearHistory', function(req, res) {
    logs.clear();
    imagedata = "";
    res.json({ data: "Done" });
});

app.use('/api', router);

http.listen(port, () => {
    console.log('listening on port ' + port)
});

function file() {
    var s = logs.read();
    var test = s.substring(0, s.length - 1);
    var make = '[' + test + ']';
    //console.log(make);
    //console.log(JSON.parse(make));
    return JSON.parse(make);
}