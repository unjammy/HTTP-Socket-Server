//
// Server Creation

const net = require('net');
process.stdin.setEncoding('utf8');



const server = net.createServer( (client) => {

  client.on('end', () => {
    console.log('client disconnected');
  });

  client.on("data", (data) => {
    generator(data);
  });


});

server.on('error', (error) => {
  throw error;
});

server.listen({host: "localhost", port: 8080}, () => {
  console.log("server bound");
});


//
// Server Daemons

var knownRoutes = ["/", "/index.html", "/hydrogen.html", "/helium.html", "/404.html", "/css/styles.css"];


//
// Route Handling

var routes = function(path) {

  if( path === "/"){

  }

  if( path === "/index.html"){

  }

  if( path === "/hydrogen.html"){

  }

  if( path === "/helium.html"){

  }

  if( path === "/404.html"){

  }

  if( path === "/css/styles.css"){

  }

  return body;

};

//
// Response Generator

var generator = function(data){

  var request = process.stdout.write( data );

  console.log(request);

  var method = request.slice(0, request.indexOf(" "));

  console.log(method);

};


//
// Header Bank

var headers = function(path){

  if( path === "/"){

  }

  if( path === "/index.html"){

  }

  if( path === "/hydrogen.html"){

  }

  if( path === "/helium.html"){

  }

  if( path === "/404.html"){

  }

  if( path === "/css/styles.css"){

  }

};

//
// Module

module.exports = server;