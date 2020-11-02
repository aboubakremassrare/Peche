import React, {useContext,useEffect,useState} from 'react';
import { View, StyleSheet,FlatList,ScrollView,Dimensions,ActivityIndicator } from 'react-native';
import { Context } from '../context/BlogContext';
import { Button } from 'react-native-elements';
import moment from "moment";
import PickerBox from 'react-native-picker-box';
import Constants from 'expo-constants';
import MeteoCarte from '../components/Meteocarte';
import Icon from 'react-native-vector-icons/FontAwesome';



  const { width } = Dimensions.get('window')
  const Meteoville = ({navigation}) => {
    
  const {state,getblogPost}=useContext(Context)
  const day= new Date()
  const weekDay=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  const [selectedLabel,setSelectedLabel]=useState(weekDay[day.getDay()]) 
  const [request,setRequest]=useState(false)
  const [selectedValueOption, setSelectedValueOption] = useState(moment(new Date(day.getTime() + 24 * 60 * 60 * 1)).format("YYYY-MM-DD"));

            useEffect(()=>{
                  getblogPost(navigation.getParam('name'));
                  const listener =navigation.addListener('didFocus',()=>{
                  getblogPost(navigation.getParam('name'));
                  });
                  setRequest(true)

                  return () => {
                    listener.remove();
                  };
            },[]);

            SwitchJourenArabe = (jour) =>{
              
              switch (jour) {
                case 'Monday':
                      return 'الاثنين'
                      break;
                case 'Tuesday':
                      return 'الثلاثاء'
                      break;
                case 'Wednesday':
                      return 'الاربعاء'
                      break;
                case 'Thursday':
                      return 'الخميس'
                      break;
                case 'Friday':
                      return 'الجمعة'
                      break;
                case 'Saturday':
                      return 'السبت'
                      break;
                case 'Sunday':
                      return 'الأحد'
                      break;
                default:
                      return 'الاثنين'
              }
            }

              filterDateLabelValue = (valueDate) =>{
                return {label:this.SwitchJourenArabe(weekDay[new Date(day.getTime() + 24 * 60 * 60 * valueDate).getDay()]),
                  value:moment(new Date(day.getTime() + 24 * 60 * 60 * valueDate)).format("YYYY-MM-DD")}
              } 
            const dayData= 
            [
              this.filterDateLabelValue(1),
              this.filterDateLabelValue(1000),
              this.filterDateLabelValue(2000),
              this.filterDateLabelValue(3000),
              this.filterDateLabelValue(4000),
              this.filterDateLabelValue(5000),
              this.filterDateLabelValue(6000),
            ]

            onPickerValueChange = (label, index) => {
                let selectName = dayData.find(branch => branch.label === label);
                setSelectedValueOption(selectName.value)
                setSelectedLabel(label);
            };

  return (

    request==true ?
                  <View style={styles.containView} >
                          <View style = {styles.containerButton}>
                              <Button 
                                  buttonStyle={{width:width*0.8,borderRadius:15,backgroundColor:'#90A4AE'}}
                                  icon={<Icon style={{ marginLeft: 20 }} name="calendar" size={20} color="white"/>}
                                  iconRight={true}
                                  title={selectedLabel}  
                                  onPress={() => this.myref.openPicker() }
                              />
                          </View> 
                          <ScrollView showsVerticalScrollIndicator={false}>
                              <FlatList
                              style={{flex: 1}}
                              scrollEnabled={false}
                              data={state.list}
                              renderItem={({ item }) =>
                              item.dt_txt.split(" ")[0] == selectedValueOption
                              ?
                                  <MeteoCarte item={item}/>
                              :
                              null
                              }
                              keyExtractor={(item, index) => index.toString()}
                          />
                          </ScrollView>
                          <PickerBox
                              ref={ref => this.myref = ref}
                              data={ dayData }
                              onValueChange={(value, index) => this.onPickerValueChange(value, index)}
                              selectedValue={ selectedValueOption }
                           />
                  </View>
                  :
                   <View style={{ flex: 1, paddingTop: 100 ,}} >
                          <ActivityIndicator size="large" color="#0000ff" />
                   </View>
  );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
      },
    containView: {
        flex: 1,
        backgroundColor: '#eee',
    },
    containerButton: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:5
   }

});

export default Meteoville;
