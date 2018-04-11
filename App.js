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
      {/*flexDirection */}
      <View style={viewStyles.container}>
        <Text style = {{}}>*********flexDirection:"row" 属性********</Text>
        <View style={viewStyles.box1}>
          <Text>1</Text>
          <Text>2</Text>
          <Text>3</Text>
        </View>

        {/*justifyContent */}
        <Text style = {{marginTop:20}}>*********justifyContent & alignItems 属性********</Text>
        <View style = {viewStyles.box2}>
          <Text style = {{height:20,backgroundColor:"green"}}>box2-0</Text>
          <Text style = {{height:30,backgroundColor:"#010101"}}>box2-1</Text>
          <Text style = {{height:40,backgroundColor:"#eeeeee"}}>box2-2</Text>
          <Text style = {{height:50,backgroundColor:"#6e6e6e"}}>box2-3</Text>
        </View>

        {/*flexWrap */}
        <View style = {{marginTop:20,backgroundColor:"red"}}>
        <Text style = {{marginTop:20}}>*********flexWrap 属性********</Text>
          <View style = {viewStyles.flex_wrap}>
            <Text style = {{width:120,backgroundColor:"green"}}>box2-0</Text>
            <Text style = {{width:230,backgroundColor:"yellow"}}>box2-1</Text>
            <Text style = {{width:240,backgroundColor:"#eeeeee"}}>box2-2</Text>
            <Text style = {{width:250,backgroundColor:"#6e6e6e"}}>box2-3</Text>
          </View>
        </View>
          <Text>在默认情况下 项目都排在一条线上,flex-wrap属性定义 ，如果一条轴线无法排列，如何进行换行</Text>
          <Text>分为 warp / no warp / warp-reverse</Text>
        </View>

        <View style = {viewStyles.description}>
          <Text>flexDirection 定义元素的主轴方向</Text>  
          <Text>justifyContent 定义伸缩项目在主轴线的对其方式</Text> 
          <Text>alignItems 定义项目在侧轴上的对其方式</Text>   
        </View>
        
    );
  }
}

var viewStyles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#F5FCFF',
    justifyContent : "center",
  },
  box1 : {
    marginTop:20,
    backgroundColor:"green",
    flexDirection:"row",
    justifyContent : "space-between",
  },
  box2 : {
    marginTop :30,
    backgroundColor:"yellow",
    flexDirection:"row",
    alignItems:"center"

  },
  description : {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex_wrap : {
    flexDirection:"row",
    flexWrap:'wrap',

  }, 
});


