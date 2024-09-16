const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const socketio = require('socket.io');

const server = http.createServer(app);
const io = socketio(server);

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.on('send-location', (data) => {
        io.emit('receive-location', data);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
        io.emit('user-disconnect', socket.id);
    });
});

app.get('/', (req, res) => {
    res.render('index', (err, html) => {
        if (err) {
            console.error('Error rendering view:', err);
            return res.status(500).send('Server Error');
        }
        res.send(html);
    });
});

server.listen(3000, '0.0.0.0', (err) => {
    if (err) {
        console.error('Server failed to start:', err);
    } else {
        console.log('Server running on https://localhost:3000');
    }
});
