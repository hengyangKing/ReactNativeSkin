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

var TimerMixin = require('react-timer-mixin');
var ImageData = require('./data/ImageData.json');

type Props = {};
export default class App extends Component<Props> {

	render() {
  		return (
      		<View>
      			{this.renderAddBanner()}			
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
		var images = [];
		var imagesArr = ImageData.data;
		for (var i = 0; i < imagesArr.length; i++) {
			// var imgItem = imagesArr[i];
			// var imgPath = "./img/"+imgItem.img+".png";
			// var imgPath = "./img/"+"img_01"+".png";
			// let imgUrl = ;
			images.push(
				<Image  
					key = {i}
					source = {require('./img/' + imagesArr[i].img + '.png')}
					// source = {require('./img/img_01.png')}
					style = {{width:100,height:200}}

				 />
			)
		};
		return images;

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





