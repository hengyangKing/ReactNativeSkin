import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

let Home_2 = require('./Home_2.js');

type Props = {};
class Home extends Component<Props> {
	
	static navigationOptions = {
	    headerTitle: '首页123',//对页面的配置
	    tabBarLabel: '首页',
	    tabBarIcon:<View style={{height:30,width:30,backgroundColor:'red'}}></View>
  	};

	render() {
		let navigate  = this.props.navigation;
		console.log("***********************************************");
// 
		console.log(navigate);
		return (
			<View style = {styles.container}>
				<Text style = {styles.welcome}>
					Home
				</Text>
				<TouchableOpacity onPress = {()=>this.props.navigation.navigate('Home_2',{title:"123"})}>
					<Text style = {styles.welcome}>
						跳转
					</Text>
				</TouchableOpacity>
			</View>
    );
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