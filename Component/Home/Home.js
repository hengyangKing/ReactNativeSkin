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

type Props = {};
class Home extends Component<Props> {
	
	static navigationOptions  = {
		

	 //    headerTitle: '首页首页',//对页面的配置
	 //    tabBarLabel: '首页首页首页',
	 //    tabBarIcon:<Image source = {{uri:"icon_tabbar_homepage"}} style = {{height:30,width:30}} />,
		// tabBarSelectedIcon:<Image source = {{uri:"icon_tabbar_homepage_selected"}} style = {{height:30,width:30}} />,
  	};

	render() {
		let navigate  = this.props.navigation;
		console.log("***********************************************");
		console.log(navigate);
		return (
			<View style = {styles.container}>
				<Text style = {styles.welcome}>
					Home
				</Text>
				<TouchableOpacity onPress ={()=>{this.pushToDetail('Home_2',{title:"123"})}
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
const itemStyles = StyleSheet.create({
	icon:{
		width:30,
		height:30,
	},
	item:{
		
	},
}) 
module.exports = Home;