var http = require('http');

var server = http.createServer( 
  (req, res) => {
  res.writeHead(200);
  res.end('Ciao a tutti, sono un web server!');
  }
);

server.listen(
  3000,
  () => {
    console.log('Server in esecuzione sulla porta 3000')
  }
);