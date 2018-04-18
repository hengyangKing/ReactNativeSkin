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

} from 'react-native';


type Props = {};
export default class App extends Component<Props> {
	render() {
  		return (
      		<View>
				<ScrollView horizontal = {true}>
					{this.renderChildView()}
				</ScrollView>		
      		</View>
    	);
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
}



