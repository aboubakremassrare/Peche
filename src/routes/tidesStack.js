import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import HeaderItem from '../shared/headerItem';
import Tides from '../screens/tides';
import Tidesville from '../screens/Tidesville';


const screens = {
  Tides: {
    screen: Tides,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title=' المدوالجزر' iconHeader='elevation-rise' navigation={navigation} />
      }
    },
  },
  Tidesville: {
    screen: Tidesville,
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

const TidesStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: 'white',
    headerStyle: { backgroundColor: 'darkorchid', height: 60 },
  }
});

export default TidesStack;