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
  getData() {
    const env = global.filteredEnv;
    const country = global.filteredCountry;
    console.log('getdata', env, this.state.data);
    var linksArray = [];
    global.sites.forEach(function(element) {
      if (!country || country === element.country) {
        const e = element.url;
        if (e.test !== undefined && (env === 'test' || env === undefined)){
          console.log('TEST')
          if (e.test.direct !== undefined){
            linksArray.push({uri:e.test.direct, Name: element.name + ' (TEST' + '_direct)'})
          }
          if (e.test.popup !== undefined){
            linksArray.push({uri:e.test.popUp, Name: element.name + ' (TEST' + '_popup)'})
          }
        } else if (e.syst !== undefined && (env === 'syst' || env === undefined)){
          console.log('SSYT')
          if (e.syst.direct !== undefined){
            linksArray.push({uri:e.syst.direct, Name: element.name + ' (SYST' + '_direct)'})
          }
          if (e.syst.popup !== undefined){
            linksArray.push({uri:e.syst.popUp, Name: element.name + ' (SYST' + '_popup)'})
          }
        } else if (e.prod !== undefined && (env === 'prod' || env === undefined)){
          console.log('PROD')
          if (e.prod.direct !== undefined){
            linksArray.push({uri:e.prod.direct, Name: element.name + ' (PROD' + '_direct)'})
          }
          if (e.prod.popup !== undefined){
            linksArray.push({uri:e.prod.popUp, Name: element.name + ' (PROD' + '_popup)'})
          }
        }
      } // End of country if
    }, this);
    this.setState({data: linksArray});
  }


  render() {
  
    console.log('data filted ß', this.state.data);
    return (
      <View style={styles.container}>
        <Channel filterData={this.getData} />
        <Environment filterData={this.getData}/>
        <SiteList dt={this.state.data}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D7E9F1',
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

