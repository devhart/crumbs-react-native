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
  constructor(props) {

    super(props);

    this.state = {
      messages: null,
      location: '37.7837-122.4090',
      demoMode: true,
      userLoggedIn: false,
    }

    props.socket.on('test from server', () => console.log('xxxx client received server test'));
    console.log('props are:', props);
  }


  // componentWillMount() {
  //   this.getChannelList(1);
  // }

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
        <Text>Chatroom Take 2</Text>
        <Text>{this.state.location}</Text>
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
