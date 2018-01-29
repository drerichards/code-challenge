# zomato

Installation:
    Navigate into the Zomato project folder and type ‘npm install’ in the terminal
    Create a file named ‘config.js’ in the ‘src’ folder. Enter: exports.USER_KEY = ‘{Your Zomato API key}’
    From the terminal start the application with ‘npm start’.

Architecture and UX:
    Languages Used:
        Html, CSS, Javascript
    
    Frameworks/Libraries Used:
        React – I chose React in order to show my knowledge of a popular library which may prove useful to the WBB team should I be taken on. But from a technical      standpoint, I knew that the app would have one main function (get and show data), so I used it because of its ability to manage and store incoming API      data in a central location and disperse it as needed. The task from there was to set up the components to receive and manipulate from there. This only      aided easier maintenance and overall cleaner, compartmentalized code. 
       
       PropTypes – I used this to keep track of the passage of specific props from parent to child components. Lastly, I chose React because of its quick              rendering of elements and only updating ones that incurred changes in state. 
       
        Materialize – I chose Materialize to give a polished look to the overall presentation of UI elements in a short amount of time. 

1.	How long did you spend on this technical challenge? What would you add to your solution if you had more time? 
    The app took roughly week but would have taken less time had not large chunks of time been spent at work.
    If I had more time, I would have added a loader to the search feature and messaging to inform the user in no results were found.
    I also would have created a splash page that displayed the restaurant collections based upon the user’s current location.
    I pulled geo coordinates in my fetch to show the restaurant location on google maps but apparently the API doesn’t work well with React v16. NPM packages gave headaches.

2.	What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
    I found the ErrorBoundary feature for React v16 to be useful since it catches errors that happen in individual component groups and shows an error message rather than causing the entire app to crash as would happen in v15. Plus the error messages are less cryptic.

/////////////////////
	class ErrorBoundary extends Component {    constructor(props) {        super(props)        this.state = { error: null, errorInfo: null }    }    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {
        if (this.state.errorInfo) {
            // Error path
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            )
        }
        // Normally, just render children
        return this.props.children
    }
}

export default ErrorBoundary
//////////////////////

3.	How would you track down a performance issue in production? Have you ever had to do this?
No never had to do this. But from my research, I can see that most issues can be resolved before production with code review by leads and testing. People tend to incorporate code and fixes in their applications without fully understanding the documentation which could highlight conflict with other code or packages. Sometimes it may require staying up to date on patches and updates on certain packages that could also cause issues and need re-factoring. Proper planning of load distribution could also help with the server’s ability to manage traffic. The developer tools (Network) so far has been helpful for me in my minor production projects to track connectivity issues, response times, and HTTP errors.

4.	How would you improve the Zomato API that you just used?
For one, I would allow pictures for free users because it would have made my app look 10x cooler. I wish they would have provided a chart listing the city and cuisine codes instead of having the user to do API calls to find them.

5.	Please describe yourself using JSON.
{
  "name": "Andre",
  "home": "Brooklyn",
  "hometown": "Palm Beach
  "occupation": "Software Engineer",
  "skills": {
    "front_end": ["HTML", "CSS", "Javascript", "React", "Redux"],
    "back_end": ["Node/Express"],
    "database": ["NoSQL", "MongoDB", "Mongoose"]
  },
  "interests": ["Travel", "Wikipedia", "Google Earth", "Drawing", "Food", "Road Trips"]
}
