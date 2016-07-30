import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Image,
  AsyncStorage,
} from 'react-native';
import Hyperlink from 'react-native-hyperlink';
import styles from './login.styles';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.props.socket.on('Authentication', username => { 
      try {
        AsyncStorage.setItem(this.props.storage_key, username).then(message => {
          AsyncStorage.getItem(this.props.storage_key).then(result => {
            console.log('successfully set username to: ' +  result);
            this.props.navigator.push({
              name: 'map',
            });
          })  
        });
      } catch (error) {
        console.log('there was an error' + error);
      }
    });
  }

  onLinkPress() {
    this.props.navigator.push({
      name: 'signup',
    });
  }

  validateUser() {
    this.props.socket.emit('validateUserLogin', { 
      username: this.state.username,
      password: this.state.password,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <Image source={require("./cookie.jpg")} />
          <Text style={styles.header}> Crumbs </Text>
          <TextInput
            style={styles.input}
            value={this.state.username}
            onChangeText={(text) => this.setState({ username: text })}
            placeholder={'Enter Username'}
            maxLength={12}
            multiline={false}
          />
          <TextInput
            style={styles.input}
            value={this.state.password}
            onChangeText={(text) => this.setState({ password: text })}
            placeholder={'Enter Password'}
            maxLength={12}
            multiline={false}
          />
          <TouchableHighlight
            style={styles.button}
            underlayColor={'#328FE6'}
            onPress= {() => this.validateUser()}
          >
            <Text style={styles.label}>LOGIN</Text>
          </TouchableHighlight>
          <Hyperlink>
            <View>
              <Text style={{ fontSize: 15 }}>
                Not a member? <Text onPress={() => this.onLinkPress()} style={{color: 'blue', fontSize:15}}>Create a Profile</Text>
              </Text>
            </View>
          </Hyperlink>
        </View>
      </View>
    );
  }
}
