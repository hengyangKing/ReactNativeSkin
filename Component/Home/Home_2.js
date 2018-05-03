import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
} from 'react-native';

type Props = {};
class Home_2 extends Component<Props> {
	//接收上一个页面传过来的title显示出来
	static navigationOptions = ({ navigation }) => ({
		title: navigation.state.params.title
	});
	// 点击返回上一页方法
	backVC=()=>{
		//返回首页方法
		this.props.navigation.goBack();
	}



	render() {
		let navigate  = this.props.navigation;
		console.log(navigate);
		return (
			<View style = {styles.container}>
				<Text style = {styles.welcome}>
					Home_2
				</Text>
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
module.exports = Home_2;