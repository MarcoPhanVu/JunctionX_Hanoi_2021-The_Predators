const express = require('express');
const http = require('http');
const { Server } = require("socket.io")
const app = express(); //function Handler
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => { //route handler for every "/"

  // res.sendFile('home.html', {'root': 'E:\\Projects\\Codes\\Webs\\JunctionX_Hanoi_2021-The_Predators'});
  res.sendFile('index.html', {'root': 'E:\\Projects\\Codes\\Webs\\JunctionX_Hanoi_2021-The_Predators'});

});

io.on('connection', (socket) => {
    socket.on('message', (msg) => {
      io.emit('message', msg);
    });
});

server.listen(3000, () => { //server port
  console.log('listening on *:3000');
});