# Weatherman

Weatherman is a web application to compare the weather data of diffrent APIs.
It consists of two diffrent parts: a **Spring-Boot** back-end and **Angular** front-end.

## Installation

The two main components (client & server) of this project are managed as seperate entities. The installation and useage manuals are located in their respective directories.

## Notes & issues I encountered

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