import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,

} from 'react-native';

type Props = {};
class HomeTopView extends Component<Props> {
	
	constructor(Props){  
        super(Props);    
        this.state = {  
		}
	} 
	render() {
		return (
			this.renderContentView()
    	)
    }
	renderContentView(){
		return(
			<View style = {styles.container}>	
				<ScrollView>{this.renderItems()}</ScrollView>
				<View></View>
			</View>
		)
	}
	renderItems(){
		let items = [];
		let datas = ['red','yellow','blue'];
		for (var i = 0; i < datas.length; i++) {
			let data = datas[i];
			items.push(
				<View style = {}></View>
				
			)
		}
		return items;
	}
  	
}
HomeTopView.defaultProps = {
	touchAction:(value)=>{},
	datas:[],
}
const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:"#ffffff",
		height:100,
	},
}) 
module.exports = HomeTopView;