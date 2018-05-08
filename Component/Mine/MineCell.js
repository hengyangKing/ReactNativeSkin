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
 
export default class MineCell extends Component<Props> {
	render() {
		return(
			this.renderSubview()
		)
	};
	renderSubview(){
		return(
			<TouchableOpacity>
				<View style = {cellStyle.container}>
					{/*左边*/}
					<View style = {cellStyle.leftStyle}>
						<Image source = {{uri:this.props.icon}} style = {cellStyle.iconStyle}/>	
						<Text style = {cellStyle.titleStyle}>
							{this.props.title}
						</Text>
					</View>
					{/*右边*/}	
					{this.rightSubView()}		
				</View>
			</TouchableOpacity>
		)
	}
	rightSubView(){
		return(
			<View style = {cellStyle.rightStyle}>
				{this.rightContent()}

				<Image
					source = {{uri:"icon_cell_rightArrow"}}
					style = {{width:8,height:13,marginLeft:5}}
				/>
			</View>
		)
	}
	rightContent(){
		if (this.props.subTitle.length == 0) {
			if (this.props.isNew) {
				return(
					<Image
						source = {{uri:"me_new"}}
						style = {{width:24,height:13}}	
					/>
				)
			}
		}
		return (
			<Text style = {cellStyle.subTitleStyle}>{this.props.subTitle}</Text>
		)
	}
	gapView(){
		return(<View style = {{marginLeft:5}}></View>)
	}
}
const cellStyle = StyleSheet.create({
	container:{
		flexDirection:"row",
		justifyContent:"space-between",
		alignItems:"center",
		paddingLeft:14,
		paddingRight:14,
		height:44,
		backgroundColor:"white",
		borderBottomColor:"#dddddd",
		borderBottomWidth:0.5,
		flex:1,
	},
	leftStyle:{
		flexDirection:"row",
		justifyContent:"space-between",
		alignItems:"center",
	},
	rightStyle:{
		flexDirection:"row",
		justifyContent:"space-between",
		alignItems:"center",
	},
	iconStyle:{
		width:30,
		height:30,
		// 设置圆角
        borderRadius:15,
	},
	titleStyle:{
		color:"black",
		marginLeft:5,
	},
	subTitleStyle:{
		color:"#979797",
	}
});
MineCell.defaultProps = {
	title:"",//标题
	icon:{},
	subTitle:"",
	isNew:false,
	touchAction:(value)=>{},
}
module.exports = MineCell;