const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

// Archivos publicos 
app.use( express.static( __dirname + '/public' ) );

// Express HBS engine (views)
hbs.registerPartials( __dirname + '/views/partials' );
app.set('view engine', 'hbs');

// routes
app.get( '/', function (req, res) {

	res.render('home', {
		nombre: 'joNh doE'
	});

});

app.get( '/about', function (req, res) {

	res.render('about', {
		nombre: 'About us'
	});

});

// inicializamos la pagina web por localhost:3000
app.listen(port, () => {
	console.log(`Escuchando peticiones en el puerto ${ port }`);
});