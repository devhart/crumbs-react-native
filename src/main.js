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

const ROUTES = {
  login: Login,
  map: Map,
  chatroom: Chatroom,
};

const defaultRoute = 'map'; // adjust for testing

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default class Crumbs extends Component {
  constructor(props) {
    super(props);
    this.socket = io('http://localhost:3000', ioConfig);
    this.socket.emit('test from client');
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
        renderScene={() => this.renderScene()}
        configureScene={() => Navigator.SceneConfigs.FloatFromRight}
      />
    );
  }
}
