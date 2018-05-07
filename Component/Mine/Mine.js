import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    

} from 'react-native';
var CommonCell = require("./CommonCell.js");

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
				<ScrollView>
					{/*session 0*/}
					<View style = {{marginTop:10}}>
						<CommonCell
							title="扫一扫"
							touchAction = {()=>{
								console.log("cell touchUpInSide");
							}}
						/>
					</View>
					{/*session 1*/}
					<View style = {{marginTop:10}}>
						<CommonCell
							title="是否开启省流模式"
							isSwitch = {true}
							touchAction = {(value)=>{
								console.log("cell touchUpInSide");
							}}
						/>
					</View>
				</ScrollView>
			</View>

    	);
  	}
  	
}
const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:"#e8e8e8",
	},
});

module.exports = Mine;