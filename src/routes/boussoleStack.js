import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Boussole from '../screens/boussole';
import ReviewDetails from '../screens/reviewDetails';

const screens = {
  Boussole: {
    screen: Boussole,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title=' بوصلة ' navigation={navigation} />
      }
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Review Details',
    }
  },
  
};

// home stack navigator screens
const BoussoleStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: 'white',
    headerStyle: { backgroundColor: 'darkorchid', height: 60 }
  }
});

export default BoussoleStack;


