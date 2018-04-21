import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
} from 'react-native';
//引入外部组件


type Props = {};
export default class Find extends Component<Props> {
  render() {
    return (
    	<View style = {{flex:1,backgroundColor:"red",justifyContent:"center",alignItems:'center'}}>
           <Text>Find</Text> 
    	</View>
    );
  }
}

// 输出类
module.exports = Find;