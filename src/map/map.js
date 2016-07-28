import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  MapView,
  TouchableHighlight,
  Text
} from 'react-native';

export default class Map extends Component {
  state = {
    chatRoomExists: false,
  }

  createNewChatRoom() {
    console.log('creating new chat room...')
  }

  enterExistingChatRoom() {
    console.log('enter existing chat room...')
    // this.props.navigator.push({
    //   name: 'chat'
    // })
  }

  render() {
    return (
      <View style={ styles.container }>
        <MapView
          style={ styles.map }
          showsUserLocation={true}
          followUserLocation={true}
        />
        {
          this.state.chatRoomExists ?
            <TouchableHighlight
              style={ styles.button }
              onPress={this.enterExistingChatRoom}>
              <Text style={ styles.buttonText }>Enter Chat Room</Text>
            </TouchableHighlight> :
            <TouchableHighlight
              style={ styles.button }
              onPress={ this.createNewChatRoom }>
              <Text style={ styles.buttonText }>Create Chat Room</Text>
            </TouchableHighlight>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1
  },
  button: {
  	height:60,
    justifyContent: 'center',
    backgroundColor: '#efefef',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
  	fontSize:20
  }
});
