import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
    ListView,
    Image,
    TouchableOpacity,
    ScrollView,


} from 'react-native';
// var TimerMixin = require('react-timer-mixin');
// let data = require('./data/ImageData.json').data;
// let Dim = require('Dimensions')
let {width,height} = require('Dimensions').get("window");
type Props = {};

export default class Banner extends Component<Props> {
	//注册计时器
  	mixins:[TimerMixin]

	// ES6初始化 构造函数 
	constructor(props) {
    	super(props);
    	this.state = {
    		currentPage:0,
    		title:this.props.datas[0].title,
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
		let titles = this.props.datas.map((obj)=>{return obj.title});
		this.timer  =  setInterval(()=>{
      		var activePage ;
			activePage = (this.state.currentPage+1 >= titles.length)?0:(this.state.currentPage+1);
      		this.setState({
      			currentPage:activePage,
      			title:titles[activePage],
      		});
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
  					onMomentumScrollEnd = {()=>this.onAnimationEnd.bind(this)}
  					ref = "scrollView"
  					onScrollBeginDrag = {()=>this.onScrollBeginDrag.bind(this)}//开始拖拽时调用
  					onScrollEndDrag = {()=>this.onScrollEndDrag.bind(this)}
  				>
  					{this.renderImages()}
				</ScrollView>,
				//返回焦点
				// ,position:"absolute",right:10
				<View style = {styles.pageControl} key = {102}>
					{this.renderPageTitle()}

					<View style = {{flexDirection:"row",flex:1,justifyContent:"flex-end"}}>
						{this.renderPageControls()}
					</View>
				</View>
				];
	}
	renderImages(){

		var images = [];
		let covers = this.props.datas.map((obj)=>{return obj.img})
		for (var i = 0; i < covers.length; i++) {
			images.push(
				<TouchableOpacity
					key={i}
					activeOpacity = {0.5}
					onPress = {()=>this.props.touchAction.bind(this)}
				>
					<Image 
					source={{uri:covers[i]}} 
					style={{width:width,height:this.props.bannerHeight}} 
				/>
				</TouchableOpacity>
			);
		}
		return images;
	}
	renderPageControls(){
		var controls = [];
		let titles = this.props.datas.map((obj)=>{return obj.title});
		for (var i = 0; i < titles.length; i++) {
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
	renderPageTitle(){
		return <View style = {{flex:3}}><Text style = {{color:"white"}}>{this.state.title}</Text></View>
	}
	//当一帧滚动结束的时候调用
	onAnimationEnd(event){
		// 偏移量
		var offsetX = event.nativeEvent.contentOffset.x;
		var page = Math.floor(offsetX / width);
		this.setState({currentPage:page})
	}
	//开始拖拽调用
	onScrollBeginDrag(){
		clearInterval(this.timer);		
	}
	onScrollEndDrag(){
		this.startTimer();
	}
}
//设置固定值 对应ES5 getDefaultProps
Banner.defaultProps = {
 	duration : 3000,
 	datas:[],
 	bannerHeight:200,
 	touchAction:(index)=>{},
};

const styles = StyleSheet.create({
	container:{
		marginTop:0,
	},
	pageControl:{
		position:"absolute",
		backgroundColor:"rgba(241,241,241,0.8)",
		width:width,
		height:30,
		bottom:0,
		flexDirection:"row",
		alignItems:"center",
		justifyContent:"space-between",
		paddingRight:10,
		paddingLeft:10,
	}

});
module.exports = Banner;