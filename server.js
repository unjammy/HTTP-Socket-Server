
const net = require('net');

const server = net.createServer( (client) => {

  client.on('end', () => {
    console.log('client disconnected');
  } );

} );

server.on('error', (error) => {
  throw error;
});

server.listen({host: "localhost", port: 8080}, () => {
  console.log("server bound");
});