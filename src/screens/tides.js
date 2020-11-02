import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import FilterVille from '../components/FilterVille';

export default class Tides extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex:1}}>
          <FilterVille titleNavigation="Tidesville" navigation={this.props.navigation} />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({});



