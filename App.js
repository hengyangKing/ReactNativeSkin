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
    ListView,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';

var datas = require("./data/Car.json").data;
var {width ,height} = require("Dimensions").get("window");

type Props = {};


export default class App extends Component<Props> {
	constructor(Props){  
        super(Props); 
        //获取组数据
        var  getSectionData = (dataBlob,sectionId) => {
			return dataBlob[sectionId];
        };
        var getRowData = (dataBlob,sectionId,rowId) => {
        	let data = dataBlob[sectionId + ":" + rowId];
        	console.log(data);
			return data;
        };
        this.state = {
        	dataSource:new ListView.DataSource({  
        	getSectionData:getSectionData,
			getRowData:getRowData, 
			rowHasChanged:(r1,r2) => r1!=r2,
			sectionHeaderHasChanged:(s1,s2) => s1!=s2,

        	})
        } 
    }  	
	render() {
	    return (	
			<View style = {styles.baseViewStyle}>
				<ListView
					dataSource = {this.state.dataSource}
					renderRow = {this.renderRow.bind(this)}
					renderSectionHeader = {this.renderSectionHeader.bind(this)}
				/>
			</View>	
	    );
	}

	renderRow(rowData,sectionId,cellId) {
		return(
			<TouchableOpacity activeOpacity = {0.5}>
				<View style = {styles.cellStyle}>
					<Image
						source = {{uri :rowData.icon}}
						style = {styles.iconStyle}
					/>
					<Text style = {styles.titleStyle}>
						{rowData.name}
					</Text>
				</View>
			</TouchableOpacity>
		);
	}
	renderSectionHeader(sectionData,sectionId) {
		return(
			<View style = {{ backgroundColor:'#ccc'}}>
				<Text style = {{ fontSize:20,height :44,}}>{sectionData}</Text>
			</View>
		);
	}
	//渲染完成后调用
	componentDidMount(){
		this.loadDataFromJson();
	}
	loadDataFromJson(){
		var jsonDatas = datas;
		//所有的数据
		var dataBlob = {},
			sectionsIds = [],
			rowIds = [],
			cars = [];

		for (var i = 0; i < jsonDatas.length; i++) {
			sectionsIds.push(i);

			dataBlob[i] = jsonDatas[i].title;
			cars = jsonDatas[i].cars;
			rowIds[i] = [];
			for (var j = 0; j < cars.length; j++) {
				rowIds[i].push(j);
				dataBlob[i+":"+j] = cars[j];
			}
		}

		//更新状态 绑定参数
		this.setState({
			dataSource:this.state.dataSource.cloneWithRowsAndSections(dataBlob,sectionsIds,rowIds)
		});
	}
}

var styles = StyleSheet.create({
	baseViewStyle:{
		flex:1,
	},
	cellStyle:{
      flexDirection:'row',
      borderBottomColor:'#ccc',
      borderBottomWidth:1,
      padding:10
  	},
	iconStyle :{
		width:70,
		height:70,
		marginRight:10
	},
	titleStyle:{
		marginTop:10,
	}
});

