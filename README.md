# BuildNG
## Pre-interview Technical Challenge

khalilhughes-pilot-interview branch

### Platform Choice

- Python (Flask) on Backend
- Node (React, Redux, Router) on Frontend
- css (Bootstrap) on Frontend

- I chose Flask because I haven't used it much and wanted to see if I could get it to run a single page application.
- I love using React, and knew that I would be handling all of the requests to Zomato in the backend. Using React I could focus on just building a Frontend client.

- For UX I chose Bootstrap, Mainly used it to create a simple container to so that the application was bit more presentable.

### Installation
- Should already have Python 3 and Node installed.

- cd code-challenge
- pip3 install -r requirements.txt
- python3 script.py

# if you are using a virutalenv
- virtualenv -p python3.5 code-challenge
- cd code-challenge
- pip install -r requirements.txt
- python script.py

## Technical questions

Please include answers to the following questions in your `APP_README.md` markdown file.

1. How long did you spend on this technical challenge? What would you add to your solution if you had more time?

- About 17 hrs spread over 3 days.

2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

- In the math library for Python, Tau has been which is about 6.28.

import math

findCircumference(radius):
  return math.tau * radius

3. How would you track down a performance issue in production? Have you ever had to do this?

- In this application I would start by checking the response times for client users each time a request is sent to backend.

- I have not had to this yet, but I have built other forms of analytics before.

4. How would you improve the Zomato API that you just used?

- I'd create a postman collection for the API so developers would be able to test it more easily.
- Next I'd write better documentation. And have pre filled inputs for users to try.
- Also the API is missing POST routes to add reviews and restaurants, that implies that I can't build a fully functional client into their API.

5. Please describe yourself using JSON.

{
  "person": {
    "name": "Khalil Hughes",
    "age": "22",
    "interests": [
      "Philosophy",
      "Computer Science",
      "Universal Basic Income",
      "Characteristica Universalis",
      "General Artificial Intelligence"
    ],
    "hungerLevel": "20%",
    "bladderLevel": "80%",
  }
}

#### Thanks for your time, I look forward to meeting with you!
- Khalil Hughes
