import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
} from 'react-native';
//引入外部组件


type Props = {};
export default class Main extends Component<Props> {
  render() {
    return (
		<View style = {{flex:1,backgroundColor:"red"}}>
			
		</View>
    );
  }
}

// 输出类
module.exports = Main;