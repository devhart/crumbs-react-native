import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  MapView,
  TouchableHighlight,
  Text
} from 'react-native';

export default class Map extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    // this gets set by some parent view's location-chatRoom status
    currentChatRoomId: '',
    lastPosition: {}
  }

  componentDidMount() {
    this.watchID = navigator.geolocation.watchPosition((position) => {
      var coordStr = this.createChatRoomId(position.coords);
      if (coordStr !== this.state.lastPosition ) {
        console.log('moved to a new chatRoom at', coordStr)
        this.setState({
          lastPosition: coordStr
        });
      }
    }, {enableHighAccuracy: true});
  }

  createChatRoomId(coordObj) {
    var latStr = (Math.trunc(coordObj.latitude * 1000)/1000).toFixed(3).toString();
    var lngStr = (Math.trunc(coordObj.longitude * 1000)/1000).toFixed(3).toString();
    return latStr + lngStr;
  }

  createNewChatRoom() {
    console.log('creating new chat room...')
    // do some stuff to create a room socket
    // this.props.navigator.push({
    //   name: 'chat'
    // })
  }

  enterExistingChatRoom() {
    this.props.navigator.push({
      name: 'chatroom'
    });
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
              onPress={() => this.enterExistingChatRoom()}>
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
