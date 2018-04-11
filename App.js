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
      // 在组件样式中使用flex可以使其在可利用的空间中动态地扩张或收缩。
      // 一般而言我们会使用flex:1来指定某个组件扩张以撑满所有剩余的空间。
      // 如果有多个并列的子组件使用了flex:1，则这些子组件会平分父容器中剩余的空间。
      // 如果这些并列的子组件的flex值不一样，则谁的值更大，
      // 谁占据剩余空间的比例就更大（即占据剩余空间的比等于并列组件间flex值的比）
      <View style = {{height:300,backgroundColor:"yellow",flexDirection:"row"}}>
        <View style = {{flex:3,backgroundColor:"red",}}>
          
        </View>
        <View style = {{flex:0.1,backgroundColor:"orange",}}>
          
        </View>
        <View style = {{flex:0.1,backgroundColor:"#eeeeee",}}>
          
        </View>
      </View>
    );
  }
}

var viewStyles = StyleSheet.create({
  
});


