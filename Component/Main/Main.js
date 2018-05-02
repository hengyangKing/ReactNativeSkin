import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
 	Image,
} from 'react-native';
//外部组件类
import TabNavigator from 'react-native-tab-navigator';


type Props = {};
export default class Main extends Component<Props> {
	constructor(Props){  
        super(Props);    
        this.state = {  
           	selectedTab :"home",  
		}
	} 
	render() {
		return (
			<TabNavigator>
				{/*添加items*/}
				{/*添加home*/}
				<TabNavigator.Item
    				selected={this.state.selectedTab === 'home'}
    				title="Home"
				    renderIcon={() => <Image source = {{uri:"icon_tabbar_homepage"}} style = {itemStyles.icon} />}
				    renderSelectedIcon={() => <Image source = {{uri:"icon_tabbar_homepage_selected"}} style = {itemStyles.icon} />}
				    onPress={() => this.setState({ selectedTab: 'home' })}>
				    {<View style = {{backgroundColor:"red",flex:1}}></View>}
  				</TabNavigator.Item>

				{/*添加shop*/}
  				<TabNavigator.Item
    				selected={this.state.selectedTab === 'shop'}
    				title="Shop"
				    renderIcon={() => <Image source = {{uri:"icon_tabbar_merchant_normal"}} style = {itemStyles.icon} />}
				    renderSelectedIcon={() => <Image source = {{uri:"icon_tabbar_merchant_selected"}} style = {itemStyles.icon} />}
				    onPress={() => this.setState({ selectedTab: 'shop' })}>
				    {<View style = {{backgroundColor:"red",flex:1}}></View>}
  				</TabNavigator.Item>

  				{/*添加more*/}
  				<TabNavigator.Item
    				selected={this.state.selectedTab === 'more'}
    				title="More"
				    renderIcon={() => <Image source = {{uri:"icon_tabbar_misc"}} style = {itemStyles.icon} />}
				    renderSelectedIcon={() => <Image source = {{uri:"icon_tabbar_misc_selected"}} style = {itemStyles.icon} />}
				    onPress={() => this.setState({ selectedTab: 'more' })}>
				    {<View style = {{backgroundColor:"red",flex:1}}></View>}
  				</TabNavigator.Item>

  				{/*添加Mine*/}
  				<TabNavigator.Item
    				selected={this.state.selectedTab === 'mine'}
    				title="Mine"
				    renderIcon={() => <Image source = {{uri:"icon_tabbar_mine"}} style = {itemStyles.icon} />}
				    renderSelectedIcon={() => <Image source = {{uri:"icon_tabbar_mine_selected"}} style = {itemStyles.icon} />}
				    onPress={() => this.setState({ selectedTab: 'mine' })}>
				    {<View style = {{backgroundColor:"red",flex:1}}></View>}
  				</TabNavigator.Item>
  				

			</TabNavigator>
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
const itemStyles = StyleSheet.create({
	icon:{
		width:30,
		height:30,
	},
	item:{
		tint:
		
	},
});

module.exports = Main;