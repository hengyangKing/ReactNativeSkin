import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
 	Image,
 	
} from 'react-native';



//外部组件类
import {StackNavigator,TabNavigator} from 'react-navigation';


let Home = require('../Home/Home.js');
let Home_2 = require('../Home/Home_2.js');

let Mine = require('../Mine/Mine.js');
let More = require('../More/More.js');
let Shop = require('../Shop/Shop.js');

type Props = {};
export default class Main extends Component<Props> {

	constructor(Props){  
        super(Props);    
        this.state = {  
           	selectedTab :"home",  
		}
	} 
	render() {
		return 	<MainTabbar />;
  	}
  	
  	normalTabbar(){
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
					<Home />
  				</TabNavigator.Item>

				{/*添加shop*/}
  				<TabNavigator.Item
    				selected={this.state.selectedTab === 'shop'}
    				title="Shop"
				    renderIcon={() => <Image source = {{uri:"icon_tabbar_merchant_normal"}} style = {itemStyles.icon} />}
				    renderSelectedIcon={() => <Image source = {{uri:"icon_tabbar_merchant_selected"}} style = {itemStyles.icon} />}
				    onPress={() => this.setState({ selectedTab: 'shop' })}>
				    <Shop />
  				</TabNavigator.Item>

  				{/*添加more*/}
  				<TabNavigator.Item
    				selected={this.state.selectedTab === 'more'}
    				title="More"
				    renderIcon={() => <Image source = {{uri:"icon_tabbar_misc"}} style = {itemStyles.icon} />}
				    renderSelectedIcon={() => <Image source = {{uri:"icon_tabbar_misc_selected"}} style = {itemStyles.icon} />}
				    onPress={() => this.setState({ selectedTab: 'more' })}>
				    <More />
  				</TabNavigator.Item>

  				{/*添加Mine*/}
  				<TabNavigator.Item
    				selected={this.state.selectedTab === 'mine'}
    				title="Mine"
				    renderIcon={() => <Image source = {{uri:"icon_tabbar_mine"}} style = {itemStyles.icon} />}
				    renderSelectedIcon={() => <Image source = {{uri:"icon_tabbar_mine_selected"}} style = {itemStyles.icon} />}
				    onPress={() => this.setState({ selectedTab: 'mine' })}>
				    <Mine />
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
		
	},
});


const HomeStack = StackNavigator({
	Home:{screen:Home},
	// Details:{screen:Home_2},
	
},{

});

const MineStack = StackNavigator({
  Mine: { screen: Mine },
},{

});



// 通过TabNavigator做路由映射
const MainTabbar = TabNavigator({
    HomeVC:{screen:HomeStack},
    // ShopVC:{screen:Shop},
    // MoreVC:{screen:More},
    MineVC:{screen:MineStack},

},{
	navigationOptions: ({ navigation }) => ({
    	tabBarIcon: ({ focused, tintColor }) => {
    		const { routeName } = navigation.state;
    		console.log("******************");

    		console.log(navigation);

        	let iconName;
        	if (routeName === 'HomeVC') {
          		iconName = 'black';
        	} else if (routeName === 'MineVC') {
          		iconName = 'red';
        	}

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        	return <View style = {{width:30,height:30,backgroundColor:iconName}}></View>
    	},
 		style: {
 			
  		},

    }),


	tabBarOptions: ({ navigation }) => ({

  		activeTintColor: 'yellow',
  		inactiveTintColor:'green',
  		labelStyle: {
   			fontSize: 12,
  		},
	})
 
});

module.exports = Main;