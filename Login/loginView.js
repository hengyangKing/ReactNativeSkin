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
            	<Image/>
 				{/*账号和密码*/}
 				<TextInput/>
 				<TextInput/>
				{/*登录*/}
				<View>
					<View>
						<Text>登录</Text>
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

	}
})
// 输出类
module.exports = loginView;