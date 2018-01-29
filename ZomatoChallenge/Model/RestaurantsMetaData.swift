//
//  RestaurantsMetaData.swift
//  ZomatoChallenge
//
//  Created by Marc Aupont on 1/23/18.
//  Copyright © 2018 com.digimarktech. All rights reserved.
//

import Foundation

struct RestaurantsMetaData: Decodable {
    var restaurants: [RestaurantCollection]
    struct RestaurantCollection: Decodable {
        var restaurant: Restaurant
        struct Restaurant: Decodable {
            
            //JSON Properties being used
            let id: String
            let name: String
            let url: URL
            let cuisines: String
            let avgCostForTwo: Int
            let priceRange: Int
            let aggregateRating: String
            let locality: String
            let city: String
            let menuUrl: URL
            let featuredImageUrl: String
            let ratingColor: String
            let votes: String
            
            enum RestaurantCodingKeys: String, CodingKey {
                case avgCostForTwo = "average_cost_for_two"
                case priceRange = "price_range"
                case userRating = "user_rating"
                case menuUrl = "menu_url"
                case featuredImageUrl = "featured_image"
                case cuisines
                case url
                case location
                case name
                case id
            }
            
            enum LocationCodingKeys: String, CodingKey {
                case locality
                case city
            }
            
            enum UserRatingCodingKeys: String, CodingKey {
                case aggregateRating = "aggregate_rating"
                case ratingText = "rating_text"
                case ratingColor = "rating_color"
                case votes
            }
            
            init(from decoder: Decoder) throws {
                
                //Restaurant Object Data
                let restaurantObj = try decoder.container(keyedBy: RestaurantCodingKeys.self)
                avgCostForTwo = try restaurantObj.decode(Int.self, forKey: .avgCostForTwo)
                priceRange = try restaurantObj.decode(Int.self, forKey: .priceRange)
                cuisines = try restaurantObj.decode(String.self, forKey: .cuisines)
                url = try restaurantObj.decode(URL.self, forKey: .url)
                name = try restaurantObj.decode(String.self, forKey: .name)
                id = try restaurantObj.decode(String.self, forKey: .id)
                menuUrl = try restaurantObj.decode(URL.self, forKey: .menuUrl)
                featuredImageUrl = try restaurantObj.decode(String.self, forKey: .featuredImageUrl)
                
                //Location Object Data
                let locationObj = try restaurantObj.nestedContainer(keyedBy: LocationCodingKeys.self, forKey: .location)
                locality = try locationObj.decode(String.self, forKey: .locality)
                city = try locationObj.decode(String.self, forKey: .city)
                
                //User Rating Object Data
                let userRatingObj = try restaurantObj.nestedContainer(keyedBy: UserRatingCodingKeys.self, forKey: .userRating)
                aggregateRating = try userRatingObj.decode(String.self, forKey: .aggregateRating)
                ratingColor = try userRatingObj.decode(String.self, forKey: .ratingColor)
                votes = try userRatingObj.decode(String.self, forKey: .votes)
            }
        }
    }
}



