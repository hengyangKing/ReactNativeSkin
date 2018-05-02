import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,


} from 'react-native';
//引入外部组件
let ContentWebView = require('./Views/WebView/ContentWebView.js');


type Props = {};
export default class NewsDetail extends Component<Props> {
  render() {
    console.log("------------------")
    console.log(this.props.data);
    return (
    	<View style = {{flex:1,backgroundColor:"#f3f3f3",justifyContent:"center",alignItems:'center'}}>
            {this.addWebView()}
    	</View>
    );
  }
  addWebView(){
    return 
        <ContentWebView
            url = {"www.baidu.com"}
        />
  }
}

// 输出类
module.exports = NewsDetail;