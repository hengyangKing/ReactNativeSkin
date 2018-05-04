import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
    

} from 'react-native';


type Props = {};
export default class Shop extends Component<Props> {
	static navigationOptions = {
	    
  	};


	render() {
		return (
			<View style = {styles.container}>
				<Text style = {styles.welcome}>
					Shop
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
});

module.exports = Shop;