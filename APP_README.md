## Buzzes for A Bite - Impress everyone with your knowledge of any neighborhood's eateries, and create a buzz!
***
*Buzzes for A Bite* is  single page application where a user can find information on any restaurant within the API dataset. Results present restaurant data that is filtered from at least two endpoints located in the url 

## Technologies used:
- [Zomato API version 2.1](https://developers.zomato.com/api#headline1) that offers restaurant details, reviews, and menu information
- [Node.js] for a web application in order to protect API keys on the server
- HTML5 to utilize HTML5 Canvas and other markup features
- [Bootstrap Framework] for seamless transitioning betweek desktop and mobile versions of the application in browser so information is returned to the user in a clean and clear format.
- [Materialize] for clean UI features (buttons, menus, color scheme, etc.) so information is returned to the user in a clean and clear format. 
- GitHub for version control
- [Trello] for progress tracking
- [Node testing packages] used to test the most common user case scenarios. The code compiles and runs in one step.
- Branding elements; [Logomakr](https://logomakr.com/), image editing with [Pixlr](https://pixlr.com/editor/)

###Work process:
- Created a thorough markdown file making sure the file introduces all need to know information 
- Created a Trello for the work plan

## App instructions
## Installation:
- Git clone https://github.com/Githubbubber/code-challenge.git
- [Node JS download version 8.9.4](https://nodejs.org/en/download/). With this installation comes npm.
- [Zomato API version 2.1](https://developers.zomato.com/api#headline1). Verify your email with the service, then follow the directions to generate an API key

## How to use *Buzzes with A Bite*:

## How to run the test suite
- N/A
Tests:
Example [https://developers.zomato.com/api/v2.1/cuisines?city_id=280](https://developers.zomato.com/api/v2.1/cuisines?city_id=280) will return a list of *all cuisines* that can be found in *New York City* restaurants.

The task is to create an application that presents the data from at least two endpoints. For example, an app that lists all sushi restaurants in New York City (using the `/search` [endpoint](https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&cuisines=177&sort=cost&order=asc)), and upon clicking on a restaurant takes you to a detail page that includes its info and reviews (using the `/reviews` endpoint). 

## Dynamic information users can retrieve:
- All restaurants returned from filters
- Individual restaurant page with detailed restaurant information listed

## Technical questions
1. How long did you spend on this technical challenge? What would you add to your solution if you had more time?
I received the instructions for the exercise and I started the work the next day. I outlined everything in the Trello project and pretty much stuck to my goals until the day before it was due, when I ran into hiccups with parsing the data.


2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

For the Express node package the bodyParser was separated from the package, so the middleware wasn't dependant on the package overall. I read on Stack Overflow that a number of developers found this irritating. It was too dependent on the Express package, and I agree.


3. How would you track down a performance issue in production? Have you ever had to do this?
I would make sure everyone from the apps' users to the support team have at least one method to contact me; preferably an email. In the email the sender can provide as many details, screenshots or video clips, as needed to demonstrate the issue and offer any suggestions if they have any. I myself have done this for other web developers and this was appreciated.

When there was an updated version available, or a breach in the security, of a node package or rails gem I received notifications about this from Heroku or GitHub. In the alert it showed how to update the code. I always pay attention to that.

As well, when I get the chance to, I refactor code when I know of a more efficient way to accomplish a code's purpose.


4. How would you improve the Zomato API that you just used?
Have more examples of the url structure, offer common developer usage stats and scenarios, and expand on the future mission plans for the API. I would also have the YouTube channel offer real coding run throughs for the API.


5. Please describe yourself using JSON.
{
	person: {
				"knowledge" 	: 	["music", "fine art", "web design"],
				"birth_place" 	: 	"Earth",
				"skill" 		: 	"Simultaneous head patting and tummy rubbing",
				"phone_num"		: 	8675309
				}
}


Notes
- I unfortunately can't have the data loaded onto the page anymore, and do not know why. The page takes forever to load with a "Waiting for localhost" message on the screen. Eventually I see a timeout msg:
"This page isn’t working
localhost didn’t send any data.
ERR_EMPTY_RESPONSE"


## Developer: 
<3 Mekesia ([@Githubbubber](https://github.com/Githubbubber) - I had lots of fun working on this app, and we hope you have lots of fun using it.

## License
N/A

## References:
- The Zomato API documentation, which was sparse!
- Services (job queues, cache servers, search engines, etc.)
- [Tutorial on YouTube by Traversy Media](https://www.youtube.com/watch?v=nqT8c5OFjEQ)
