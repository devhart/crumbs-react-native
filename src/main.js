



import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator,
} from 'react-native';

window.navigator.userAgent = 'react-native';

const io = require('socket.io-client/socket.io');
const ioConfig = {
  jsonp: false,
  transports: ['websocket'],
};

import Login from './login/login';
import Map from './map/map';
import Chatroom from './chat/chatroom';
import Signup from './login/signup';

const ROUTES = {
  login: Login,
  map: Map,
  chatroom: Chatroom,
<<<<<<< 99c6c65e5f866749b10033cb663716fca8765b02
  signup: Signup
};

const defaultRoute = 'login'; // adjust for testing

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
});
=======
};

const defaultRoute = 'map'; // adjust for testing
>>>>>>> Adds Geolocation api

export default class Crumbs extends Component {
  constructor(props) {
    super(props);
    this.socket = io('http://localhost:3000', ioConfig);
    this.socket.emit('test from client');
    this.renderScene = this.renderScene.bind(this);
  }

  renderScene(route, navigator) {
    const Cponent = ROUTES[route.name];
    return <Cponent route={route} navigator={navigator} socket={this.socket} />;
  }

  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{ name: defaultRoute }}
        renderScene={this.renderScene}
        configureScene={() => Navigator.SceneConfigs.FloatFromRight}
      />
    );
  }
}
