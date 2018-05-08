import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
    ScrollView,
} from 'react-native';

let MineCell = require("./MineCell.js");
let datas = [
				[
					{title:"钱包",subTitle:"账户余额$888.88",icon:"draft"},
					{title:"抵扣券",subTitle:"0",icon:"like"}
				],
				[
					{title:"积分商城",icon:"card"}
				],
				[
					{title:"今日推荐",icon:"new_friend",isNew:true}
				],
				[
					{title:"我要合作",subTitle:"轻松开店，招财进宝",icon:"pay"}
				],
			];
type Props = {};

export default class Mine extends Component<Props> {
	render() {
		return(
			<View style = {styles.container}>
				<ScrollView>
					{this.renderSections()}
				</ScrollView>
			</View>
		)
	}
	renderSections(){
		let sections = [];
		for (var i = 0; i < datas.length; i++) {
			let sectionData = datas[i];
			sections.push(
				<View style = {{marginTop:10}} key = {i}>{
					this.renderCells(sectionData)
				}</View>
			)
		}
		return sections;
	}
	renderCells(sectionData){
		let cells = [];
		for (var i = 0; i < sectionData.length; i++) {
			let data = sectionData[i];
			cells.push(
				<MineCell
					key={i}
					title={data.title}
					subTitle = {data.subTitle}
					icon = {data.icon}
					isNew = {data.isNew}
					touchAction = {(value)=>{console.log("mineCell touchUpInSide");}}
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
module.exports = Mine;