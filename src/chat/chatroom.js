import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ListView,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

const PULLDOWN_DISTANCE = 40;

export default class Chatroom extends Component {
  getInitialState() {
    // Match to server listener
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    

    this.state = {
      messages: null,
      location: '37.7837-122.4090',
      demoMode: true,
      userLoggedIn: false,
    }
    
    this.socket.on('connect', () => {
      this.socket.emit('getChats');
    })

  }

  componentWillMount() {
    this.getChannelList(1);
  }

  // onChatroomPress(url) {
  //   console.log(url);
  // }

  // getChatroomList(page) {
  //   if (page == 0) {
  //     return;
  //   }
  //   this.socket.emit('getChats', 'no data')
  // }

  render() {
    return (
      <View style={styles.container}>
        <Text>Chatroom!</Text>
        <Text>{this.state.}
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  }
});
