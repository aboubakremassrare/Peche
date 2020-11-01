import React from "react";

import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Dimensions } from "react-native";
import { Feather,MaterialCommunityIcons } from "@expo/vector-icons";
import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import TidesStack from './tidesStack';
import BoussoleStack from './boussoleStack';
import SideBar from "../shared/SideBar";


const DrawerNavigator = createDrawerNavigator(
    {
        'الصفحة الرئيسية': {
            screen: HomeStack,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => <Feather name="home" size={16} color={tintColor} />
            }
        },
        'الطقس': {
            screen: AboutStack,
            navigationOptions: {
                title: "الطقس",
                drawerIcon: ({ tintColor }) => <Feather name="cloud" size={16} color={tintColor} />
            }
        },
        'المدوالجزر': {
            screen: TidesStack,
            navigationOptions: {
                title: "المدوالجزر",
                drawerIcon: ({ tintColor }) => <MaterialCommunityIcons name="elevation-rise" size={16} color={tintColor} />
            }
        },
        'بوصلة': {
            screen: BoussoleStack,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => <Feather name="compass" size={16} color={tintColor} />
            }
        },
    },
    {
        contentComponent: props => <SideBar {...props} />,
        drawerWidth: Dimensions.get("window").width * 0.85,
        drawerPosition: 'right',
        hideStatusBar: true,
        contentOptions: {
          activeBackgroundColor: "rgba(212,118,207, 0.2)",
          activeTintColor: "#53115B",
            itemsContainerStyle: {
                marginTop: 16,
                marginHorizontal: 8
            },
            itemStyle: {
                borderRadius: 4,
                flexDirection: 'row-reverse'
            }
        }
    }
);

export default createAppContainer(DrawerNavigator);
