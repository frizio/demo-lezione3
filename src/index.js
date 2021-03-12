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

const path = require('path');


const app = express();

app.get(
  '/',
  (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/home.html'));
  }
);

app.get(
  '/contacts',
  (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/contacts.html'));
  }
);

app.get(
  '/about',
  (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/about.html'));
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
    console.log(__dirname);
    console.log(path.join(__dirname, 'pages/about.html')); 
  }
);

