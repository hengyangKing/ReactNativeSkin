import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
let datas = [
				{number:'100',title:'码哥券'},
				{number:'12',title:'评价'},
				{number:'50',title:'收藏'}
			];

export  class MineNavItem extends Component<Props> {
	render() {
		return(
			<TouchableOpacity onPress = {()=>{this.props.touchAction(this.props.index)}}>
				<View style = {itemStyle.item}>
					<Text style = {itemStyle.itemText}>{this.props.number}</Text>
					<View style = {{marginTop:5}}></View>	
					<Text style = {itemStyle.itemText}>{this.props.title}</Text>				
				</View>
			</TouchableOpacity>
		)
	}
}
MineNavItem.defaultProps = {
	title:"",//标题
	number:{},
	index:0,
	touchAction:(index)=>{},
}
export default class MineNav extends Component<Props> {
	render() {
		return(
			<View style = {navStyle.container}>
				{/*上部分*/}
                {this.renderTopView()}
                {/*下部分*/}
                {this.renderBottomView()}			
            </View>
		)
	}
	renderTopView(){
		return(
			<TouchableOpacity onPress = {()=>{this.props.touchIconAction()}}>
				<View style={topStyle.topView}>
					<Image source={{uri: 'see'}} style={topStyle.leftIconStyle}/>
					<View style={topStyle.centerViewStyle}>
						<Text style={{fontSize:20, color:'white', fontWeight:'bold',marginLeft:5}}>Foo</Text>
						<Image source={{uri: 'avatar_vip'}} style={{width:17, height:17}}/>
					</View>
					{/*--右边的箭头--*/}
					<Image source={{uri: 'icon_cell_rightArrow'}} style={{width:8, height:13, marginRight:8}}/>
        		</View>		
			</TouchableOpacity>
		)
	}
	renderBottomView(){
		return(
			<View style={bottomStyle.bottomView}>
                {this.renderBottomItem()}
            </View>
		)
	}
	renderBottomItem(){
		let items = [];
		for (var i = 0; i < datas.length; i++) {
			let data = datas[i];
			items.push(
				<MineNavItem
					key = {i}
					index = {i}
					title = {data.title}
					number = {data.number}
					touchAction = {(index)=>{
						this.props.touchItemAction(index)
					}}
				/>
			)
		}
		return items;
	}
}
let {width,height} = require('Dimensions').get('window');
const navStyle = StyleSheet.create({
	container:{
		height:200,
		backgroundColor:'rgba(255,96,0,1.0)',
	},
});
const topStyle = StyleSheet.create({
	topView:{
		marginTop:66,
		marginRight:14,
		marginLeft:14,
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center',
	},
	leftIconStyle:{
		width:70,
        height:70,
        borderRadius:35,
        borderWidth:3,
        borderColor:'rgba(0,0,0,0.2)',
	},
	centerViewStyle:{
		flexDirection:'row',
        width:width * 0.72
	}
})
const bottomStyle = StyleSheet.create({
	bottomView:{
		flexDirection:'row',
		justifyContent:"space-around",
		alignItems:'center',
        flex:1,
        marginTop:10,
        backgroundColor:'rgba(255,255,255,0.4)',
	},
})
const itemStyle = StyleSheet.create({
	item:{
		justifyContent:'center',
		alignItems:'center',
		width:(width/3)+1,
		borderRightWidth:1,
        borderRightColor:'white',
	},
	itemText:{
		color:"white",
		fontSize:14,
	},
})
MineNav.defaultProps = {
	touchItemAction:(index)=>{},
	touchIconAction:()=>{},
}
module.exports = MineNav;