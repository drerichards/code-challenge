How long did you spend on this technical challenge? What would you add to your solution if you had more time?

- I was unfortunuately only able to spend about 4 to 6 hours on the technical challenge. If I had more time, I would definitely complete the User Stories, and work on the UI make it look presentable. I had a really hard time getting the routes to go through.

What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

- The most useful feature was "HTTParty". I used it in the controller.
def results
	@term = params[:search][:term]
	url = "https://developers.zomato.com/api/v2.1/search?apikey=92250534740f09d230c52b0d4c3ca478&entity_id=280&entity_type=city&q=#{@term}&count=40"
	results = HTTParty.get(url)
	parsed_results = JSON.parse(results.body)
	@results = parsed_results.map do |result|
		{
			name: result["restaurant"]["name"],
			address: result["restaurant"]["address"],
			image: result["restaurant"]["thumb"],
			rating: result["restaurant"]["user_rating"],
			website: result["restaurant"]["url"]
		}
end
end



How would you track down a performance issue in production? Have you ever had to do this?

-I can track down a performance issue using the "Byebug" feature.


How would you improve the Zomato API that you just used?

-Personally using the API, was like using any other API. To improve it, would just have to be able to parse through the data a lot easier, and get rid of the unnecessary data.

Please describe yourself using JSON.

{
	"Jean_Robert_Rene_Jr": [
	{
		"DOB": 11071990,
		"Birthplace": "Port-au-Prince Haiti",
		"activities": "love to stay active by playing sports or going paintballing",
		"appearance": {
		hair: black,
		height: 6'1,
		weight: 190,
	},
		"education": SUNY Albany,
		"secondary_education": "General Assembly"
		}]
}