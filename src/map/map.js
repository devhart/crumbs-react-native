import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  MapView,
  TouchableHighlight,
  Text
} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          showsUserLocation={true}
          followUserLocation={true}
        />
        <TouchableHighlight
          style={ styles.button }
          onPress={ () => console.log('Navigate to the chat room') }>
          <Text style={ styles.buttonText }>Enter Chat Room</Text>
        </TouchableHighlight>
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
