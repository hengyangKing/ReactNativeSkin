import { AppRegistry } from 'react-native';
import App from './App';

// //外部组件类
// import TabNavigator from 'react-native-tab-navigator';
// import { StackNavigator } from 'react-navigation';


// let Home = require('./Component/Home/Home.js');
// let Home_2 = require('./Component/Home/Home_2.js');

// let Mine = require('./Component/Mine/Mine.js');
// let More = require('./Component/More/More.js');
// let Shop = require('./Component/Shop/Shop.js');


// // 通过TabNavigator做路由映射
// const MainScreentNavigator=TabNavigator({
//     Home:{screen:Home},
//     Shop:{screen:Shop},
//     More:{screen:More},
//     Mine:{screen:Mine},
// });

// //引入要用到的跳转页面
// const  MyNavigatior = StackNavigator({
//     Main:{screen:MainScreentNavigator},
//     DetailVC:{screen:Home_2},
// },{
//     initialRouteName: 'Main',
// });



AppRegistry.registerComponent('HelloWorld', () => App);
