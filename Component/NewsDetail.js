import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
} from 'react-native';
//引入外部组件


type Props = {};
export default class NewsDetail extends Component<Props> {
  render() {
    return (
    	<View style = {{flex:1,backgroundColor:"#f3f3f3",justifyContent:"center",alignItems:'center'}}>
           <Text>NewsDetail</Text> 
    	</View>
    );
  }
}

// 输出类
module.exports = NewsDetail;