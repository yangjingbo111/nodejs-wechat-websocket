var WebSocketServer = require('websocket').server;

function startWebsocket(server){
  // console.log(server._eventsCount);
  wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false
  });

  function originIsAllowed(origin) {
    // put logic here to detect whether the specified origin is allowed.
    return true;
  }

  wsServer.on('request', (request) => {
    var connection = request.accept('echo-protocol', request.origin);
    console.log((new Date()) + ' Connection accepted.');

    connection.on('message', (message) => {
      if (message.type === 'utf8') {
        console.log('Received Message: ' + message.utf8Data);
        connection.sendUTF(message.utf8Data);
      }
      else if (message.type === 'binary') {
        console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
        connection.sendBytes(message.binaryData);
      }
    });

    connection.on('close', (reasonCode, description) => {
      console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });

  });
}

module.exports = startWebsocket;
