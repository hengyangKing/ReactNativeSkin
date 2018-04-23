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
//引入外部组件
var Main = require("./Component/Main.js");


type Props = {};
export default class App extends Component<Props> {
  render() {
  	console.log("render");

    return (
      <Main />
    );
  }
}



