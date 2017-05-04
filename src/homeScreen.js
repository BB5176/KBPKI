import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Environment from './environment';
import SiteList from './siteList';
import Channel from './channel'
import {Navigation} from 'react-native-navigation';

require('./data/sites');

class HomeScreen extends Component {
  constructor(){
    super();
    this.state={
        data: ""
    }
    this.getData = this.getData.bind(this);
    
  }
  componentWillMount(){
    this.getData();
  }
  getData(){
    
    console.log('getdata', this.state.data);
    var linksArray = [];
    global.sites.forEach(function(element) {
      const e = element.url;
        if (e.test !== undefined){
          if (e.test.direct !== undefined){
            linksArray.push({uri:e.test.direct, Name: 'TEST -' + element.name + ' (direct)'})
          }
          if (e.test.popUp !== undefined){
            linksArray.push({uri:e.test.popUp, Name: 'TEST -' + element.name + ' (popup)'})
          }
        }
         if (e.syst !== undefined){
          if (e.syst.direct !== undefined){
            linksArray.push({uri:e.syst.direct, Name: 'SYST -' + element.name + ' (direct)'})
          }
          if (e.syst.popUp !== undefined){
            linksArray.push({uri:e.syst.popUp, Name: 'SYST -' + element.name + ' (popup)'})
          }
        }
        if (e.prod !== undefined){
          if (e.prod.direct !== undefined){
            linksArray.push({uri:e.prod.direct, Name: 'PROD -' + element.name + ' (direct)'})
          }
          if (e.prod.popUp !== undefined){
            linksArray.push({uri:e.prod.popUp, Name: 'PROD -' + element.name + ' (popup)'})
          }
        }

    }, this);
    this.setState({data: linksArray});
  }
  render() {
  
    console.log('data', this.state.data);
    return (
      <View style={styles.container}>
        <Channel/>
        <Environment/>
        <SiteList  dt={this.state.data}/>
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
});

export default HomeScreen;

