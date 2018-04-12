/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  Platform,
  StyleSheet,
  View,
} from 'react-native';

export default class App extends Component < Props > {
  render() {
    return (
        <View style = {viewStyles.container}>
        
        </View>
    );
}

  
var viewStyles = StyleSheet.create({
  container : {
    backgroundColor:'#f5fcff',
    flexDirection: 'row',
    flexWrap:'wrap',//换行显示

  }
});