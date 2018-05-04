/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    

} from 'react-native';
let Main = require('./Component/Main/Main.js');



type Props = {};
export default class App extends Component<Props> {
  render() {
	 return this.Main();
  }
  Main(){
  	return (
      <Main />
    );
  }
  
}



