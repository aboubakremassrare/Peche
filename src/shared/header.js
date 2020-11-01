import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from "@expo/vector-icons";


export default function Header({ title, navigation,iconHeader }) {

  const openMenu = () => {
    navigation.openDrawer();
  }

  return (
    <View style={styles.header}>
      <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.headerText}>{title}</Text>
        <MaterialCommunityIcons name={iconHeader} style={styles.headerIcon} size={24}  /> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'darkorchid'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    right: 16,
    color:'white'
  },
  headerIcon:{
    color:'yellow',
    marginLeft:5
  }
});