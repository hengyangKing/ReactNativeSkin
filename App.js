/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
	ScrollView,  
	Text,
	Image,



} from 'react-native';

// var TimerMixin = require('react-timer-mixin');
let data = require('./data/ImageData.json').data;
// let Dim = require('Dimensions')
let {width,height} = require('Dimensions').get("window");
type Props = {};
export default class App extends Component<Props> {

	// ES6初始化 构造函数 
	constructor(props) {
    	super(props);
    	this.state = {currentPage:0};

  	}

	render() {
  		return (
      		<View>
      			{this.renderAddBanner()}
      		</View>
    	);

  	}

	renderAddBanner(){
  		
  		return [
  				<ScrollView 
  					horizontal = {true}
  					key = {101}
  					style = {styles.container}
  					showsHorizontalScrollIndicator = {false}
  					pagingEnabled = {true}
  					onMomentumScrollEnd = {this.onAnimationEnd.bind(this)}
  				>
  					{this.renderImages()}
				</ScrollView>,
				//返回焦点
				<View style = {styles.pageControl} key = {102}>
					{this.renderPageControls()}
				</View>
				];
	}
	renderImages(){
		var images = [];
		for (var i = 0; i < data.length; i++) {
			//imagesArr[i].img
			images.push(
				<Image 
					key={i}
					source={{uri:data[i].img}} 
					style={{width:width,height:200}} 
				/>
			);
		}
		return images;
	}
	renderPageControls(){
		var controls = [];
		for (var i = 0; i < data.length; i++) {
			style = (i == this.state.currentPage)?{color:"orange"}:{color:"#ffffff"};
			controls.push(
				<Text 
					style = {[{fontSize:30},style]}//实现多样式表
					key = {i}
					onClick = {this.onPageControlClick.bind(this)}
				>
					&bull;
				</Text>
			);
		}
		return controls;
	}
	//当一帧滚动结束的时候调用
	onAnimationEnd(event){
		// //偏移量
		var offsetX = event.nativeEvent.contentOffset.x;
		var page = Math.floor(offsetX / width);
		this.setState({currentPage:page})
	}
	onPageControlClick(event){
		console.log(event.key)


	}
  	//注册计时器
  	mixins:[TimerMixin]
}

const styles = StyleSheet.create({
	container:{
		marginTop:20,
	},
	pageControl:{
		position:"absolute",
		backgroundColor:"rgba(241,241,241,0.8)",
		width:width,
		height:30,
		bottom:0,
		flexDirection:"row",
		alignItems:"center",
	}

});




