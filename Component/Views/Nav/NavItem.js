import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';  

export default class NavItem extends Component {  
    render() {  
        return(  
            <TouchableOpacity onPress = {()=>{this.props.touchAction(this)}}>
                <View style = {{
                                justifyContent:this.props.isLeft? "flex-end":"flex-start",
                                width:44,
                                height:44,
                                flexDirection:"row",
                                alignItems:"center",
                            }}>
                    <Image 
                        source = {this.props.image} 
                        style = {itemStyle.icon}
                    />
                </View>
            </TouchableOpacity> 
        )  
    }  
}  
const itemStyle = StyleSheet.create({
    icon:{
        width:30,
        height:30,
    },
})
NavItem.defaultProps = {
    touchAction:(value)=>{},
    isLeft:true,
    image:{},
}
module.exports = NavItem;