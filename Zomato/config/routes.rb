Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :restaurants, only: [:index, :create]
  get "/restaurants/search", to: "restaurants#search", as: :search_restaurants
  post "restaurants/search", to: "restaurants#results"
end
