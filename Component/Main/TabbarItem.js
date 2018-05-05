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
    getTabBarItem(iconPar,normalImage,selectedImage){
	return <TabBarItem  
             		tintColor={iconPar.tintColor}  
              		focused={iconPar.focused}  
              		normalImage={normalImage}  
              		selectedImage={selectedImage}  
        	/>  
	}  
}  
const iconStyle = StyleSheet.create({
	item:{
		width:30,
		height:30, 
	},
})
module.exports = TabBarItem;