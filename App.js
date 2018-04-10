/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,


} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
            Welcome to React Native！
            啦啦啦

        </Text>

        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>

        <Text style={styles.instructions}>
          {instructions}
        </Text>

        <Text style = {styles.welcome}>
              你好世界123456
        </Text>
        <Text>
          
        </Text>
        <View style = {styles2.viewStyle}>
          <Text style = {styles2.textStyle}>
            123
          </Text>
        </View>
      </View>
    );
  }
}
var styles2 = StyleSheet.create({
  viewStyle : {
    width:200,
    height:100,
    backgroundColor:"red"
  },
  textStyle : {
    flex:1,
  }
})


const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    flexDirection:"column",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
