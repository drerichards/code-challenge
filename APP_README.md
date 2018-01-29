# Questions Answered

### 1. How long did you spend on this technical challenge? What would you add to your solution if you had more time?
	Answer: I worked on this challenege on and off for about 3 days. There is a lot of room for improvment regarding this challenge. If there was more time to complete the challenge i would have implemented the following items:
	
	1. 	Unit test
	2. Creating a wrapper around Networking calls
	3. Add a persistance layer to save downloaded data to reduce network calls
	4. Expound upon the range of items that a user can search and allow the ability for the user to perform custom queries
	5. Handle edge cases in the app such as no network connectivity
	6. Provide a method of sharing restaurants that you love as well save favorting restaurants
	

### 2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

	I decided to use the Decodable protocol added as of Swift 4 to handle deserializing the JSON data coming back from the API.
	
Given the following JSON data:
`"restaurants": [
    {
      "restaurant": {
        "R": {
          "res_id": 16769546
        },
        "apikey": "6325d213f6472ca36a9f2611dd3a5695",
        "id": "16769546",
        "name": "Katz's Delicatessen",
        "url": "https://www.zomato.com/new-york-city/katzs-delicatessen-lower-east-side?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": {
          "address": "205 East Houston Street, New York 10002",
          "locality": "Lower East Side",
          "city": "New York City",
          "city_id": 280,
          "latitude": "40.7223277778",
          "longitude": "-73.9873500000",
          "zipcode": "10002",
          "country_id": 216,
          "locality_verbose": "Lower East Side"
        },`
        
  You can use the Decodable protocol to parse all of the Data for you. I used the `struct` data type to create the overall structure of the JSON. The properties of the structure represent the items that I want to reference when displaying the data to the user. An example of this is below:
  
  `struct RestaurantsMetaData: Decodable {
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
           }
         }
         
       }`
       
       
   

### 3. How would you track down a performance issue in production? Have you ever had to do this?

	Tracking down issues in production can be achieved in multiple ways. One method is to have a good CI/CD process that allows you to deliver fixes to customers rapidly. Having good unit testing will also help find where mistakes might have happened. Another method is to have your app have a special endpoint that consumes a JSON snippet that enables or disables certain aspects of your app. This allows you to remotely deploy changes without having to wait for a users to update app via AppStore

### 4. How would you improve the Zomato API that you just used?

	I would provide data and time data for the restaurants. I did not see this data. I would also provide the menu data as an object to be consumed instead of a URL that takes you to the Zomato page

### 5. Please describe yourself using JSON.

`{
  "description": "I am a first and foremost a Husband and a father. My family is at the core of everything I do. I love serving my community and helping give people opportunities who would otherwise have no opportunity. I love tech and the opportunity that it can provide for people of color.",
  "socialMedia": [
    {
      "twitterUrl": "https://twitter.com/digimarktech",
      "linkedInUrl": "https://linkedin.com/in/marcaupont"
    }
  ],
  "communityService": [
    {
      "website": "https://www.meetup.com/Code-for-Queens",
      "name": "Code For Queens",
      "established": "September 13, 2017",
      "description": "Code for Queens is a community that is focused on becoming better technologists for our community. We learn new skills and build awesome technologies for the betterment of Queens."
    },
    {
      "website": "https://www.meetup.com/Learn-Swift-Queens-Meetup",
      "name": "Learn Swift Queens",
      "established": "July 13, 2017",
      "description": "Learn Swift Queens is a weekly meet up for anyone interested in learning Swift and Xcode for iOS Development. All experience levels are welcome. We are all about practical learning, so each week we dig deep into practical programming topics and really learn how to make iOS apps with Swift and Xcode."
    }
  ],
  "githubRepo": "https://github.com/digimarktech",
  "age": 32,
  "occupation": "iOS Developer",
  "familyMembers": [
    {
      "wife": "Lourbite Aupont",
      "child1": "Malcolm Aupont",
      "child2": "Malachi Aupont"
    }
  ],
  "progammingLanguages": [
    "swift",
    "javascript",
    "python",
    "java",
    "kotlin",
    "c#"
  ],
  "hobbies": [
    "programming",
    "working on raspberry pi projects with my son",
    "serving my community",
    "playing keys",
    "learning with others"
  ],
  "petPeeves": [
    "MTA",
    "people who double park during rush hour traffic"
  ],
  "lovesDrama": false,
  "name": "Marc D. Aupont",
  "languagesSpoken": [
    "English",
    "French",
    "Haitian Creole"
  ]
}`