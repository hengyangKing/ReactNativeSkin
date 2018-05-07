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
 
var BaseBar = require('./BaseNav.js');

type Props = {};
class SearchBarNav extends Component<Props> {
	render() {
		console.log("*******");
		return this.renderNavBar();
	}
	renderNavBar(){
		return(
			<BaseBar
				leftView = {()=>this.renderLeftView()}
				centerView = {()=>this.renderCenterView()}
				rightView = {()=>this.renderRightView()}
			/>
		)
	}
	renderLeftView(){
		return (
			<TouchableOpacity onPress = {()=>this.props.leftClick()}>
				<Text style = {style = contentStyles.leftStyle}>广州</Text>
			</TouchableOpacity>
		)
	}
	renderRightView(){
		return(
			<TextInput
				placeholder = "输入商家 商品 商圈"
				style = {contentStyles.middleView}
			/>
		)
	}
	renderCenterView(){
		return(
			<View style = {contentStyles.rightView}>
				<TouchableOpacity onPress = {()=>this.props.rightClick()}>
					<Image source={{uri:'icon_homepage_message'}} style={contentStyles.navRightImgStyle}/>
				</TouchableOpacity>
				<TouchableOpacity onPress={()=>this.props.rightClick()}>
                    <Image source={{uri:'icon_homepage_scan'}} style={contentStyles.navRightImgStyle} />
                </TouchableOpacity>
			</View>
		)
	}
}
 
const contentStyles = StyleSheet.create({
	leftStyle:{
		color:"white",
	},
	middleView:{
		width:BaseBar.width * 0.71,
        height:Platform.OS == 'ios' ? 35 : 30,
        backgroundColor:'white',
        marginTop: Platform.OS == 'ios' ? 0 : 0,

        // 设置圆角
        borderRadius:17,

        // 内左边距
        paddingLeft:10
	},
	rightView:{
		flexDirection:'row',
      // backgroundColor:'blue',
      	height:64,
      // 设置侧轴的对齐方式
      	alignItems:'center'
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