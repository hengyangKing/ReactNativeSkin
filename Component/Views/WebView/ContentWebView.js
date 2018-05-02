import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    WebView,
} from 'react-native';
// var TimerMixin = require('react-timer-mixin');
// let data = require('./data/ImageData.json').data;
// let Dim = require('Dimensions')
let {width,height} = require('Dimensions').get("window");
var WEBVIEW_REF = 'webview';

type Props = {};

export default class ContentWebView extends Component<Props> {
	
	// ES6初始化 构造函数 
	constructor(props) {
    	super(props);
    	this.state = {
    		// currentPage:0,
    		// title:this.props.datas[0].title,
  		};
  	}

	//在rander 方法调用后 组件加载成功并成功被渲染出来以后，要执行的后续操作，
  	componentDidMount(){

  	}
	render() {
  		return (
      		<View>
      			{this.renderAddWebView()}
      		</View>
    	);

  	}

	renderAddWebView(){
  		
  		return <WebView
	          		automaticallyAdjustContentInsets={true}
	         		style={styles.webView}
	          		source={{uri:this.props.URL}}
	          		javaScriptEnabled={true}
	          		domStorageEnabled={true}
	          		startInLoadingState={true}

  				/>;
	}
	onShouldStartLoadWithRequest(event){
    	// Implement any custom loading logic here, don't forget to return!
    	return true;
 	};

  	onNavigationStateChange(navState){
    
 	};
}
//设置固定值 对应ES5 getDefaultProps
ContentWebView.defaultProps = {
 	uri:"www.baidu.com",
};

const styles = StyleSheet.create({
	webView:{
   		flex:1,
	},
	
});
module.exports = ContentWebView;