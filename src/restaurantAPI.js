const API_KEY = 'b505f450a227f92e80b6ebb3ddcedb1a';
const SEARCH_URL = 'https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&cuisines=168&q=';
const REVIEWS_URL = 'https://developers.zomato.com/api/v2.1/reviews?res_id=';
const RESTAURANT_URL = 'https://developers.zomato.com/api/v2.1/restaurant?res_id=';

const options = {
	method: 'GET',
	headers: new Headers({
		'content-type': 'application/json',
		'user-key': API_KEY
	})
};

export  {
	options,
	SEARCH_URL, 
	REVIEWS_URL,
	RESTAURANT_URL
};