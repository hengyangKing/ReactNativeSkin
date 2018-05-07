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
class SearchBarNav extends Component<Props> {
	render() {
		console.log("*******");
		return this.renderNavBar();
	}
	renderNavBar(){
		return(
			<View style = {barStyles.barStyle}>
				<View style = {barStyles.stateBarStyle}>
					
				</View>
				<View style = {barStyles.navBarStyle}>
				{/*左边*/}
					<TouchableOpacity onPress = {()=>this.props.leftClick()}>
						<Text style = {style = contentStyles.leftStyle}>广州</Text>
					</TouchableOpacity>
				{/*中间*/}
					<TextInput
						placeholder = "输入商家 商品 商圈"
						style = {contentStyles.middleView}
					/>
				{/*右边*/}
					<View style = {contentStyles.rightView}>
						<TouchableOpacity onPress = {()=>this.props.rightClick()}>
							<Image source={{uri:'icon_homepage_message'}} style={contentStyles.navRightImgStyle}/>
						</TouchableOpacity>
						<TouchableOpacity onPress={()=>this.props.rightClick()}>
	                        <Image source={{uri:'icon_homepage_scan'}} style={contentStyles.navRightImgStyle} />
	                    </TouchableOpacity>
					</View>
				</View>
				 
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
		justifyContent:'space-around',
        backgroundColor:'green',
	},
}) 
const contentStyles = StyleSheet.create({
	leftStyle:{
		color:"white",
	},
	middleView:{
		width:width * 0.71,
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