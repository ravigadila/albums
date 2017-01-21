import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Header extends Component {
  render(){
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}> Albums </Text>
      </View>
    );
  }
}

const styles = {
  textStyle:{
    fontSize: 20,
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    height: 45,
    paddingTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width:0,
      height: 2
    },
    elevation: 2,
    position: 'relative',
  }
}
export default Header;
