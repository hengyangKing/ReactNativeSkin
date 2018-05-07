import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

let Home_2 = require('./Home_2.js');
let Nav = require('../Views/Nav/SearchBarNav.js');

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
		console.log(".///////////////////////////////")
		let nav = this.props.navigation;
		console.log(nav);

		return (
			<View style = {styles.container}>
				<Text style = {styles.welcome}>
					Home
				</Text>
				<TouchableOpacity onPress ={()=>{this.pushToDetail('Home_2',{headerTitle:"Home_2"})}
				}>
					<Text style = {styles.welcome}>
						跳转
					</Text>
				</TouchableOpacity>
			</View>
    );
  }
  pushToDetail(navigateTo, params, action){
		this.props.navigation.navigate(navigateTo,params,action)
  }
}
const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:"center",
		alignItems:"center",
		backgroundColor:"#f5fcff",
	},
	welcome:{
		fontSize:20,
		textAlign:"center",
		margin:10,
	},
}) 
module.exports = Home;