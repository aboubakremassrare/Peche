import React from 'react';
import {Image, View, Text,StyleSheet,Dimensions,ImageBackground } from 'react-native';


const { width } = Dimensions.get('window')

const Meteocarte = ({item})=>{

 const api_urlIcon='http://openweathermap.org/img/w/'

    return(
        <View style={styles.ViewCart}>

           <View style={{ width: width*0.9, padding: 16}} >
                    <ImageBackground
                        source={require("../../assets/meteoblue.jpg")}
                        imageStyle={{ borderRadius: 130}}
                        style={{ width: undefined, padding: 16 }}
                    >
                        <View >
                            <Text style={styles.TextHeader}>الساعة  {item.dt_txt.split(" ")[1]}</Text> 
                            <View style={{ flexDirection: 'row',justifyContent:'flex-end',alignItems:'center' }}>
                                    <Text style={styles.TextStyleTemp}>{item.main.temp_max.toFixed(0)}°</Text> 
                                    <Image
                                        resizeMode="cover"
                                        source={{uri: `${api_urlIcon}${item.weather[0].icon}.png`}}
                                        style={styles.iconmeteo}
                                    />
                            </View>
                            <Text style={styles.TextStyle}>درجة حرارة الدنوية: {item.main.temp_min}</Text>   
                            <Text style={styles.TextStyle} >سرعة الرياح : {item.wind.speed} كم/ س</Text>
                            <Text style={styles.TextStyle} >الرطوبة : % {item.main.humidity} </Text>
                            <Text style={styles.TextStyle} >الوصف : {item.weather[0].description}</Text> 
                        </View>
                    </ImageBackground>

            </View>
        </View> 

    )
}

export default Meteocarte;


const styles = StyleSheet.create({
 
    ViewCart:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
    },
    iconmeteo: {
        width: 90,
        height: 110,
        borderRadius: 40,
        borderWidth: 0,
        borderColor: "#FFF",
        alignSelf:'flex-end',
        marginVertical:10,
        marginHorizontal:25
      
    },
    TextStyleTemp:{
        top:5,
        fontSize:32,
        color:'yellow',
        fontWeight: 'bold'
        
    },
    TextStyle:{
         fontSize:18,
         textAlign:'center',
         color:'white'
    },
    TextHeader:{
        fontWeight: 'bold',
        color:'yellow',
        fontSize:20,
        textAlign:'center',
   
    }

});