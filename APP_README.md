# BuildNG Code Challenge
by Dell Ward  

## Burgers Anyone!?  
BURGR is application which utilizes the Zomato API to the get allow the user to a get a list burger joints in New York City.

![](https://image.ibb.co/kPOfpG/Screenshot_from_2018_01_28_22_37_59.png)

### Getting started
To build and start the application:
```
npm start
```
### Language/Environment
* Javascript and Node

### Frameworks, Libraries, Dependencies, APIs
* React
* React Router
* Webpack
* Babel
* Fetch API
* Sass

### No Redux
Becuase this application essentially only consists of three pages ( consisting of many components ), I didn't feel the need to use Redux. Redux is a framework that allows developers to keep track of the component states with a single state container called the store. This is best usefull for when a React componenent needs to access the state of a another component that is not a child or parent. There was only one instance when I needed components to communicate with each other, so I chose the approach to just send a another request to the Zomato API. Redux would've been overkill for this project.

### Application Lifecycle
Below is an overview of the React component architure. Components in red indicate components that couldnt be implemented in time or were no longer planned for implementation.

![](https://image.ibb.co/k6JwUG/reasturant_api_react_architecture.png)


## Technical Challenge
**How long did you spend on this technical challenge? What would you add to your solution if you had more time?**   
It took me the whole week. There were some new concepts of React I had to get familiar with to this challenge.  
If I had more time I would add tests. I've never written tests for react components before so that's an implementation I'm curious about. 

**What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.**   
Javascript ES6 introduced the class objecs. This is very useful in when creating React components. While ES6 classes are just functions in diguise, their java-like syntax works well the React's main concepts.

As per Reactjs.org, creating a React component state before ES6:  
````javascript
var createReactClass = require('create-react-class');
var Greeting = createReactClass({
  render: function() {
    return <h1>Hello, {this.props.name}</h1>;
  }
});
````  
With ES6+ :
````javascript
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```` 

3. **How would you track down a performance issue in production? Have you ever had to do this?**  
I've never had to do this before but I would start from my API request to see if there is anything wrong with my response.


4. **How would you improve the Zomato API that you just used?**  
Not sure if the delivery parameters are only availble in the partner access version but after each request both
the "has_online_delivery" and "is_delivering_now" keys were always set to zero. I wonder if that data has not been fully implemented yet. 

5. **Please describe yourself using JSON.**
```json
{
	name: "Dell Ward"
	birthplace: "Brooklyn, NY"
	education: "Masters in Computer Science"
	married: true,
	age: 30,
	languages: [
		"javascript", "python"
	]
	has_imposter_syndrome: true
	interests: {
		football: {
			favorite_team: "NY Giants"
			hated_team: "NE Patriots"
		}
		music: {
			favorite_artist: "J.Cole",
			favorite_albums_2017: [
				"4 Your Eyes Only"
				"24K Magic",
				"4:44",
			]
		}
		loves_memes: true 
	}
	ready_to_get_foot_in_door: true
}
```