import * as React from 'react';
import {  View, StyleSheet, FlatList, ActivityIndicator,TouchableOpacity } from 'react-native';
import { SearchBar,ListItem } from 'react-native-elements';
 
export default class FilterVille extends React.Component {
      constructor(props) {
        super(props);
        this.state = { isLoading: true, search: '' };
        this.arrayholder = [];
        this.navigation=this.props.navigation,
        this.titleNavigation=this.props.titleNavigation
      }

      componentDidMount() {
        const json =  require('../shared/db.json');
        this.setState(
          {
            isLoading: false,
            dataSource: json,
          
          },
          function() {
            this.arrayholder = json;
          }
        )
      }

      search = text => {
        console.log(text);
      };
      clear = () => {
        this.search.clear();
      };

      SearchFilterFunction(text) {
          const newData = this.arrayholder.filter(function(item) 
          {
              const itemData = item.namearab ? item.namearab.toUpperCase() : ''.toUpperCase();
              const textData = text.toUpperCase();
              return itemData.indexOf(textData) > -1;
          });
          this.setState({
            dataSource: newData,
            search:text,
          });
      }
  
      ListViewItemSeparator = () => {
        return (
          <View
            style={{
              height: 0.3,
              width: '90%',
              backgroundColor: '#080808',
            }}
          />
        );
      };

      render() {
        if (this.state.isLoading) {
          return (
            <View style={{ flex: 1, paddingTop: 20 }}>
              <ActivityIndicator />
            </View>
          );
        }
        return (
          <View >
            <SearchBar
            rightIconContainerStyle
              lightTheme round editable={true}
              searchIcon={{ size: 24 }}
              onChangeText={text => this.SearchFilterFunction(text)}
              onClear={text => this.SearchFilterFunction('')}
              placeholder="اكتب هنا للبحث..."
              value={this.state.search}
              />
              <FlatList
              data={this.state.dataSource}
              ItemSeparatorComponent={this.ListViewItemSeparator}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => this.navigation.navigate(this.titleNavigation, item)}>
                  <ListItem
                    roundAvatar
                    title={`${item.namearab}`}
                />
                </TouchableOpacity>
              )}
              enableEmptySections={true}
              style={{ marginTop: 10 }}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        );
      }
}
 
const styles = StyleSheet.create({});