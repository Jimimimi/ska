# README #

### Dependencies ###
* [node.js](https://nodejs.org/en/)

### Build steps ###

#### Clone the repository ####

`git clone git@github.com:jimimimi/ska.git`


#### Install Gulp ####

`npm install -g gulp`


#### Install dependencies ####

`cd ska && npm install` (mock API dependencies)
`cd client/vendor && npm install` (front-end dependencies)


#### Build source ####
`cd ../..` (back to Ska root)


`npm build`


#### Run the mock server ####

`npm start`

#### All done ####

Navigate your web-browser to `http://localhost:3000`
