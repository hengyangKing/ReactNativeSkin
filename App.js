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
      		</View>
    	);
  	}

	renderAddBanner(){
  		
  		return [
  				<ScrollView horizontal = {true} key = {101}>
  					{this.renderImages()}
				</ScrollView>
				];
	}
	renderImages(){
		var imagesArr = data;
		var images = [];
		for (var i = 0; i < imagesArr.length; i++) {
			//imagesArr[i].img
			let path = <Image key={i} source={{uri:imagesArr[i].img}} style={{width:width,height:200}} />
			images.push(path);
		}
		return images;
	}

  	
  	//注册计时器
  	mixins:[TimerMixin]

  	// componentDidMount() {
   //  	this.setTimeout(() => {console.log('I do not leak!'); },500);
  	// }
}





