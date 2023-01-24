const { WebSocketServer } = require("ws");

const wss = new WebSocketServer({ port: 3001 });

wss.on('connection', function connection(ws) {
    ws.on('message', function message(data) {
        wss.clients.forEach(function(client) {
            client.send(data.toString());
        });        
    });
});