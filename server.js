const express = require("express");
const path = require('path');
const http = require('http');
const socketio = require('socketio');

const app = express();
const server = http.createServer( app );
const io = socketio( server );

// Set static folder
app.use( express.static( path.join( __dirname, 'public' )));

io.on( 'connection', socket => {
  console.log('New websocket connection...');
})

const PORT = process.env.PORT || 3000;
server.listen( PORT, () => console.log('Server is running on port', PORT));
