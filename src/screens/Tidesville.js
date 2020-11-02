import React from 'react';
import { View, StyleSheet,Image,Dimensions } from 'react-native';

  const { width } = Dimensions.get('window')

  const Tidesville = ({navigation}) => {

    //Desclaration de constantes
    const urlTides='https://fr.tideschart.com/tides/fr/horaires-des-mar%C3%A9es-'
    const paysTides='-Morocco-m.png'
    const urlNameTides=navigation.state.params.urlNameTides

    return (
            <View style={styles.container}>
                  <Image resizeMode="stretch" source={{uri:`${urlTides}${urlNameTides}${paysTides}`}} style={styles.avatarTides} />
            </View>
    );
  };

  const styles = StyleSheet.create({
      container: 
      {
          flex: 1,
          paddingTop: 50
      },
      avatarTides: 
      {
          width: width-2,
          height: 400,
      },
  });

export default Tidesville;
