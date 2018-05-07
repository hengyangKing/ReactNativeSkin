import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

type Props = {};
class Home_2 extends Component<Props> {
	//接收上一个页面传过来的title显示出来
	static navigationOptions = (({ navigation }) => ({
		title: navigation.state.params.headerTitle,
	}));
	render() {
		let navigate  = this.props.navigation;
		console.log(navigate);
		return (
			<View style = {styles.container}>
				<Text style = {styles.welcome}>
					Home_2
				</Text>
				<TouchableOpacity onPress ={()=>{this.backVC()}
				}>
					<Text style = {styles.welcome}>
						返回
					</Text>
				</TouchableOpacity>
			</View>
    	);
	}
	
  	backVC(){
		this.props.navigation.goBack();
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
module.exports = Home_2;