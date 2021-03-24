import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';


export default function App() {
  return (
<AppContainer />
  );
}

const switchNavigator = createSwitchNavigator({
  LoginScreen: {screen: LoginScreen},

}) 

const AppContainer = createAppContainer(switchNavigator);