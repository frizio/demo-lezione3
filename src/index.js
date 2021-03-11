/*
var http = require('http');

var server = http.createServer( 
  (req, res) => {
    res.writeHead(200);
    res.end('<h1>Home Page!!!!!!</h1>');
  }
);

server.listen(
  3000,
  () => {
    console.log('Server in esecuzione sulla porta 3000')
  }
);
*/

const express = require('express');
const app = express();

app.get(
  '/',
  (req, res) => {
    res.send('<h1>Home Page</h1>');
  }
);

app.get(
  '/contacts',
  (req, res) => {
    res.send('<h1>Pagina dei Contatti</h1>');
  }
);

app.get(
  '/about',
  (req, res) => {
    res.send('<h1>About...</h1>');
  }
);

app.get(
  '/api',
  (req, res) => {
    res.json(
      [
        {'id': 1, 'nome': 'laptop', 'price': 300, nuovo: true},
        {'id': 2, 'nome': 'smartphone', 'price': 200, nuovo: false}
      ]
    );
  }
);


app.listen(
  3000,
  () => {
    console.log('Server in esecuzione sulla porta 3000');
  }
);
