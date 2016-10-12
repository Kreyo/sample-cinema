# Sample online cinema application
## Installation
- git clone https://github.com/Kreyo/sample-cinema.git
- go to the folder containing the cloned code
- npm install
- gulp
- if you don't have MongoDB running locally, visit https://docs.mongodb.com/manual/administration/install-community/
- you can use the existing database dump from the dump folder
- change the databaseHost, databasePort and databaseName parameters in index.js
- enjoy your day! (or use node index.js and visit your localhost on port 3000) .
- tests are available via Mocha - just run mocha command in the project folder, and it should run one sample test.

## Features
- Movie list and details
- Several static pages
- Authorization and Registration

## Technology stack
- Node.js
- Express.js for API routing and index route
- ReactJS for frontend rendering
- React-router for template generation
- Mocha and Chai for unit testing