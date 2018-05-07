import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Switch,
    
} from 'react-native';
type Props = {};
export default class CommonCell extends Component<Props> {
	constructor(Props){  
        super(Props);    
        this.state = {  
        	isOn:false,
		}
	}
	render() {
		return (
			<TouchableOpacity onPress = {()=>this.props.touchAction()}>
				<View style = {cellStyles.cell}>
					{/*左边*/}
					<Text style = {cellStyles.text}>{this.props.title}</Text>
					{/*右边*/}
					{this.renderRightView()}
				</View>
			</TouchableOpacity>
    	);
  	}
  	renderRightView(){

		if (this.props.isSwitch) {
			return(
				<Switch 
					value = {this.state.isOn}
					onValueChange = {()=>{
						this.setState({
							isOn:!this.state.isOn,
						})
					}}
				/>
			)
		}
		return (
			<View style = {cellStyles.subView}>
				<Text style = {cellStyles.text,{fontSize:14}}>
					{this.props.subTitle}
				</Text>
				<View style = {{width:5}}></View>
				<Image 
					source = {{uri:"icon_cell_rightArrow"}}
					style = {{width:8,height:13}}
				/>
			</View>
		)

  	}
  	
}
var {width,height,scale} = require("Dimensions").get("window");

const cellStyles = StyleSheet.create({
	cell:{
			height:44,
			flexDirection:"row",
			justifyContent:"space-between",
			alignItems:"center",
			backgroundColor:"white",
			borderBottomColor:"#dddddd",
			borderBottomWidth:0.5,
			paddingLeft:14,
			paddingRight:14,
			width:width,
	},
	subView:{
		flexDirection:"row",
		alignItems:"center",

	},
	text:{
		color:"#979797",
		fontSize:16,
	}
});
CommonCell.defaultProps = {
	title:"",//标题
	isSwitch:false,//是否展示开关
	subTitle:"",//子标题
	touchAction:(value)=>{},

	
}
module.exports = CommonCell;