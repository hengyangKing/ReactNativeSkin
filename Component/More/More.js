import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
    

} from 'react-native';


type Props = {};
export default class More extends Component<Props> {
	static navigationOptions = {
	    headerTitle: '更多',
	    tabBarLabel: '更多',
	    tabBarIcon:<View style={{height:30,width:30,backgroundColor:'red'}}></View>
  	};
	render() {
		return (
			<View style = {styles.container}>
				<Text style = {styles.welcome}>
					More
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
module.exports = More;
