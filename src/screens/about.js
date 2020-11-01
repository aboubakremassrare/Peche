/*This is an Example of SearchBar in React Native*/
import * as React from 'react';
import {  View, StyleSheet } from 'react-native';
import FilterVille from '../components/FilterVille';
 
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <View style={{flex:1}}>

        <FilterVille titleNavigation="Meteoville" navigation={this.props.navigation} />
       
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
 
});