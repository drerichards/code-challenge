//
//  ReviewsMetaData.swift
//  ZomatoChallenge
//
//  Created by Marc Aupont on 1/27/18.
//  Copyright © 2018 com.digimarktech. All rights reserved.
//

import Foundation

struct ReviewMetaData: Decodable {
    
    var user_reviews: [ReviewCollection]
    
    struct ReviewCollection: Decodable {
        var review: Review
        
        struct Review: Decodable {
            
            let id: String
            let reviewText: String
            let ratingColor: String
            let reviewTime: String
            let reviewTitle: String
            let rating: Double
            let timestamp: Double
            let reviewerName: String
            let reviewerFoodieLevelNum: Int
            let reviewerFoodieLevelColor: String
            let reviewerProfilePictureUrl: String
            
            enum ReviewCodingKeys: String, CodingKey {
                case reviewText = "review_text"
                case ratingColor = "rating_color"
                case reviewTime = "review_time_friendly"
                case reviewTitle = "rating_text"
                case rating
                case id
                case user
                case timestamp
            }
            
            enum UserCodingKeys: String, CodingKey {
                case name
                case reviewerFoodieLevelNum = "foodie_level_num"
                case reviewerFoodieLevelColor = "foodie_color"
                case reviewerProfilePictureUrl = "profile_image"
            }
            
            init(from decoder: Decoder) throws {
                
                //Review Object Data
                let reviewObj = try decoder.container(keyedBy: ReviewCodingKeys.self)
                id = try reviewObj.decode(String.self, forKey: .id)
                reviewText = try reviewObj.decode(String.self, forKey: .reviewText)
                ratingColor = try reviewObj.decode(String.self, forKey: .ratingColor)
                reviewTime = try reviewObj.decode(String.self, forKey: .reviewTime)
                reviewTitle = try reviewObj.decode(String.self, forKey: .reviewTitle)
                rating = try reviewObj.decode(Double.self, forKey: .rating)
                timestamp = try reviewObj.decode(Double.self, forKey: .timestamp)
                
                //User Object Data
                let userObj = try reviewObj.nestedContainer(keyedBy: UserCodingKeys.self, forKey: .user)
                reviewerName = try userObj.decode(String.self, forKey: .name)
                reviewerFoodieLevelNum = try userObj.decode(Int.self, forKey: .reviewerFoodieLevelNum)
                reviewerFoodieLevelColor = try userObj.decode(String.self, forKey: .reviewerFoodieLevelColor)
                reviewerProfilePictureUrl = try userObj.decode(String.self, forKey: .reviewerProfilePictureUrl)
            }
        }
    }
}

