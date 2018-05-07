import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
} from 'react-native';

var {width,height,scale} = require("Dimensions").get("window");
var stateBar = (Platform.OS === 'ios'&& width === 375 && height === 812);
var navBarH = 44;

function getStatusBarH(){
	if (Platform.OS === 'ios') {
		if (width === 375 && height === 812) {
			return 44;
		}
		return 20;
	}	
	return 0;
}

type Props = {};
class BaseNav extends Component<Props> {
	render() {
		return this.renderBaseNavBar();
	}
	renderBaseNavBar(){

		return(
			<View style = {barStyles.barStyle}>
				{this.renderstateBar()}
				{this.renderNavBar()}
			</View>
		)
	}
	renderstateBar(){
		return (<View style = {barStyles.stateBarStyle}></View>);
	}
	renderNavBar(){
		return (
			<View style = {barStyles.navBarStyle}>
				{this.props.leftView()}
				{this.props.centerView()}
				{this.props.rightView()}
			</View>
		)

	}
}
const barStyles = StyleSheet.create({
	barStyle:{
		height: getStatusBarH()+navBarH,
        backgroundColor:'rgba(255,96,0,1.0)',
	},
	stateBarStyle:{
		height: getStatusBarH(),
	},
	navBarStyle:{
		height:navBarH,
		// 设置主轴的方向
		flexDirection:'row',
		// 垂直居中 ---> 设置侧轴的对齐方式
		alignItems:'center',
		// 设置主轴的对齐方式
		justifyContent:'space-between',
        paddingLeft:14,
        paddingRight:14,
	},
}) 
BaseNav.defaultProps = {
	
	leftView:()=>{return(<View></View>)},
	rightView:()=>{return(<View></View>)},
	centerView:()=>{return(<View></View>)},
}
    

module.exports = BaseNav;