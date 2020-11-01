// import React from 'react';
// import { FlatList,ScrollView , View, Dimensions,StyleSheet,ActivityIndicator } from 'react-native';
// import { Button } from 'react-native-elements';
// import axios from 'axios';
// import moment from "moment";
// import PickerBox from 'react-native-picker-box';
// import Constants from 'expo-constants';
// import MeteoCarte from '../components/Meteocarte';
// import Icon from 'react-native-vector-icons/FontAwesome';


// const { width } = Dimensions.get('window')

// export default class Meteoville extends React.Component {
//     constructor (props) {
//         super(props)
//         this.api_urlMeteo = 'http://api.openweathermap.org/data/2.5/forecast?q=';
//         this.api_key='1ae0e05d29e5676b5e6ae70a74f6fef2';
//         this.state = {
//             city: this.props.navigation.getParam('name') ,
//             searchCity: '',
//             selectedValueOption:null,
//             selectedLabel:'',
//             report: null,
//             request: false,
//             data:null,
//             gsDayNames : ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],

//             d : new Date(),
//         }
//         this.fetchWeather();

//     }

//     componentDidMount() {
        
//       this.setState({ selectedLabel: this.state.gsDayNames[this.state.d.getDay()],
//         selectedValueOption:moment(new Date(this.state.d.getTime() + 24 * 60 * 60 * 1)).format("YYYY-MM-DD") })
//        }


//       filterdate(date){
//          return this.SwitchJourenArabe(this.state.gsDayNames[new Date(this.state.d.getTime() + 24 * 60 * 60 * date).getDay()])
//       }


//       SwitchJourenArabe(jour){
    
//         switch (jour) {
//           case 'Monday':
//                 return 'الاثنين'
//                 break;
//           case 'Tuesday':
//                 return 'الثلاثاء'
//                 break;
//           case 'Wednesday':
//                 return 'الاربعاء'
//                 break;
//           case 'Thursday':
//                 return 'الخميس'
//                 break;
//           case 'Friday':
//                 return 'الجمعة'
//                 break;
//           case 'Saturday':
//                 return 'السبت'
//                 break;
//           case 'Sunday':
//                 return 'الأحد'
//                 break;
//           default:
//                 return 'الاثنين'
//         }
        
//       }

//     fetchWeather() {
        
//         axios.get(`${this.api_urlMeteo}${this.state.city}&units=metric&lang=ar&APPID=${this.api_key}`)
//             .then((response) => {


//                 this.setState({report: response.data, request: true, city: '',   data: [
//                     {label: this.filterdate(1), value: moment(new Date(this.state.d.getTime() + 24 * 60 * 60 * 1)).format("YYYY-MM-DD")},
//                     {label: this.filterdate(1000), value: moment(new Date(this.state.d.getTime() + 24 * 60 * 60 * 1000)).format("YYYY-MM-DD")},
//                     {label: this.filterdate(2000), value: moment(new Date(this.state.d.getTime() + 24 * 60 * 60 * 2000)).format("YYYY-MM-DD")},
//                     {label: this.filterdate(3000), value: moment(new Date(this.state.d.getTime() + 24 * 60 * 60 * 3000)).format("YYYY-MM-DD")},
//                     {label: this.filterdate(4000), value: moment(new Date(this.state.d.getTime() + 24 * 60 * 60 * 4000)).format("YYYY-MM-DD")},
//                     {label: this.filterdate(5000), value: moment(new Date(this.state.d.getTime() + 24 * 60 * 60 * 5000)).format("YYYY-MM-DD")},
//                     {label: this.filterdate(6000), value: moment(new Date(this.state.d.getTime() + 24 * 60 * 60 * 6000)).format("YYYY-MM-DD")},
//                   ], })

//             })
//     }


//     onPickerValueChange = (label, index) => {
    

//         let selectName = this.state.data.find(branch => branch.label === label);
//         this.state.selectedValueOption=selectName.value;
//         this.state.selectedLabel=label;
//         this.setState({selectedLabel: label,selectedValueOption:selectName.value })
//     }

//     render() {

//         if (this.state.request) {
            
//             return (
            
//                 <View style={styles.containView} >

//                         <View style = {styles.containerButton}>
//                         <Button 
//                             buttonStyle={{width:width*0.8,borderRadius:15,backgroundColor:'#90A4AE'}}
//                             icon={<Icon style={{ marginLeft: 20 }} name="calendar" size={20} color="white"/>}
//                             iconRight={true}
//                             title={this.state.selectedLabel}  
//                             onPress={() => this.myref.openPicker() }
//                         />
//                         </View>    
//                       <ScrollView showsVerticalScrollIndicator={false}>
//                         <FlatList
//                         style={{flex: 1}}
//                         scrollEnabled={false}
//                         data={this.state.report.list.filter(reportlist => reportlist.dt_txt.split(" ")[0] == this.state.selectedValueOption)}
//                         renderItem={({ item }) =>
//                              <MeteoCarte item={item}/>
//                         }
//                         keyExtractor={(item, index) => index.toString()}
//                         />
//                       </ScrollView>
//                        <PickerBox
//                         ref={ref => this.myref = ref}
//                         data={ this.state.data }
//                         onValueChange={(value, index) => this.onPickerValueChange(value, index)}
//                        // onValueChange={(value) =>this.SelectFilterFunction(value) }
//                         selectedValue={ this.state.selectedValueOption }
//                         />
 
//                 </View>
       
//             );
//         } else {
//             return (
//                 <View style={{ flex: 1, paddingTop: 100 ,}} >
//                 <ActivityIndicator size="large" color="#0000ff" />
//               </View>
//             );
//         }
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginTop: Constants.statusBarHeight,
//       },
//     containView: {
//         flex: 1,
//         backgroundColor: '#eee',
     
//     },
//     containerButton: {
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       marginTop:5
    
//    },
// });


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



            const dayData= [
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
