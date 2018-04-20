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

var datas = require("./data/shareData.json").data;
var {width ,height} = require("Dimensions").get("window");
var cols = 3;
var margin = 5;
var cellW  = (width/cols) - (margin *2*cols);

type Props = {};


export default class App extends Component<Props> {
	constructor(Props){  
        super(Props);  
        var ds = new ListView.DataSource({  
            /*判断这两行是否相同，就是是否发生变化，决定渲染哪些行组件，避免全部渲染，提高渲染效率*/  
            rowHasChanged: (oldRow, newRow) => oldRow !== newRow  
        });  
        this.state = {  
            /*不使用原始数据，有一个拷贝的过程*/  
            /*使用复制后的数据源实例化ListView。优势：当原始数据发生变化时，
            那ListView组件的DataSource不会改变*/  
            /*是一个数组*/  
            dataSource:ds.cloneWithRows(datas)  
        };  
    }  	
	render() {
		console.log(datas);
	    return (	
			<View style = {{flex:1,}}>
				<ListView
				dataSource = {this.state.dataSource}
				renderRow = {this.renderRow.bind(this)}
				contentContainerStyle = {styles.listStyle}
				/>
			</View>	
	    );
	 }
	renderRow(rowData,sectionId,cellId){
		return(
			<TouchableOpacity activeOpacity = {0.5}>
				<View style = {styles.collectionCell}>
					<Image
						source = {{uri :rowData.icon}}
						style = {styles.iconStyle}
					/>
					<Text style = {styles.titleStyle}>
						{rowData.title}
					</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

var styles = StyleSheet.create({
	listStyle:{
		flexDirection:"row",
		flexWrap:"wrap",
		alignItems:"center",
		backgroundColor:"yellow",
		flex:1,
		// justifyContent:"center",
	},
	collectionCell:{
		margin:margin,
		alignItems:"center",

	},
	iconStyle :{
		width:cellW,
		height:cellW,
	},
	titleStyle:{
		marginTop:10,
	}
});

