
//--------------------------------------------   IMPORT DEPENDENCIES --------------------------------------------

const express = require('express')
const bodyParser = require('body-parser')
const app = express(); 
const scrape = require('website-scraper');
const fs = require('fs'); 
const rimraf = require('rimraf');
// NPM UNINSTALL THIS GUY
const requireText = require('require-text');

//-----------------------------------------------  CONFIG MODULES  -------------------------------------------------


app.use(express.static('public'))
app.set('views','views')
app.set('view engine','pug')

app.use(bodyParser.urlencoded({extended: true}));

// set up server 
app.listen(3000, function(){
	console.log("App listening on port 3000")
});


//---------------------------------------------------  ROUTING  ---------------------------------------------------


// GET PAGE "HOME" ----------------------------------
app.get('/', function(req, res){
		res.render('index');

});

// GET PAGE "TEST" ----------------------------------
app.get('/test', function(req, res){

		const recipes = [ { title: 'Gadogado met rijst', 
			imageLink: 'https://static.ah.nl/static/recepten/img_069348_445x297_JPG.jpg', 
			recipeLink: 'https://www.ah.nl/allerhande/recept/R-R1185592/gadogado-met-rijst' 
		}, { 
			title: 'Komkommerroerbak met sesam & omelet',
			imageLink: 'https://static.ah.nl/static/recepten/img_067458_445x297_JPG.jpg',
			recipeLink: 'https://www.ah.nl/allerhande/recept/R-R1185440/komkommerroerbak-met-sesam-en-omelet' 
		}, { 
			title: 'Hutspot uit de oven met gekruide hazelnoten',
			imageLink: 'https://static.ah.nl/static/recepten/img_086722_445x297_JPG.jpg',
			recipeLink: 'https://www.ah.nl/allerhande/recept/R-R1178218/hutspot-uit-de-oven-met-gekruide-hazelnoten' 
		} ];

		res.render('test', {recipes: recipes} );
});

// GET PAGE "RESULTS" ----------------------------------
app.get('/results', function(req, res){
	res.render('results');
})

// POST ACTION "FILTER" ----------------------------------
app.post('/filter', function(req, res){

	console.log(req.body.Q1 + req.body.Q2 + req.body.Q3 + req.body.Q4 + req.body.Q5); 
	let url = "";

	if(req.body.Q3 === 'vega' && req.body.Q4 === 'budget' ) {
		console.log("FIRST OPTION");
		url = "https://www.ah.nl/allerhande/recepten-zoeken/__/N-26vqZ26xvZ26vnZ26vk";
	} else if(req.body.Q3 === 'normal' && req.body.Q1 === 'me' && req.body.Q5 === 'fat') {
		url = "https://www.ah.nl/allerhande/recepten-zoeken/__/N-26vqZ26wzZ26vm";
	} else if(req.body.Q3 === 'vegan') {
		url = "https://www.ah.nl/allerhande/recepten-zoeken/__/N-26vqZ26y0";
	} else {
		url = "https://www.ah.nl/allerhande/recepten-zoeken/__/N-26vqZ26xvZ26waZ26zq";
	}; 

	let options = {
	urls: [`${url}`],
	directory: './storage-directory',
	sources: [{selector: 'span'}]
	};
	 
	scrape(options).then( result => {

		// let content = requireText('./storage-directory/index.html', require);
		let content = result[0].text;

		// split the content so it only contains the recipe item sections as an array
		const contentArray = content.split(`<section class="item recipe " `)

		// set containers for extraction 
		let container = [];
		let i = 0;

		// retrieve the title, imagelink and recipelink from the raw html string 
		contentArray.forEach(section => {
			let title = section.substring(section.indexOf('data-title=') + 12, section.length);
			title = title.substring(0, title.indexOf('"'));
		   
			let imageLink = section.substring(section.indexOf('data-src=') + 10, section.length);
			imageLink = imageLink.substring(0, imageLink.indexOf('"'));

			let recipeLink = section.substring(section.indexOf('href=') + 6, section.length);
			recipeLink = recipeLink.substring(0, recipeLink.indexOf('"'));

			container[i++] = {title, imageLink, recipeLink};
		});

		//remove first wrong entry of array and map the recipeLinks correctly 
		const splicedContainer = container.splice(1, container.length);
		splicedContainer.map( i => { return i.recipeLink = 'https://www.ah.nl' + i.recipeLink })

		return splicedContainer;
	})
	.then( results => {
		let recipes = results;
		rimraf('./storage-directory', () => { console.log('repository deleted!')});

		if(results.length > 12) {
			for(let i = results.length-1; i >= 12 ; i--) {
 				results.splice(Math.floor(Math.random()*results.length), 1);
			}
		}

		res.render('results', {recipes: recipes});
	})
	.catch(e => console.error(e.stack));

})
