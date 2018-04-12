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
    TextInput,

} from 'react-native';

// TextInput是一个允许用户输入文本的基础组件。
// 它有一个名为onChangeText的属性，此属性接受一个函数，而此函数会在文本变化时被调用。
// `另外还有一个名为onSubmitEditing的属性，会在文本被提交后（用户按下软键盘上的提交键）调用。

// styles = {{backgroundColor:"red",width:100,height:30,}}
type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
        <View style = {styles.container}>

            <TextInput 
                style = {contentStyle.input} 
                value = {'我是默认文字'}
                placeholder="Type here to translate!"
                multiline = {true}
                onChangeText = {(text) => this.setState({input:text})}

            />
           
        </View>
        );
    }
}
var styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#f5fcff",

    }
})
var contentStyle = StyleSheet.create({
    input:{
        width:200,
        // height:30,
        borderWidth:1,
        borderColor:"yellow",
    }
})


