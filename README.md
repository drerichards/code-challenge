

* [A development challenge](#the-challenge)
* [A few technical questions](#technical-questions)

### Start
* npm install
* npm run start-dev
* goto localhost:3000

### User Story

As a **user running the application**  
I can **view a list of restaurants**  
So that **I know which restaurants are currently available**

As a **user running the application**  
I can **view each restaurant listed individually**  
So that **I can view details about the restaurant**

## Technical questions

Please include answers to the following questions in your `APP_README.md` markdown file.

1. How long did you spend on this technical challenge? What would you add to your solution if you had more time?
4-5 hrs. Would let the user search by city and I would also make application more user responsive. Lastly add a backend since and parse the data on the backend so the user can have their page load quicker. Redux was not needed/ it was over kill for the project but I wanted to practice. 

2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
Of the ES8 features. Object.values is useful. 

```javascript
const obj = {foo:'bar',bar:'foo'}
    // I want the values for the this object
    const values = Object.values(obj)
    // I get an array of the values 
```
Not a language but a library, React. I really enjoy using Fragments new in react 16. 
```javascript
import React, { Fragment } from 'react'
const Header = () => (
  <Fragment>
  <h1>Test</h1>
  </Fragment>
)
// on the dom I would get only the h1. I believe if used correctly fragments will let us have much more readable doms and get out of div hell when not necessary. 
```

3. How would you track down a performance issue in production? Have you ever had to do this?
As a web developer my number one tool is chrome dev tools. The time-line tool lets you the fps on your page and you can even simulate a low-end device enviroment or slow internet speed.

4. How would you improve the Zomato API that you just used?
A lot of the restaurants are missing images. Would be nice if I could toggle for ones that only show images. The nearby feature with meters does not seem to work. It said I was in New Jersey when I put 5m. Allow for search location and query with natural language instead of ids.

5. Please describe yourself using JSON.
``` JSON
{
  "name":"Brian",
  "blood-type": "O-",
  "interest": ["programming","entrepreneurship","helping others"],
  "lovesToLearn": "true",
  "passionate": "true",

}

#### Thanks for your time, we look forward to meeting with you!
- The [BuildNG team](http://github.com/BuildNG)
