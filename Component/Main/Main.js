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



let TabBarItem = require('./TabbarItem.js');

type Props = {};
export default class Main extends Component<Props> {

	constructor(Props){  
        super(Props);    
        this.state = {  
		}
	} 

	render() {
		return 	<MainNavigator />;
  	}
}




// 通过TabNavigator做路由映射
const MainTabbar = TabNavigator({
    HomeVC:{
    	screen:Home,
    	navigationOptions:({navigation}) => ({  
        	tabBarLabel:'首页',  
        	tabBarIcon:({focused,tintColor}) => (  
	        	<TabBarItem  
	        		tintColor={tintColor}  
	            	focused={focused}  
	            	normalImage={{uri:"icon_tabbar_homepage"}}  
	            	selectedImage={{uri:"icon_tabbar_homepage_selected"}}  
	        	/>  
      		)  
    	}),  
    },
    MineVC:{
		screen:Mine,  
		navigationOptions:({navigation}) => ({  
        	tabBarLabel:'我',  
        	tabBarIcon:({focused,tintColor}) => (  
            	<TabBarItem  
             		tintColor={tintColor}  
              		focused={focused}  
              		normalImage={{uri:"icon_tabbar_mine"}}  
              		selectedImage={{uri:"icon_tabbar_mine_selected"}}  
        		/>  
          	)  
        }),  
  	}
},{

	// tabBarComponent:'bottom',  
    tabBarPosition:'bottom',  
    swipeEnabled:false,  
	animationEnabled:false,  
	lazy:true,  
	tabBarOptions:{  
	activeTintColor:'#FF7F50',//激活主题颜色
	inactiveTintColor:'#979797',// 未激活主题颜色
	style:{backgroundColor:'#ffffff',},  
	labelStyle: {  
		// fontSize: 12, // 文字大小  
	},  
	}  
});
const MainNavigator = StackNavigator({

		Tabbar:{screen:MainTabbar},  
		Home_2:{screen:Home_2}  
	},{  
		navigationOptions:{  
		headerBackTitle:null,  
		headerTintColor:'#333333',  
		showIcon:true,  
		swipeEnabled:false,  
		sanimationEnabled:false,  
	},  
	mode:'card',  
});
module.exports = Main;