# Weatherman

Weatherman is a web application to compare the weather data of diffrent APIs.
It consists of two diffrent parts: a **Spring-Boot** back-end and **Angular** front-end.

## Installation

The two main components (client & server) of this project are managed as seperate entities. The installation and useage manuals are located in their respective directories.

## Notes & issues I encountered

###### V1

* Setup notes
	- Fresh Win10 Pro N
	- IntelliJ, Np++, Spring-Boot 2.7.3, Maven 3.8.6, Node.js, VSCode, Git
		- node packages: tailwind, angular CLI,
		- other tools: Initializr* (base project was made using it)

* Issues with importing Jackson for handling JSON, particularly with ObjectMapper (MASSIVE TIMESINK)
	- Attempting to downgrade JDK from 19.x to 18.x
	- Attempted to swap from Gradle to Maven, didn't fix but ended up sticking with Maven.
	- Tried to make my project use a local .jar of the Jackson library (tried diffrent versions of it) instead of importing it as a External Library with Maven.
	- Ended up giving up and went with a plain "import org.json.JSONObject;"

* Was considering two seperate repositories at first, but looked around and saw that alot of existing similar projects were managed under one repo.

* Ran into CORS issue once I got my Angular front-end communicating with Spring-Boot back-end.

* Setting up Tailwind required me to make sure the content path being pointed to at tailwind.config.js matches the project tree.

* Tried to set-up the Spring 5 "WebClient", since the syntax for it looked more intuitive, but failed. Resorted to RestTemplate.

* Original idea to make comparisons between the diffrent API-s included using modals. Couldn't get modals to work properly due to time constraints, so I went with a basic table instead.

* met.no API rejected queries which had a "User-Agent", "Java 19". A working fix would've required too much time, went with OpenWeatherAPI instead.

###### V2

* Thought about how to save data about each of the Apis being used (the url and key).
	- Went with a hashmap saving the Api commonname as the key and an instance of the class "Api" as it's value, this makes adding additional API endpoints easier later on, if desired so.
	- The object made from the class "Api" has the following attributes: 1) URL 2)Key
	- The object made from the class "Api" has the following methods:
		- getApiKey() - Returns the Api key
		- getApiUrl() - Returns the Api URL

* Wanted to tackle the interactive map where a user can select a point on the map and it would fill in the latitude and longitude values of the form.
	- Tried various npm libraries, ended up going with the "@angular/google-maps".
	- Had to setup an API key to interact with it.
	- Used a @Output decorator and made clicks on the map component emit events with data.
	- Set up a listener for said event in the home component and trigger a method which overwrites the formBuilder values.

* Ran into the error: "Cannot find namespace ‘google’." when trying to fix up tests.
	- The solution to that was to install the @types/google.maps npm package and include it in both "tsconfig.spec.json" and "tsconfig.app.json".

* Since the "google-maps" component is from an external source and requires some sort of a workaround, I decided to exclude the "google-maps-demo" component from being tested.
	- Tried to add the source to my local files ("tests/google-maps-api.js") and 
	- Added said component directory to "codeCoverageExclude" in the "angular.json" file.