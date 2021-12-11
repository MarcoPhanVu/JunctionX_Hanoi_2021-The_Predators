//Source: https://www.youtube.com/watch?v=xVcVbCLmKew
//luv u so muchhhh

const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();

const clientPath = `${__dirname}/../client`;

console.log(`Serving static from ${clientPath}`);

app.use(express.static(clientPath));

const server = http.createServer(app);

const io = socketio(server);

server.on('error', (err) => {
    console.error('server errror: ', err);
})

server.listen(8080, () => {
    console.log("u see me?");
})