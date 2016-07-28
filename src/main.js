import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator
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
  chatroom: Chatroom
}

const defaultRoute = 'chatroom'; // adjust for testing

export default class Crumbs extends Component {
  constructor(props) {
    super(props);
    this.socket = io('http://localhost:3000', ioConfig);
    this.socket.on('connection', () =>
      console.log('client connected');
      this.socket.emit('goClient', () =>
        console.log('emitted from the client');
      )
    )
  }

  renderScene(route, navigator) {
    const Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />; 
  }

  render() {
    return (
      <Navigator
        style={ styles.container }
        initialRoute={{name: defaultRoute}}
        renderScene={this.renderScene}
        configureScene={ () => { return Navigator.SceneConfigs.FloatFromRight; } }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
});
