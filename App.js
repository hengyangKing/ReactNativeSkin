/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

//倒入json数据
var badgeData = require('./BadgeData.json');
var dimensions = require('Dimensions');
var width = dimensions.get('window').width;

//定义全局变量
var cols = 3;
var boxWidth = 100;
var margin = (width - (cols*boxWidth))/(cols+1);


export default class App extends Component < Props > {
  render() {
    return (
      <View style = {viewStyles.container}>
        {/*返回6个包*/}
        {this.renderBadge()}
      </View>
    );
  }

  //返回所有的包
  renderBadge() {
    //定义数组 承载所有值组件
    var allBadge = [];
    
    for (var i = 0; i < badgeData.data.length; i++) {
      var badge = badgeData.data[i];
      allBadge.push(
        <View key = {i} style = {cellStyle.box}>
          <Image source = {{uri :badge.icon}}style = {cellStyle.imageStyle}/>
          <Text style = {cellStyle.title}>{badge.title}</Text>
        </View>
      );
    }
    return allBadge;
  }
}

var viewStyles = StyleSheet.create({
  container : {
    backgroundColor:'#f5fcff',
    flexDirection: 'row',
    flexWrap:'wrap',//换行显示

  }
});
var cellStyle = StyleSheet.create({
  box : {
    backgroundColor:"#eeeeee",
    alignItems:"center",
    width:boxWidth,
    height:boxWidth,  
    marginLeft : margin,
    marginTop : 40,
  },
  imageStyle : {
    width:80,
    height:80,
  },
  title : {
  },
});