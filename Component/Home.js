import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
    ListView,
    Image,
    TouchableOpacity,


} from 'react-native';
//引入外部组件
let data = require('./Views/Banner/Banner.js');
type Props = {};

export default class Home extends Component<Props> {
    constructor(Props) {
        super(Props);
        
        this.state = {  
            headerDataArr:[],
            dataSource :new ListView.DataSource({
                rowHasChanged: (oldRow, newRow) => {oldRow != newRow},  
            }),

        };  
    }
    render() {
        return (
        	<View style = {{flex:1,backgroundColor:"#D3D3D3",justifyContent:"center",alignItems:'center'}}>
               <ListView
                    dataSource = {this.state.dataSource}
                    renderRow = {this.renderRow.bind(this)}
                    renderHeader = {this.renderHeader.bind(this)}
                    style = {{width:width,}}
               />
        	</View>
        );
    }
    componentDidMount(){
        let request = this.loadData();
    }
    //UI
    renderRow(rowdata){
        let date = rowdata.date;
        let timestamp = date.split(" ",).length ? date.split(" ",)[0]:date;
        return <TouchableOpacity activeOpacity = {0.5}>
                <View style = {style = cellStyles.cell}>
                    {/*左边*/}
                    <Image 
                        style = {cellStyles.cover}
                        source = {{uri:rowdata.thumbnail_pic_s}}
                     />
                    {/*右边*/}
                    <View style = {{margin:10,flex:1}}>
                        <Text style = {cellStyles.title}>{rowdata.title}</Text>
                        <Text style = {cellStyles.date}>{timestamp}</Text>
                    </View>
                </View>
            </TouchableOpacity>
    }

    renderHeader(){
        return(
            <View>
                <Text>foo</Text>
                
            </View>
        )
    }

    //网络请求
    loadData(){

        let url = this.props.baseURL + "type=" + this.props.keyWord + "&key=" + this.props.key;
        return fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {

                if (responseJson.reason == '成功的返回' && responseJson.error_code == 0) {
                    let data =  responseJson.result.data; 
                    this.layoutViewsWithData(data);
                }
        }).catch((error) => {
            if (error) {
                console.log(error);
            }
        });
    }
    
    layoutViewsWithData(datas){
        var headerDatas = [];
        var bodyDatas = [];
        let headerIndex = 5;
        if (datas.length > headerIndex) {
            headerDatas = datas.slice(0,headerIndex);
            bodyDatas = datas.slice(headerIndex,);
        }else{
            bodyDatas = datas;
        }
        this.setState({
            headerDataArr:headerDatas,
            dataSource:this.state.dataSource.cloneWithRows(bodyDatas),
        });
    }
}
Home.defaultProps = {
  baseURL: "https://v.juhe.cn/toutiao/index?",
  key:"340bee2a8336749cc92c5ec0cbeeec80",
  keyWord:"tiyu",
};

var {width ,height,scale} = require("Dimensions").get("window");

var cellStyles = StyleSheet.create({
    cell:{
        flexDirection:"row",
        borderWidth:0.5,
        borderColor:"gray",
    },
    cover:{
        width:100,
        height:100,

    },
    title:{
        fontSize:16,
    },
    date:{
        position:"absolute",
        right:0,
        bottom:0,
    },
})
// 输出类
module.exports = Home;