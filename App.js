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

export default class App extends Component < Props > {
  render() {
    return (
      <View style = {viewStyles.container}>
        {/*返回6个包*/}
        {/**/}
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
        <View style = {cellStyle.box}>
          {/*<Image source = {{uri :badge.icon} style={cellStyle.imageStyle} ></Image>*/}
          <Text style = {cellStyle.title}>{badge.title}</Text>
        </View>
      );
    }
  }
}

var viewStyles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor:'#f5fcff'
  }
});
var cellStyle = StyleSheet.create({
  box : {
    flex:1,
  },
  imageStyle : {
    flex:1,
  },
  title : {
    flex:1,
  },
});