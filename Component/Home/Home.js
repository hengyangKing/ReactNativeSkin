import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
} from 'react-native';

type Props = {};
class Home extends Component<Props> {
	
	static navigationOptions = {
	    title: 'Home',
	    headerStyle: {
	      backgroundColor: '#212121',
	    },
	    headerTitleStyle: {
	      color: '#fff'
	    }
	};
	render() {
		let navigate  = this.props.navigation;
		console.log(navigate);
		return (
			<View style = {styles.container}>
				<Text style = {styles.welcome}>
					Home
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
module.exports = Home;