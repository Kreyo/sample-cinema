# Sample online cinema application
[![Build Status](https://travis-ci.org/Kreyo/sample-cinema.svg?branch=master)](https://travis-ci.org/Kreyo/sample-cinema)
## Installation
- git clone https://github.com/Kreyo/sample-cinema.git
- go to the folder containing the cloned code
- npm install
- webpack
- if you don't have MongoDB running locally, visit https://docs.mongodb.com/manual/administration/install-community/
- you can use the existing database dump from the dump folder
- change the databaseHost, databasePort and databaseName parameters in index.js
- enjoy your day! (or use node index.js and visit your localhost on port 3000) .
- tests are available via Mocha - just run mocha command in the project folder, and it should run one sample test.

## Features
- Movie list and details
- Like\Dislike
- Several static pages
- Authorization and Registration
- Profile page witl movie list
- Commenting\remove comment feature

## Technology stack
- Node.js
- Express.js for API routing and index route
- ReactJS for frontend rendering
- React-router for template generation
- Mocha and Chai for unit testing
- Moment.js for date formatting
- Socket.io for comment section update

## Preview
### Movie list
![movie list](http://image.prntscr.com/image/2bb283193d7546769b541088a30210c2.png)
### Movie details
![movie_details](http://image.prntscr.com/image/a75ae8a26e87404b93d57666c09a2e9b.png)