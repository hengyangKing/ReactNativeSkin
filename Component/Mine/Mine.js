import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    

} from 'react-native';


type Props = {};
export default class Mine extends Component<Props> {
	static navigationOptions = (({ navigation }) => ({
		headerTitle:"我的",
		headerRight:<View style = {{width:60,height:44}}>
						<Image 
							source = {{uri:"icon_mine_setting"}} 
							style = {{width:30,height:30,alignItems:"center",marginRight:30}}
						/>
					</View>,
	}));
	render() {
		return (
			<View style = {styles.container}>
				<Text style = {styles.welcome}>
					Mine
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

module.exports = Mine;