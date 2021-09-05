const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
var cors = require('cors')
const io = new Server(server,{
    cors: {
        origin: 'http://localhost:3000',
        methods: ["GET","POST"]
    }
});

app.use(cors)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on("send_message", msg => {
      io.emit('receive_message',msg)
  })
});

server.listen(4000, () => {
  console.log('listening on *:4000');
});