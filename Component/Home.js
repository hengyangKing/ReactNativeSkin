import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
    ListView,
    Image,

} from 'react-native';
//引入外部组件


type Props = {};

export default class Home extends Component<Props> {
    constructor(Props) {
        super(Props);
        // var ds = new ListView.DataSource({  
        //     判断这两行是否相同，就是是否发生变化，决定渲染哪些行组件，避免全部渲染，提高渲染效率  
        //     rowHasChanged: (oldRow, newRow) => oldRow !== newRow  
        // }); 
        this.state = {  
            // dataSource:ds.cloneWithRows(datas)
        };  
  }
    render() {
        return (
        	<View style = {{flex:1,backgroundColor:"yellow",justifyContent:"center",alignItems:'center'}}>
               <Text>Home</Text> 
        	</View>
        );
    }
    componentDidMount(){
        this.loadData();
    }


    //网络请求
    loadData(){
        return;
        // http://v.juhe.cn/toutiao/index?type=top&key=APPKEY
        let url = this.baseURL + "type=" + this.keyWord + "&key=" + this.key;
        console.log(url);
        
// http://v.juhe.cn/toutiao/index?type=tiyu&key=340bee2a8336749cc92c5ec0cbeeec80

        return fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
            return responseJson.movies;
        }).catch((error) => {
        console.error(error);
        });
    }
}
Home.defaultProps = {
  baseURL: "http://v.juhe.cn/toutiao/index?",
  key:"340bee2a8336749cc92c5ec0cbeeec80",
  keyWord:"tiyu",
};

// 输出类
module.exports = Home;