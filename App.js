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

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
//饮用外部类库
var Dimensions = require("Dimensions");
export default class App extends Component < Props > {
  render() {
    return (
      //alignSelf:auto/flex-start/flex-end/baseline/stretch
      // align-self 允许单个项目有与其他项目不一样的对其方式，可覆盖align-items属性 
      // 默认值为auto ，表示继承align-items属性，如果没有父元素 则等于stretch
      <View style = {viewStyles.boxStyle}>
        <Text style = {{alignSelf:"flex-end"}}>当前屏幕的宽度:{Dimensions.get('window').width}</Text>
        <Text>当前屏幕的高度:{Dimensions.get('window').height}</Text>
        <Text>当前屏幕的分辨率:{Dimensions.get('window').sc}</Text>

        <View>
          {/*从项目中加载图片*/}
          <Text>1.从项目中加载图片</Text>
          { <Image source={require('./img/icon.png')} style={viewStyles.imageStyle} />}

          {/*从资源包中加载图片*/}
          <Text>2.从APP中加载图片</Text>
          {/*<Image source={require('image!bd_logo1')} style={styles.imageStyle}/>*/}
          

          {/*从网络中加载图片*/}
           <Text>3.从网络中加载图片</Text>
          {/*<Image source={{uri: 'http://www.520it.com/userfiles/1/images/cms/site/2015/09/index_06.jpg'}}  style={styles.imageStyle} />*/}

          {/*从资源包中加载图片--另一种方式*/}
          <Text>4.从APP中加载图片</Text>
          {/*<Image source={{uri: 'bd_logo1'}} style={styles.imageStyle} />*/}

        </View>

      </View> 
    );
  }
}

var viewStyles = StyleSheet.create({
  boxStyle: {
    backgroundColor: "#eeeeee",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  imageStyle : {
      width:160,
      height:160,
      // 圆角
      // borderRadius:30

      // 设置图片的内容模式
      resizeMode:'cover'
      // resizeMode:'contain'
      // resizeMode:'stretch'
  }
});