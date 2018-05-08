import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

type Props = {};
let datas = [
				{icon:'order1',title:'待付款'},
				{icon:'order2',title:'待使用'},
				{icon:'order3',title:'待评价'},
				{icon:'order4',title:'退款/售后'},
			];
export  class MineCard extends Component<Props> {
	render() {
		return(
			<TouchableOpacity onPress = {()=>{this.props.touchAction(this)}}>
				<View style = {cardStyle.card}>
					<Image 
						style = {cardStyle.cardIcon}
						source = {{uri:this.props.icon}}
					/>	
					<Text style = {cardStyle.cardTitle}>{this.props.title}</Text>				
				</View>
			</TouchableOpacity>
		)
	}
}
const cardStyle = StyleSheet.create({
	card:{
		justifyContent:"center",
		alignItems:"center",
		flex:1,
	},
	cardIcon:{
		height:48,
		width:66,

	},
	cardTitle:{
		marginTop:3,
		color:"black",
	},
})
MineCard.defaultProps = {
	title:"",//标题
	icon:{},
	touchAction:(index)=>{},
}
export default class MineException extends Component<Props> {
	render() {
		return(
			<View style = {styles.container}>
				{this.renderSubView()}
			</View>
		)
	}
	renderSubView(){
		let subviews = [];
		for (var i = 0; i < datas.length; i++) {
			let data = datas[i];
			subviews.push(
				<MineCard
					key = {i}
					icon = {data.icon}
					title = {data.title}
					touchAction = {(objt)=>{
						console.log(objt);
						// this.props.touchAction(objt.props.key)
					}}
				/>
			)
		}
		return subviews
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:"#ffffff",
		height:60,
	},
});
MineException.defaultProps = {
	touchAction:(index)=>{},
}

module.exports = MineException;