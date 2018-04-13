import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    
} from 'react-native';

// 获取当前设备的宽度
const Dimensions = require('Dimensions');
const {width, height} = Dimensions.get('window');

class loginView extends Component {
    render() {
        return (
            <View style={styles.container}>
            	{/*头像*/}
            	<Image source = {require("../img/icon.png")} style = {styles.icon} />
 				{/*账号和密码*/}
 				<TextInput 
 					placeholder = {'请输入用户名'}
 				 	style = {styles.input}
 				 />
 				<TextInput
					placeholder = {'请输入密码'}
					password = {true}
 					style = {styles.input}
 				/>



				{/*登录*/}
				<View style = {{width:(width*9)/10.0}}>
					<View style = {styles.loginBtn}>
						<Text>登录</Text>
					</View>

					{/*设置*/}
					<View style = {styles.loginSet}>
						<Text>无法登录</Text>
						<Text>注册用户</Text>
					</View>
				</View>
				{/*其他登录方式*/}
				<View style = {styles.exception}>

					<View style = {{justifyContent:'center',alignItems:'center'}}>
						<Text>其他方式登录</Text>
					</View>

					<View style = {styles.exceptionBtns}>
						<Image source = {require("../img/icon3.png")} style = {styles.exceptionBtn} />
						<Image source = {require("../img/icon7.png")} style = {styles.exceptionBtn}/>
						<Image source = {require("../img/icon8.png")} style = {styles.exceptionBtn}/>
					</View>
				</View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#dddddd',
		//设置侧轴对其方式
		alignItems : "center",
	},
	icon : {
		width:width/4.0,
		height:width/4.0,
		borderRadius: width/8.0,
        marginTop: 80,
        marginBottom:30,
        borderWidth:2,
        borderColor:'#fff'
	},
	input:{
		width:width,
		height:40,
 		backgroundColor:'#fff',
        marginBottom:1,
        textAlign:'center'
	},
	loginBtn : {
		height:40,
		backgroundColor:"#e9232c",
		marginTop:30,
        marginBottom:20,
        borderRadius:5,
         /*主侧轴居中*/
        justifyContent:'center',
        alignItems:'center',

	},
	loginSet : {
		flexDirection:"row",
		justifyContent:"space-between",
	},
	exception : {
		position:'absolute',
        left:10,
        bottom:10, 
        right:10, 
	},
	exceptionBtns : {
		flexDirection:"row",
		marginTop:20,
		justifyContent:'space-around'
	},
	exceptionBtn : {
		width:60,
		height:60,
		borderRadius:30,
	}

})
// 输出类
module.exports = loginView;