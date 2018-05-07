import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
	Image,
} from 'react-native';
 
var BaseNav = require('./BaseNav.js');
var {width,height,scale} = require("Dimensions").get("window");

type Props = {};
class SearchBarNav extends Component<Props> {
	render() {
		console.log("*******");
		return this.renderNavBar();
	}
	renderNavBar(){
		return(
			<BaseNav
				leftView = {()=>this.renderLeftView()}
				centerView = {()=>this.renderCenterView()}
				rightView = {()=>this.renderRightView()}
			/>
		)
	}
	renderLeftView(){
		return (
			<TouchableOpacity onPress = {()=>this.props.leftClick()}>
				<Text style = {style = contentStyles.text}>广州</Text>
			</TouchableOpacity>
		)
	}
	renderRightView(){
		return(
			<View style = {contentStyles.rightView}>
				<TouchableOpacity onPress = {()=>this.props.rightClick()}>
					<Image source={{uri:'icon_homepage_message'}} style={contentStyles.navRightImgStyle}/>
				</TouchableOpacity>
				<View style = {{width :5}}></View>
				<TouchableOpacity onPress={()=>this.props.rightClick()}>
                    <Image source={{uri:'icon_homepage_scan'}} style={contentStyles.navRightImgStyle} />
                </TouchableOpacity>
			</View>
		)
	}
	renderCenterView(){
		return(
			<TextInput
				placeholder = "输入商家 商品 商圈"
				style = {contentStyles.middleView}
			/>
		)
	}
}
 
const contentStyles = StyleSheet.create({
	text:{
		color:"white",
	},
	middleView:{
		width:width*0.6,

        height:Platform.OS == 'ios' ? 35 : 30,

        backgroundColor:'white',

        // 设置圆角
        borderRadius:17,

        // 内左边距
        paddingLeft:10,

        margin:10,
	},
	rightView:{
		flexDirection:'row',
      // 设置侧轴的对齐方式
      	alignItems:'center',
      	justifyContent:'space-around',
      	height:BaseNav.navBarH,

	},
	navRightImgStyle:{ // 设置图片的大小
    	width:Platform.OS == 'ios' ? 28: 24,
    	height:Platform.OS == 'ios' ? 28: 24
    },

})
SearchBarNav.defaultProps = {
	leftClick:()=>{},
	rightClick:()=>{},
}
    

module.exports = SearchBarNav;