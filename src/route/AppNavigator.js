/* eslint-disable prettier/prettier */
//Libary
import React, {Component} from 'react';

//Stack NAvigation
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// import {reanima} from 'react-native-reanimated';

//Screen
import Hello from '../screen/Redux-From/Hello';
import WelcomeHello from '../screen/Redux-From/WelcomeHello';

//Styles

// const AutoStack = createStackNavigator(
//   {
//     Login: {screen: Login},
//     RegisterCommon: {screen: RegisterCommon},
//   },
//   {
//     // headerMode: 'none',
//   },
// );

const AuthStack = createStackNavigator({
  // MyDrawerNavigation,

  // AutoStack,
  Hello: {screen: Hello},
  WelcomeHello: {screen: WelcomeHello},
});

const AppNavigator = createAppContainer(AuthStack);

export default AppNavigator;
