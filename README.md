<img src="https://ia601509.us.archive.org/0/items/cookie_201608/cookie_thumb.jpg" height="60"> Crumbs
=========================================
Stumble upon geo-cached chatrooms and join the conversation with this location-based chat application.

### [Server and Web Client](https://github.com/devhart/crumbs)

### [Mobile App](https://github.com/devhart/crumbs-react-native)

<img src="https://archive.org/download/crumbs-login/crumbs-login.png" width="350">  <img src="https://archive.org/download/crumbs-apple/crumbs-apple.png" width="350">  <img src="https://archive.org/download/crumbs-conversation/crumbs-conversation.png" width="350">

Table of Contents
--------------------------
- [Getting Started](#getting-started)
 - [Prerequisites](#prerequisites)
 - [Installation](#installation)
 - [Starting the Server](#starting-the-server)
 - [Starting the Mobile App](#starting-the-mobile-app)
- [Built With](#built-with)
- [Contributions](#contributions)
- [Authors](#authors)
- [License](#license)
- [Acknowledgements](#acknowledgements)


Getting Started
--------------------------
### Prerequisites
- <img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png" height="17">&nbsp;[Node.js 6.0+](http://nodejs.org)

- Mobile Dependencies (Mac OSX)
 - <img src="http://a2.mzstatic.com/us/r30/Purple30/v4/f3/d4/1f/f3d41fc1-0925-f078-c19e-ce00e6d724bf/icon128-2x.png" height="17">&nbsp;[Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) `xcode-select --install`

### Installation
1. Clone the web and server code `git clone https://github.com/devhart/crumbs.git`
2. Clone the mobile code `git clone https://github.com/devhart/crumbs-react-native.git`

### Starting the Server:
1. Navigate to `crumbs` folder in the terminal
2. Run `npm install`
3. Run `npm run dev`
 - Launches watched instance of server with Nodemon
3. Navigate to `http://localhost:3000/` in browser

### Starting the Mobile App:
1. Start server
2. Navigate to `crumbs-react-native` folder in the terminal
3. Enter `react-native run-ios` to [launch the simulator](https://facebook.github.io/react-native/docs/running-on-simulator-ios.html)


Built With
--------------------------
* **Web Client:** React, Webpack
* **Mobile App:** React-Native, Maps
* **Server:** Node.js, Express, Mongoose
* **Storage:** MongoDb


Contributions
--------------------------
If you have any problems or major improvements, please consult the known issues. If you do not see your problem captured, please file a new issue. Pull requests adhering to the 
[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) are always welcome.


Authors
--------------------------
* [Dennis Ting]() ([dting](https://github.com/dting))
* [Hannah Henderson](https://www.linkedin.com/in/hahenderson) ([hannahhenderson](https://github.com/hannahhenderson))
* [James Ramadan](https://www.linkedin.com/in/james-ramadan) ([jamesramadan](https://github.com/jamesramadan))
* [Wayne Adams](https://www.linkedin.com/in/wayneladams) ([wayneadams](https://github.com/wayneadams))


License
--------------------------
The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


Acknowledgements
--------------------------
* Special thanks to the HR Crumbs Team for providing [the initial concept](https://github.com/HRCrumbs/crumbs)
