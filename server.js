process.env.FORCE_COLOR=true

import chalk from 'chalk';
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 3001 });

wss.on('listening', ()=> console.log(chalk.green('web socket start')))

wss.on('connection', function connection(ws) {
    console.log(`
    connection starts`)
    ws.on('message', function message(data) {
        wss.clients.forEach(function(client) {
            client.send(data.toString());
        });        
    });
});

wss.on('error', (err)=> console.log(err))