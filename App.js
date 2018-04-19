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
	ScrollView,  
	Text,
	Image,
	TouchableOpacity,


} from 'react-native';

// var TimerMixin = require('react-timer-mixin');
let data = require('./data/ImageData.json').data;
// let Dim = require('Dimensions')
let {width,height} = require('Dimensions').get("window");
type Props = {};

export default class App extends Component<Props> {
	//注册计时器
  	mixins:[TimerMixin]

	// ES6初始化 构造函数 
	constructor(props) {
    	super(props);
    	this.state = {
    		currentPage:0,
  		};
  	}

	//在rander 方法调用后 组件加载成功并成功被渲染出来以后，要执行的后续操作，
	// 一般会在这个函数中处理网络请求等加载数据的操作

  	componentDidMount(){
   		this.startTimer();
  	}
  	
  	//开启定时器
  	startTimer(){
		let scrollView = this.refs.scrollView;
		let time  =  setInterval(()=>{
      		var activePage ;
			activePage = (this.state.currentPage+1 >= data.length)?0:(this.state.currentPage+1);
      		this.setState({currentPage:activePage});
      		let currentX = activePage * width;
      		scrollView.scrollResponderScrollTo({x:currentX,y:0,animated:true});
    	},this.props.duration);
  	}

	render() {
  		return (
      		<View>
      			{this.renderAddBanner()}
      		</View>
    	);

  	}

	renderAddBanner(){
  		
  		return [
  				<ScrollView 
  					horizontal = {true}
  					key = {101}
  					style = {styles.container}
  					showsHorizontalScrollIndicator = {false}
  					pagingEnabled = {true}
  					onMomentumScrollEnd = {this.onAnimationEnd.bind(this)}
  					ref = "scrollView"
  				>
  					{this.renderImages()}
				</ScrollView>,
				//返回焦点
				<View style = {styles.pageControl} key = {102}>
					{this.renderPageControls()}
				</View>
				];
	}
	renderImages(){
		var images = [];
		for (var i = 0; i < data.length; i++) {
			//imagesArr[i].img
			images.push(
				<Image 
					key={i}
					source={{uri:data[i].img}} 
					style={{width:width,height:200}} 
				/>
			);
		}
		return images;
	}
	renderPageControls(){
		var controls = [];
		for (var i = 0; i < data.length; i++) {
			style = (i == this.state.currentPage)?{color:"orange"}:{color:"#ffffff"};
			controls.push(

				<View key = {i}>
					<Text style = {[{fontSize:30},style]/*多样式表实现*/}>
						&bull;
					</Text>	
				</View>
			);
		}
		return controls;
	}
	//当一帧滚动结束的时候调用
	onAnimationEnd(event){
		// //偏移量
		var offsetX = event.nativeEvent.contentOffset.x;
		var page = Math.floor(offsetX / width);
		this.setState({currentPage:page})
	}
}
//设置固定值 对应ES5 getDefaultProps
App.defaultProps = {
 	duration : 1000,
};

const styles = StyleSheet.create({
	container:{
		marginTop:20,
	},
	pageControl:{
		position:"absolute",
		backgroundColor:"rgba(241,241,241,0.8)",
		width:width,
		height:30,
		bottom:0,
		flexDirection:"row",
		alignItems:"center",
	}

});




