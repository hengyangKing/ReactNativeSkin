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
/**********************第一个示例程序****************************/
export default class App extends Component<Props> {
  render() {
    return (
      //alignSelf:auto/flex-start/flex-end/baseline/stretch
      // align-self 允许单个项目有与其他项目不一样的对其方式，可覆盖align-items属性 
      // 默认值为auto ，表示继承align-items属性，如果没有父元素 则等于stretch
      <View style = {{backgroundColor:"yellow",flexDirection:"row",alignItems:"center"}}>
        <View style = {{height:300,flex:3,backgroundColor:"red",}}>
          
        </View>
        <View style = {{height:200,flex:1,backgroundColor:"orange",alignSelf:"flex-start",}}>
          
        </View>
        <View style = {{height:100,flex:1,backgroundColor:"#eeeeee",}}>
          
        </View>
      </View>
    );
  }
}

var viewStyles = StyleSheet.create({
  
});


