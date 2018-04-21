import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
} from 'react-native';
//引入外部组件


type Props = {};
export default class Massage extends Component<Props> {
  render() {
    return (
    	<View style = {{flex:1,backgroundColor:"blue",justifyContent:"center",alignItems:'center'}}>
           <Text>Massage</Text> 
    	</View>
    );
  }
}

// 输出类
module.exports = Massage;