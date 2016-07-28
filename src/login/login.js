import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput
} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style = {styles.container}>
     <Text style={{backgroundColor: 'orange', color: 'black', fontSize: 40}}>Crumbs</Text> 
     <Text style={{backgroundColor: 'orange', color: 'black', fontSize: 40}}>Login</Text> 
     <TextInput type= "TextInput" style={{ backgroundColor: 'blue', height: 60 }} value={'Username'}/>
     <TextInput type= "TextInput" style={{ backgroundColor: 'blue', height: 60 }} value={'Password'}/> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87CEEB',
  },
});

 // <View style={styles.container}>
      //  <Text style={{backgroundColor: 'orange', color: 'black', fontSize: 40}}>Crumbs</Text> 
      //  <Text style={{backgroundColor: 'orange', color: 'black', fontSize: 40}}>Login</Text> 
      //  <TextInput type= "TextInput" name= "username" style={{ backgroundColor: 'blue', height: 60 }} value={'Username'}/>
      //  <TextInput type= "TextInput" name= "password" style={{ backgroundColor: 'blue', height: 60 }} value={'Password'}/> 