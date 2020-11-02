import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import HeaderItem from '../shared/headerItem';
import About from '../screens/about';
import Meteoville from '../screens/meteoville';

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='الطقس' iconHeader='weather-hail' navigation={navigation} />
      }
    },
  },
  Meteoville: {
    screen: Meteoville,
    navigationOptions:({ navigation })=> {
      return {
        headerTitle: () => 
        <HeaderItem title={navigation.getParam('namearab')} navigation={navigation} /> , 
        headerTitleStyle: {
          textAlign: 'center',
          flexGrow:1,
          alignSelf:'center',
          marginLeft:100
      },
        headerLeft: null
      }
    }
  },
}

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: 'white',
    headerStyle: { backgroundColor: 'darkorchid', height: 60 },
  }
});

export default AboutStack;