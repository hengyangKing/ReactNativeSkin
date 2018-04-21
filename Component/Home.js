import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
} from 'react-native';
//引入外部组件


type Props = {};
export default class Home extends Component<Props> {
  render() {
    return (
    	<View style = {{flex:1,backgroundColor:"yellow",justifyContent:"center",alignItems:'center'}}>
           <Text>Home</Text> 
    	</View>
    );
  }
}

// 输出类
module.exports = Home;