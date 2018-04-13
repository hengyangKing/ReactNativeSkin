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
    Image,

} from 'react-native';

var LoginView = require('./Login/loginView');

type Props = {};
export default class App extends Component<Props> {
  	render() {
    	return ( 
    		<LoginView />
    	);
 	}
}



