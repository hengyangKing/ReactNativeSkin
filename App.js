/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    AlertIOS,

} from 'react-native';

// //ES5 注册一个类
// const App = React.createClass({
// 	render:function(){
// 		return(
// 			<View style = {styles.container}>
// 				<Text>123</Text>
// 			</View>
// 		)
// 	}
// });


// ES6 注册一个类
type Props = {};
export default class App extends Component<Props> {
	// ES5 的初始化组件的方法 
	// getInitialState(){
	// 	return{
	// 		title:"不透明触摸"
	// 	}
	// }

	// ES6初始化组件方法
	constructor(props) {
    	super(props);
    	this.state = { title:"不透明触摸123" };

  	}
  	
 //  	使用React.Component创建组件，需要通过在constructor中调用super()将props传递给React.Component。
 //  	另外react 0.13之后props必须是不可变的。
	// 由于是用ES6 class语法创建组件，其内部只允许定义方法，而不能定义属性，class的属性只能定义在class之外。
	// 所以propTypes要写在组件外部。
	// 对于之前的getDefaultProps方法，由于props不可变，所以现在被定义为一个属性，和propTypes一样，要定义在class外部。
 //  	getDefaultProps(){

 //  	}

  	render() {
    	return (
    		<View style = {styles.container}>
    			<TouchableOpacity 
    				onPress = {()=>this.activeEvent("123")}

    				activeOpaccity={0.5}
    			>
    				<View>
    					<Text>ES6方式创建的组件</Text>
    				</View>
    			</TouchableOpacity>
    			<View>
    				<Text>{this.state.title}</Text>
    			</View>
    		</View>
    	);
  	}
  	activeEvent(event){
  		this.setState({title:event})
  	}
}

var styles = StyleSheet.create({

	container:{
		flex:1,
		justifyContent:"center",
		alignItems:"center",
		backgroundColor:"#f5fcff",
	},
	innerViewStyle:{
		backgroundColor:"red",
	}

});



