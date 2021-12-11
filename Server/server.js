//Source: https://www.youtube.com/watch?v=xVcVbCLmKew
//luv u so muchhhh

const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();

const clientPath = __dirname + '\\..';

console.log(`Serving static from ${clientPath}`);

app.use(express.static(clientPath));

const server = http.createServer(app);

const io = socketio(server);

io.on('connection', (socket) => {
    console.log('New User connected');
    socket.emit('message', `Hi, welcome to the room`); //Only that user receive the message

    socket.on('message', (txt) => {
        io.emit('message', txt);//all user receive this message
    });
})

server.on('error', (err) => {
    console.error('server errror: ', err);
})

server.listen(8080, () => {
    console.log("Host started at 8080");
})