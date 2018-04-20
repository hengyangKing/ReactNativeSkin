/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    TabBarIOS,
    Text,
    

} from 'react-native';


type Props = {};
export default class App extends Component<Props> {
	constructor(Props){  
        super(Props);    
        this.state = {  
           	selectedItem :"home",  
	    };  
    } 
  	render() {
    	return (
      		<View style = {styles.container}>
				{/*头部*/}
				<View>
					<Text>选项卡切换</Text>
				</View>
				{/*选项卡切换*/}
			<TabBarIOS
				barTintColor = "black"
				style = {styles.tabbar}
			>
				<TabBarIOS.Item
					systemIcon = "contacts"
					badge = "3"
					selected = {this.state.selectedItem == "home"}
					onPress = {()=>this.onPress("home")}
					tag = "home"
				>
					<View style = {styles.commonViewStyle,{backgroundColor:"red"}}>
						<Text>1</Text>
					</View>
				</TabBarIOS.Item>
				<TabBarIOS.Item
					systemIcon = "bookmarks"
					selected = {this.state.selectedItem == "bookmarks"}
					onPress = {()=>this.onPress("bookmarks")}
					tag = "bookmarks"
				>
					<View style = {styles.commonViewStyle,{backgroundColor:"blue"}}>
						<Text>2</Text>
					</View>
				</TabBarIOS.Item>
				<TabBarIOS.Item
					systemIcon = "downloads"
					selected = {this.state.selectedItem == "downloads"}
					onPress = {()=>this.onPress("downloads")}

				>
					<View style = {styles.commonViewStyle,{backgroundColor:"green"}}>
						<Text>3</Text>
					</View>
				</TabBarIOS.Item>
				<TabBarIOS.Item
					systemIcon = "search"
					selected = {this.state.selectedItem == "search"}
					onPress = {()=>this.onPress("search")}
				>
					<View style = {styles.commonViewStyle,{backgroundColor:"black"}}>
						<Text>4</Text>
					</View>
					</TabBarIOS.Item>
				</TabBarIOS>
	      	</View>
    	);
  	}
  	onPress(event){
		console.log(event);
		this.setState({selectedItem:event});	
	} 
}
var {width ,height} = require("Dimensions").get("window");
let styles = StyleSheet.create({
	container:{
		flex:1,
	},
	tabbar:{
		flex:1,
	},
	commonViewStyle:{
		flex:1,
		alignItems:"center",
		justifyContent:"center",
	},
})



