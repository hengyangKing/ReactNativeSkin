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

	//初始化函数

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
			controls.push(
				<Text 
					style = {{fontSize:30,color:"black"}}
					key = {i}
				>
					&bull;
				</Text>
			);
		}
		return controls;
	}

  	
  	//注册计时器
  	mixins:[TimerMixin]

  	// componentDidMount() {
   //  	this.setTimeout(() => {console.log('I do not leak!'); },500);
  	// }
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




