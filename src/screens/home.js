import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity,Image } from 'react-native';
import { MaterialCommunityIcons,Feather,Entypo} from '@expo/vector-icons';

export default function Home({ navigation }) {

  const [reviews, setReviews] = useState([
    { title: 'Welcome To gamezone app', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: '', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: '', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);

  
  const IconSize=50
  const color='#ffdd00'

  return (
    // <View style={globalStyles.container}>
    //   <FlatList data={reviews} renderItem={({ item }) => (
    //     <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
    //       <Text style={globalStyles.titleText}>{ item.title }</Text>
    //     </TouchableOpacity>
    //   )} />
    // </View>
 


        <View style={styles.container} >

              <View style={styles.titleContent}  >

                    <Text style={styles.titleContentTitle}>مرحبا بكم</Text>

              </View>

              <View style={styles.menuContent} >
                    <View style={styles.menuContentButton}>
                            <View style={styles.menuContentButtonLabel} >
                            <TouchableOpacity onPress={() => navigation.navigate('Tides')}>
                              <MaterialCommunityIcons
                                  name="elevation-rise"
                                  size={IconSize}
                                  color={color}
                              />
                              <Text style={styles.menuContentButtonText} >المدوالجزر</Text>
                            </TouchableOpacity>
                            </View>

                            <View style={styles.menuContentButtonLabel} >
                              <Entypo
                                  name="moon"
                                  size={IconSize}
                                  color={color}
                              />
                              <Text style={styles.menuContentButtonText} > دورةالقمر</Text>
                            </View>

                            <View style={styles.menuContentButtonLabel}  >
                            <TouchableOpacity onPress={() => navigation.navigate('About')}>
                              <MaterialCommunityIcons
                                  name="weather-partlycloudy"
                                  size={IconSize}
                                  color={color}
                              />
                              <Text style={styles.menuContentButtonText} > الطقس</Text>
                            </TouchableOpacity>
                            </View>
                    </View>

                    <View style={styles.menuContentButton}>
                            <View style={styles.menuContentButtonLabel} >
                              <Feather
                                  name="message-circle"
                                  size={IconSize}
                                  color={color}
                              />
                              <Text style={styles.menuContentButtonText} > اش كال؟ </Text>
                            </View>

                            <View style={styles.menuContentButtonLabel} >
                            <TouchableOpacity onPress={() => navigation.navigate('Boussole')}>
                              <Feather
                                  name="compass"
                                  size={IconSize}
                                  color={color}
                              />
                              <Text style={styles.menuContentButtonText} >البوصلة </Text>
                              </TouchableOpacity>
                            </View>

                            <View style={styles.menuContentButtonLabel} >
                              <Feather
                                  name="shopping-cart"
                                  size={IconSize}
                                  color={color}
                              />
                              <Text style={styles.menuContentButtonText} > بيع وشري</Text>
                            </View>
                      
                    </View>
           
              </View>
              <View style={styles.avatarContent}>

                    <Image source={require("../../assets/pecheur.jpg")} style={styles.avatarContentImage} />
                  
              </View>

              <View style={{ flex: 0.05, backgroundColor: '#7DD0E5' }} >

              </View>

        </View>      
         


  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContent: {
    flex: 0.2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleContentTitle:{
    fontSize:45,
    color:'#55bdef',
    fontWeight: 'bold'
  },
  menuContent:{
    flex: 0.4,
    backgroundColor: 'white'

  },
  menuContentButton:{
    flex: 0.5,
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:'center' 
  },
  menuContentButtonLabel:{
    width: 100,
    height: 100,
    alignItems:'center'

  },
  menuContentButtonText:{
    color:'#55bdef',
    fontSize:20,
    fontWeight: 'bold'

  },
  avatarContent:{
    flex: 0.35,
    backgroundColor: 'white' ,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatarContentImage:{
      width: 80,
      height: 180,
  }

});