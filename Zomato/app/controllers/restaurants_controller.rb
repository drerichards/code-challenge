class RestaurantsController < ApplicationController

def search

end

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

def index
	@restaurants = Restaurant.all
end

def show

end

def new

end

def create
	@restaurant = Restaurant.new(restaurant_params)
	if @restaurant.save
		redirect_to restaurants_path
	else
		redirect_to search_restaurant_path
	end
end

def destroy

end

private

def restaurant_params
	params.require(:restaurant).permit(:name, :address, :image, :rating, :website)
end
end
