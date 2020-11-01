import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { MaterialIcons,Feather } from '@expo/vector-icons';

export default function HeaderItem({ title, navigation }) {

  return (
    <View style={styles.header}>
        <Feather name="arrow-right"
            onPress={() => navigation.goBack(null)}
            style={styles.icon}
            size={35} 
            color="white"
        />
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.headerText}>{title}</Text>
          <MaterialIcons name="location-on" style={styles.headerIcon}  size={20}  /> 
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