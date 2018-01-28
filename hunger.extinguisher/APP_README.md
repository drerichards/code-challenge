1. How long did you spend on this technical challenge? What would you add to your solution if you had more time?
I spent approximately 8 hours on this challenge. I would add more endpoints, setup a backend to store favorite restaurants or searches.
2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
I built this with PHP 7.1. I don't know of any specific features from 7.0 to 7.1 but from 5.6 to 7.* I like return types for methods, this really helps with determining what is going on  within a class and definitely helps with readability. Ex:
```
class ThisClass 
{
	/**
	* Does Something
	*
	* @return Collection
	*/
	public function $doesSomething(): Collection
	{
		//execute code
	}
}
```
3. How would you track down a performance issue in production? Have you ever had to do this?
The first step would be to recreate the issue. Whatever the problem, if it is well documented, I should be able to replicate. Even if not well documented, having a stacktrace for an error will help. After replicating, I use stacktraces and read through logs to figure out where in the process, this bug may have emerged. I also always backup original files or use Git/Bitbucket for Version Control. This may also be caused by inadequate testing so improving tests will also take place.
4. How would you improve the Zomato API that you just used?
Explictly mention on the documentation page (somewhere at the top) the api url. This is borderline common sense but it will help with those who aren't familiar with APIs. I will also add examples for the calls for each url. I will add the example above the header params list.
5. Please describe yourself using JSON.
{
	"name":"Margaret",
	"description": "PHP Web Developer, exploring."
	"version": 2.1.0,
	"aspirations": {
		"present": [
			"Time Management",
			"Advance PHP Knowledge",
			"Advance Java Knowledge",
			"Life Control"
		],
		"future": [
			"Application Effeciency",
			"Throurough OOP Knowldge",
			"Software Development",
			"Entrepreneurship",
			"Advanced Financial Literacy",
			"Contentment"
		]
	}
}