// Importiamo i moduli installati con npm
const express = require('express');
const path = require('path');
const ejs = require('ejs');

// Instanziare i moduli
const app = express();

// Impostazioni
app.set('port', 3000);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'pages') );
app.engine('html', ejs.renderFile);

// File statici serviti dal web server
app.use( express.static( path.join(__dirname, 'public') ) );


// Middleware


// Routes
app.get(
  '/',
  (req, res) => {
    res.render('home.html', {'title': 'Home Page'});
  }
);

app.get(
  '/contacts',
  (req, res) => {
    res.render('contacts.html', {'title': 'Contacts'});
  }
);

app.get(
  '/about',
  (req, res) => {
    res.render('about.html', {'title': 'About'});
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

// Lanciamo il web server
app.listen(
  app.get('port'),
  () => {
    console.log('Server in esecuzione sulla porta 3000');
    console.log(__dirname);
    console.log(path.join(__dirname, 'pages/about.html')); 
  }
);

