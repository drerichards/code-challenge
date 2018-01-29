# Philly Restaurant Finder

## Technical Questions

**1. How long did you spend on this technical challenge? What would you add to your solution if you had more time?**

I spent around 5 hours on this challenge, but was not able to finish. If I had had more time, I would have

 - completed the user stories (code currently hits the /search endpoint but not the /reviews endpoint) 
 - add great CSS using Bulma CSS framework 
 - allow user to search different cities (functionality is
   partially there, but it is commented out)
 - add a cookie in localstorage to welcome back users who have been to the app before
 - add a backend so that users can log in, save their results, their most frequently searched cuisines/locations, etc.

**2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.**

I really like ES6 Promises. It makes asynchronous actions a lot more straightforward and easier to control, as well as making for easier error handling.

For example, in my code:

    fetch(url, {headers: reqHeaders}).then((response) => {
      response.json().then((data) => {
        console.log(data.restaurants);
        let restaurants = [];
        for (let i = 0; i < data.restaurants.length; i ++) {
          let restaurantId = data.restaurants[i].restaurant.id;
          restaurants.push(restaurantId);
        }
        console.log(restaurants);
        
        this.setState({
          results: restaurants
        });
      });
    }).catch((error) => {
      console.log("Ugh there was an error.");
    });

**3. How would you track down a performance issue in production? Have you ever had to do this?**

I have not yet had to do this directly, but I have seen others in my company have to do this, and I have tracked down issues in my own local environment. What I would probably do is first check the logs to see what data is being logged there. Hopefully that would provide a good starting point to discovering the source of the problem.

**4. How would you improve the Zomato API that you just used?**

I think I would provide a way to more easily bundle the two API calls for location and search. For example, maybe prefetching restaurants in the different locations so as not to make so many queries.

**5. Please describe yourself using JSON.**
    {
        "name": "Mia",
        "city": "Philadelphia",
        "developer_since": "2016",
        "goals": {
            "at_work": "create at the intersection of tech and social change",
            "in_life": "right livelihood and mindful living"
        },
        "current_job": "software dev apprentice",
        "past_work": "[teacher, book editor, actor, farm apprentice]"
    }




## Run the App

Inside the app/src directory, 

    touch config.js

In this file, add your API key:

    export const config = {
        user_key: <YOUR_USER_KEY>
    }
Then run:

    npm install
    npm start


Go to http://localhost:3000/ to see the app in action.
