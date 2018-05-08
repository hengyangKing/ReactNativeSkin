import React, { Component } from 'react';
import {
     Platform,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    
} from 'react-native';
var CommonCell = require("./CommonCell.js");
let Item = require("../Views/Nav/NavItem.js");
var datas = [
				[
					{title:"扫一扫",isSwitch:false,subTitle:""}
				],
				[
					{title:"省流量模式",isSwitch:true,subTitle:""},
					{title:"提醒消息",isSwitch:false,subTitle:""},
					{title:"邀请好友",isSwitch:false,subTitle:""},
					{title:"清空缓存",isSwitch:false,subTitle:"1.94M"},
				],
				[
					{title:"意见反馈",isSwitch:false,subTitle:""},
					{title:"问卷调查",isSwitch:false,subTitle:""},
					{title:"支付帮助",isSwitch:false,subTitle:""},
					{title:"网络诊断",isSwitch:false,subTitle:""},
					{title:"关于我们",isSwitch:false,subTitle:""},
					{title:"我要应聘",isSwitch:false,subTitle:""},
				],
				[
					{title:"精品应用",isSwitch:false,subTitle:""},
					{title:"更多信息",isSwitch:false,subTitle:""},
				],
			];

type Props = {};
export default class Setting extends Component<Props> {

  	static navigationOptions = (({ navigation }) => ({
		headerTitle:"设置",
		headerRight:<Item 
						image = {{uri:"icon_mine_setting"}}
						isLeft = {false}
						touchAction = {(objt)=>{
							console.log(objt)
						}}
					/>,
	}));
	render() {
		return (
			<View style = {styles.container}>
				<ScrollView>{
					this.renderSections()
				}
				</ScrollView>
			</View>
    	);
  	}
  	renderSections(){
  		var section = [];
  		console.log(datas);
  		for (var i = 0; i < datas.length; i++) {
  			let sectiondata = datas[i]
  			section.push(
				<View style = {{marginTop:10}} key={i}>{
					this.renderCells(sectiondata)
				}
  				</View>
  			)
  		}
  		return section;
  	}
  	renderCells(sectiondata){
  		var cells = [];
  		for (var i = 0; i < sectiondata.length; i++) {
  			let data = sectiondata[i];
  			cells.push(
  				<CommonCell
  					key={i}
					title={data.title}
					subTitle = {data.subTitle}
					isSwitch = {data.isSwitch}
					touchAction = {(value)=>{console.log("cell touchUpInSide");}}
				/>
  			)
  		}
  		return cells;
  	}
}
const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:"#e8e8e8",
	},
});
module.exports = Setting;
