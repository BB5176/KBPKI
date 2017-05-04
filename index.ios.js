/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import {Navigation} from 'react-native-navigation';

require('./src/data/sites');

class KBPKI extends Component {
  constructor() {
    super();
    
    this.state = {
         listItems: []
      };

    global.sites.forEach(function(el) {
      if (!this.state.listItems.includes(el.country)) {
        this.state.listItems.push(el.country);
      }
    }, this);
  }
  
  createItem = (item) => (

      <TouchableOpacity key={item}>
        <Text
          style={styles.item}>
          {item}
        </Text>
      </TouchableOpacity>
  )

  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          {this.state.listItems.map(this.createItem)}
        </ScrollView>

        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  item: {
      margin: 15,
      padding: 15,
      height: 40,
      borderColor: 'red',
      borderWidth: 1
   },
});

Navigation.registerComponent('react-native-navigation-bootstrap', () => KBPKI);
Navigation.startSingleScreenApp({
  screen: {
    screen: 'react-native-navigation-bootstrap',
    title: 'Navigation Bootstrap'
  }
});
