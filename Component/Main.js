import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    TabBarIOS,
    NavigatorIOS,
} from 'react-native';
//引入外部组件
var Home = require('./Home.js');
var Massage = require('./Massage.js');
var Discover = require('./Find.js');
var Profile = require('./Mine.js');


type Props = {};
var {width ,height,scale} = require("Dimensions").get("window");
export default class Main extends Component<Props> {
	constructor(Props){  
        super(Props);    
        this.state = {  
           	selectedItem :"home",  
	    };  
    } 
	render() {
    	return (
    		<TabBarIOS
    			//TabBarIOS.Item selectedImage 属性无效 利用tintColor 实现选中高亮
				tintColor = "orange"
    		>
    	 		{/*home*/}
    	 		<TabBarIOS.Item	
					icon={{uri: "tabbar_home",scale:scale}}
					title = "首页"
					onPress = {()=>this.onPress("home")}
					selected = {this.state.selectedItem == "home"}
    	 		>
    	 			<NavigatorIOS
    	 				style = {styles.navStyle}
						tintColor = "orange"
						initialRoute = {{
							component:Home,//板块名称
							title:"首页",
							leftButtonIcon:{uri:"navigationbar_friendattention",scale:scale},
							rightButtonIcon:{uri:"navigationbar_pop",scale:scale},
							leftButtonSelectedIcon:{uri:"navigationbar_friendattention_highlighted",scale:scale},
						}}
    	 			/>
					
	    	 	</TabBarIOS.Item>
	    	 	{/*massage*/}
	    	 	<TabBarIOS.Item
					icon={{uri: "tabbar_message_center",scale:scale}}
					title = "消息"
					onPress = {()=>this.onPress("message")}
					selected = {this.state.selectedItem == "message"}
	    	 	>
					<Massage/>
	    	 	</TabBarIOS.Item>
	    	 	{/*discover*/}
	    	 	<TabBarIOS.Item
					icon={{uri: "tabbar_discover",scale:scale}}
					title = "发现"
					onPress = {()=>this.onPress("discover")}
					selected = {this.state.selectedItem == "discover"}
	    	 	>
	    	 		<Discover/>
	    	 	</TabBarIOS.Item>
	    	 	{/*main*/}
	    	 	<TabBarIOS.Item
					icon={{uri: "tabbar_profile",scale:scale}}
					title = "我的"
					onPress = {()=>this.onPress("profile")}
					selected = {this.state.selectedItem == "profile"}
	    	 	>
					<Profile/>
	    	 	</TabBarIOS.Item>
	    	 </TabBarIOS>
    	);
  	}
  	onPress(event){
		console.log(event);
		this.setState({selectedItem:event});	
	} 
}
let styles = StyleSheet.create({
	navStyle:{
		flex:1,

	},

})

// 输出类
module.exports = Main;