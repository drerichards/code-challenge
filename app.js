"use strict";									// Makes sure the JS is up to strict syntax standards

var passkeys = require('./passkeys.js'), queryAddition = "", zomatoresult;		// Import a local file that holds the key for the Zomato API, also create an empty variable to hold returned Zomato data
var zomatoAPI = passkeys.ZOMATOAPI;				// Stores the api key name and value in a string as a url filtering structure
var zomatoURL = passkeys.ZOMATOURL; 			// The main url for all Zomato API calls
var express = require('express');				// Installs the Express node package
var bodyParser = require('body-parser');		// Installs the body parser middleware node package
var app = express();							// Readies Express functionality, storing it into variable name app
require("jsdom").env("", function(err, window) {// I use the JS Dom node package to use jQuery in node
    if (err) {									// Handles errors with the JS Dom package
        console.error(err);
        return; 
    }
    var $ = require("jquery")(window);			// Import the jQuery node package

	app.use(express.static(__dirname + '/public')); // Lets the app find and use the public directory
	app.use(bodyParser.urlencoded({				// The body parser package will have encoded url data
	    extended: true
	}));
	app.use(bodyParser.json());					// Data is changed into a JSON structure

	app.get('/', function(req, res) {			// When the browser goes to the root url show this page and show
		res.render('main.ejs', {				// this text on the page
			title: 'Buzzes with A Bite',
			body1: 'Hi!<br />',
			body2: '',
			body3: '<br /> Please enter the fields to look up your favorite eateries!'
		});
	});

	app.post('/send', function(req, res){		// When the browser makes a POST call to the /send url do the following
		
		var endpoint = req.body.zomato.endpoint;		// Store the endpoint info to attach to the url later
		var userEntry = req.body.zomato.userEntry;		// Store the userEntry info to attach to the url later. If it's not given place the NYC code of 280 instead

		switch(endpoint) {						// This switch statement makes a string that will hold the required query info that works with each endpoint
			case "categories":
			case "cities":   
				userEntry = userEntry? userEntry : 280;
				queryAddition = "&city_ids=" + userEntry; 
				break; 
			case "collections": 
			case "cuisines": 
			case "establishments": 
				userEntry = userEntry? userEntry : 280;
				queryAddition = "&city_id=" + userEntry; 
				break;
			case "daily_menu":  
			case "restaurant": 
			case "reviews": 
				userEntry = userEntry? userEntry : 16774318;
				queryAddition = "&res_id=" + userEntry; 
				break; 
			case "geocode":
				userEntry = userEntry? userEntry : "40.71463, -74.005806";
				userEntry = userEntry.split(", ");
				userEntry = "&latitude="+userEntry[0] + "&longitude="+userEntry[1]
				queryAddition = userEntry; 
				break;
			case "location_details": 
				userEntry = userEntry? userEntry : "36932, group";
				userEntry = userEntry.split(", ");
				userEntry = "&entity_id="+userEntry[0] + "&entity_type="+userEntry[1]
				queryAddition = userEntry; 
				break;
			case "locations":  
				userEntry = userEntry? userEntry : "new%20york%20city";
				userEntry = "&query="+userEntry;
				queryAddition = userEntry; 
				break;  
			case "search":
			default:
				queryAddition = "&category=restaurants";
		}

		function zomato() {
	        $.ajax({    						// Make an ajax call to the Zomato API... 
	            url: zomatoURL + endpoint + zomatoAPI + queryAddition,				// ... with this url, endpoint, and api key
    			method: 'GET'					// ... sent as a GET request
	        }).done(function(data) {			// when it's done do the followinG
	          	// zomatoresult = data;
	          	zomatoresult = JSON.stringify(data);
	          	// zomatoresult = JSON.parse(StringifyPretty(data));
	          	// zomatoresult = StringifyPretty(data);


	          	res.render('main.ejs', {
					title: 'Buzzes with A Bite',
					body1: 'Results: <br />',
					body2: '<br />',
					body3: `${zomatoresult}`
				});
	        })
	        .fail(function(err) {				// if the call fails do the following
	        	
	        	res.render('main.ejs', {
					title: 'Buzzes with A Bite',
					body1: 'No results found.',
					body2: '',
					body3: ''
				});
	        });
	    };

	    zomato();
	});
	  
	app.get('/*', function(req, res) {			// If the user types something wrong send them back to the home page and
		res.render('main.ejs', {				// show some text
			title: 'Buzzes with A Bite',
			body1: 'Hi!<br />',
			body2: '',
			body3: '<br /> Please enter the fields to look up your favorite eateries!'
		});
	});
});

app.listen(3000, 'localhost', function() {		// Sets up the port to listen to for the call
  console.log('App listening on port 3000!');	// Send a console msg to make sure it works
});