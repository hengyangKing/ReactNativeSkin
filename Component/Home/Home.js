import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,

} from 'react-native';

let Home_2 = require('./Home_2.js');
let Nav = require('../Views/Nav/SearchBarNav.js');
let TopView = require("./Views/HomeTopView.js");
type Props = {};
class Home extends Component<Props> {
	static navigationOptions = (({ navigation }) => ({
		header: <Nav 
					locationClick = {()=>{console.log("locationClick")}}
					messageClick = {()=>{console.log("messageClick")}}
					scanClick = {()=>{console.log("scanClick")}}
				/>
	}));
	render() {
		return (
			this.renderContentView()
    	)
    }
	renderContentView(){
		return(
			<View style = {styles.container}>
				<ScrollView>
					<TopView
						datas = {[]}
						touchAction = {(index)=>{}}
					/>
					
				</ScrollView>
			</View>
		)
	}
  	pushToDetail(navigateTo, params, action){
		this.props.navigation.navigate(navigateTo,params,action)
  	}
}
const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:"#f5fcff",
	},
}) 
module.exports = Home;