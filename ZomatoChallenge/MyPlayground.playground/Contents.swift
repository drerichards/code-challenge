//: Playground - noun: a place where people can play

import UIKit
import PlaygroundSupport
PlaygroundPage.current.needsIndefiniteExecution = true

///Trying some things out...

enum Result<T> {
    case success(T), failure(Error)
}

extension String {
    var toRequest: URLRequest {
        let url = URL(string: self)!
        return URLRequest(url: url)
    }
}

enum StringError: Error {
    case value(String)
}
func get(url:String) {
    
}
/**
   request
   queue
 */

class Network { }

func request(_ request: URLRequest, queue: DispatchQueue = .global(qos: .background) , completion:@escaping (Result<Data>) -> ()) {
    queue.async {
        URLSession.shared.dataTask(with: request) { (data, response, error) in
            if let err = error { completion(.failure(err)) }
            if let res = response as? HTTPURLResponse {
                
                switch res.statusCode {
                case 200:
                    if let _data = data { completion(.success(_data)) }
                default:
                    completion(.failure(StringError.value("\(res.statusCode)")))
                }
            }
        }.resume()
    }
    
}

let API_KEY = "6325d213f6472ca36a9f2611dd3a5695"
let API_ROOT = "https://developers.zomato.com/api/v2.1"

let endpoint = "\(API_ROOT)/search?entity_id=280&entity_type=city"

let urlRequest = NSMutableURLRequest(url: URL(string: endpoint)!)
urlRequest.setValue(API_KEY, forHTTPHeaderField: "user-key")


 struct RestaurantsMetaData: Decodable {
 
 var restaurants: [RestaurantCollection]
 
 struct RestaurantCollection: Decodable {
 
 var restaurant: Restaurant
 
 struct Restaurant: Decodable {
 
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
     case avgCostForTwo = "average_cost_for_two",
      priceRange = "price_range",
      userRating = "user_rating",
      menuUrl = "menu_url",
      featuredImageUrl = "featured_image",
      cuisines, url, location, name, id
 }
 
 enum LocationCodingKeys: String, CodingKey {
    case locality, city
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

typealias Restaurant = RestaurantsMetaData.RestaurantCollection.Restaurant

func decode(data: Data) -> Result<[Restaurant]> {
    do {
        let decoder = JSONDecoder()
        let decoded = try decoder.decode(RestaurantsMetaData.self, from: data)
        
        return .success(decoded.restaurants.map({ $0.restaurant }))
    } catch DecodingError.keyNotFound(let key, let context) {
       return .failure(StringError.value("Missing key in JSON: \(key) \(context)"))
        
    } catch DecodingError.typeMismatch(let type, let context) {
        return .failure(StringError.value("Wrong type in JSON: \(type) \(context)"))
        
    } catch {
      //  print("Unable to parse JSON: \(error.localizedDescription)")
        return .failure(error)
    }
  
   
}

//request(urlRequest as URLRequest) { status in
//    switch status {
//    case .success(let value):
//        print(decode(data: value))
//    case .failure(let err):
//        print(err)
//    }
//}


