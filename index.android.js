// Index.android.js add your code here


// Import libraries
import React, { Component }from 'react';
import { View, Text, AppRegistry } from 'react-native';
import Header from './src/components/header'
import AlbumList from './src/components/AlbumList'
// create component
export default class albums extends Component {
  render(){
    return(
      <View>
        <Header />
        <AlbumList />
      </View>
    );
  }
}

AppRegistry.registerComponent('albums', () => albums)



