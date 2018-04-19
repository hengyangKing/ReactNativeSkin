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
    

} from 'react-native';


type Props = {};
var data = require('./data/Wine.json');
export default class App extends Component<Props> {

// 1.getInitialState 中初始化
// 首先创建一个ListView.DataSource数据源，然后给它传递一个普通的数据数组;

	constructor(Props) {
		super(Props);
	    //1.设置数据源 当且仅当 r1 ！= r2 的时候 
	   	var ds = new ListView.DataSource({  
          /*判断这两行是否相同，就是是否发生变化，决定渲染哪些行组件，避免全部渲染，提高渲染效率*/  
    	rowHasChanged: (oldRow, newRow) => oldRow !== newRow  
     });  
		// 2.设置返回数据
		this.state = {
			dataSource:ds.cloneWithRows(data)
		};
	}
	
	render() {
		return (
			<View>
				<ListView  
            	// style={styles.listView}  
            	dataSource={this.state.dataSource}  
	            renderRow={this.renderRow.bind(this)}  
	            // renderHeader={_renderHeader}  
	            // renderSeparator={_renderSeparator}  
	            // initialListSize={10}  
        		/> 
			</View>
	    );
	}
	renderRow(rowData, sectionID, rowID){
		console.log({rowData, sectionID, rowID});
		return(  
			<View style = {{backgroundColor:"red"}}>
				<Text>{rowData, sectionID, rowID}</Text>
			</View>
			/*
	        <View style={styles.row}>  
	            <Image  
	                style={styles.thumbnail}  
	                source={{uri:movie.posters.thumbnail}}/>  
	            <View >  
	                <Text >{movie.title}</Text>  
	                <Text >{movie.year}</Text>  
	            </View>  
	        </View> 
	        */ 
    	);	
	}
}