import React,{Component} from 'react';  
import {StyleSheet,Image} from 'react-native';  

export default class TabBarItem extends Component {  
    render() {  
        return(  
            <Image source={ this.props.focused ? this.props.selectedImage : this.props.normalImage}  
                style={iconStyle.item}  
            />  
        )  
    }  
}  
const iconStyle = StyleSheet.create({
	item:{
		width:30,
		height:30, 
	},
})
module.exports = TabBarItem;