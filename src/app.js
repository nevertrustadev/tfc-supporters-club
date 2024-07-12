const path = require('path');
const express = require('express');
const hbs = require('hbs');


const app = express();
const port = process.env.PORT || 3000;

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));


app.get('', (req, res) => {
	res.render('index', {
        title: 'Supporters Club Home',
		name: 'Christopher Lampert'
	});
});

app.get('/about', (req, res) => {
	res.render('about', {
        title: 'About Us',
		pageTitle: 'Supporters\' Association Committee',
		name: 'Christopher Lampert'
	});
});

app.get('/join', (req, res) => {
	res.render('join', {
        
		title: 'Join Today',
		name: 'Christopher Lampert',
		message: 'Join the supporters club today!'
	})
});


app.get('/help/*', (req, res) => {
	res.render('404', {
		title: '404',
		error: 'Help article not found',
		name: 'Chris Lampert'
	});
});

app.get('*', (req, res) => {
	res.render('404', {
		title: '404',
		error: 'Page not found',
		name: 'Chris Lampert'
	});
});


app.listen(port, () => {
	console.log('Server is up on port ' + port);
});