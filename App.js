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

	render() {
  		return (
      		<View>
      			{this.renderAddBanner()}
      			{this.renderLog()}		
      		</View>
    	);
  	}

	renderAddBanner(){
  		
  		return [
  				<ScrollView horizontal = {true} key = {101}>
  					{/*{this.renderChildView()}*/}
  					{this.renderImages()}
					
  				
				</ScrollView>
				];
	}
	renderImages(){
		var imagesArr = data;
		var images = [];
		for (var i = 0; i < imagesArr.length; i++) {
			//imagesArr[i].img
			let path = <Image key={i} source={require('./img/'+'img_01'+'.png')} style={{width:100,height:200}} />
			images.push(path);
			console.log(path)
		}
		return images;
	}
	renderLog(){
		var dataArr = data;
		var logs = [];
		for (var i = 0; i < dataArr.length; i++) {

			let path = "<Image key={i} source={require('./img/"+dataArr[i].img+".png')} style={{width:100,height:200}} />"
			logs.push(
				<View style = {{marginTop:20}} key = {i}>
					<Text>{path}</Text>
				</View>

			);
		}
		return logs;
	}

  	renderChildView(){
  		var allChild = [];
  		var colors = ["red","green","yellow","purple","blue"];
  		for (var i = 0; i < 20; i++) {
  			allChild.push(
				<View 
					style = {{backgroundColor:colors[i%colors.length],width:100,height:200}}
					key = {i}
				>
					<Text>{i}</Text>
				</View>
  			)
  		}
  		return allChild;
  	}
  	//注册计时器
  	mixins:[TimerMixin]

  	// componentDidMount() {
   //  	this.setTimeout(() => {console.log('I do not leak!'); },500);
  	// }
}





