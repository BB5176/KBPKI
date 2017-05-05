import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Alert,
  View,
  AsyncStorage
} from 'react-native';
import Environment from './environment';
import SiteList from './siteList';
import Channel from './channel'
import RecentlyUsed from './recentlyUsed';
import {Navigation} from 'react-native-navigation';

require('./data/sites');

class HomeScreen extends Component {
  static navigatorButtons = {
    rightButtons: [
      {
        title: 'Info', // for a textual button, provide the button title (label)
        id: 'device-info-btn', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
        disabled: false, // optional, used to disable the button (appears faded and doesn't interact)
        disableIconTint: true, // optional, by default the image colors are overridden and tinted to navBarButtonColor, set to true to keep the original image colors
        showAsAction: 'ifRoom', // optional, Android only. Control how the button is displayed in the Toolbar. Accepted valued: 'ifRoom' (default) - Show this item as a button in an Action Bar if the system decides there is room for it. 'always' - Always show this item as a button in an Action Bar. 'withText' - When this item is in the action bar, always show it with a text label even if it also has an icon specified. 'never' - Never show this item as a button in an Action Bar.
        buttonColor: 'blue', // Set color for the button (can also be used in setButtons function to set different button style programatically)
        buttonFontSize: 14, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
        buttonFontWeight: '600', // Set font weight for the button (can also be used in setButtons function to set different button style programatically)
      }
    ]
  };

  constructor(props) {
    super(props);
    this.state = {
      data: ""
    }
    this.getData = this.getData.bind(this);

    //this.logDeviceInfo();
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'device-info-btn') {
        Alert.alert('Current device information', 'Device info HERE!');
      }
    }
  }
  componentWillMount(){
    this.getData();
      this.getUrls();
  } 
  componentWillUpdate(){
  this.getUrls();
  }


componentDidMount() {
    AsyncStorage.getItem("ebus").then((value) => {
        this.setState({"ebus": value});
        console.log('2222', this.state)
    }).done();
    console.log('111', this.state)
}

  getUrls(){
      AsyncStorage.getItem("kbpkiLinks").then((value) => {
        if (value !== null){
          const RecentlyUsedLinksArray = [];
          const restoredArray = JSON.parse(value);
         for (i = restoredArray.length-1; i >= 0; i--){
              RecentlyUsedLinksArray.push(restoredArray[i]);
         }
         global.RecentlyUsedLinksArray = RecentlyUsedLinksArray;
         
        }
        
      }).done();

      }
   getData() {
    const env = global.filteredEnv;
    const country = global.filteredCountry;
    console.log('getdata', env, this.state.data);
    var linksArray = [];
    global.sites.forEach(function (element) {
      if (!country || country === element.country) {
        const e = element.url;
        if (e.test !== undefined && (env === 'test' || env === undefined)){
        
          if (e.test.direct !== undefined){
            linksArray.push({uri:e.test.direct, Name: element.name + ' (TEST' + '_direct)'})
          }
          if (e.test.popup !== undefined){
            linksArray.push({uri:e.test.popup, Name: element.name + ' (TEST' + '_popup)'})
          }
        } else if (e.syst !== undefined && (env === 'syst' || env === undefined)){
          
          if (e.syst.direct !== undefined){
            linksArray.push({uri:e.syst.direct, Name: element.name + ' (SYST' + '_direct)'})
          }
          if (e.syst.popup !== undefined){
            linksArray.push({uri:e.syst.popup, Name: element.name + ' (SYST' + '_popup)'})
          }
        } else if (e.prod !== undefined && (env === 'prod' || env === undefined)){
          
          if (e.prod.direct !== undefined){
            linksArray.push({uri:e.prod.direct, Name: element.name + ' (PROD' + '_direct)'})
          }
          if (e.prod.popup !== undefined){
            linksArray.push({uri:e.prod.popup, Name: element.name + ' (PROD' + '_popup)'})

          }
        }
      } // End of country if
    }, this);
    this.setState({ data: linksArray });
  }


  render() {

    console.log('data filted ß', this.state.data);
    return (
      <View style={styles.container}>
        <Channel filterData={this.getData} style={styles.channnel}/>
        <Environment filterData={this.getData} style={styles.env}/>
        <SiteList dt={this.state.data} hack={this.getData} style={styles.siteList}/>
        <RecentlyUsed style={styles.recently}/>
      </View>
    );
  }

  // logDeviceInfo() {
  //   var DeviceInfo = require('react-native-device-info');

  //   console.log("Device Unique ID", DeviceInfo.getUniqueID());  // e.g. FCDBD8EF-62FC-4ECB-B2F5-92C9E79AC7F9 
  //   // * note this is IDFV on iOS so it will change if all apps from the current apps vendor have been previously uninstalled 

  //   console.log("Device Manufacturer", DeviceInfo.getManufacturer());  // e.g. Apple 

  //   console.log("Device Brand", DeviceInfo.getBrand());  // e.g. Apple / htc / Xiaomi 

  //   console.log("Device Model", DeviceInfo.getModel());  // e.g. iPhone 6 

  //   console.log("Device ID", DeviceInfo.getDeviceId());  // e.g. iPhone7,2 / or the board on Android e.g. goldfish 

  //   console.log("Device Name", DeviceInfo.getSystemName());  // e.g. iPhone OS 

  //   console.log("Device Version", DeviceInfo.getSystemVersion());  // e.g. 9.0 

  //   console.log("Bundle Id", DeviceInfo.getBundleId());  // e.g. com.learnium.mobile 

  //   console.log("Build Number", DeviceInfo.getBuildNumber());  // e.g. 89 

  //   console.log("App Version", DeviceInfo.getVersion());  // e.g. 1.1.0 

  //   console.log("App Version (Readable)", DeviceInfo.getReadableVersion());  // e.g. 1.1.0.89 

  //   console.log("Device Name", DeviceInfo.getDeviceName());  // e.g. Becca's iPhone 6 

  //   console.log("User Agent", DeviceInfo.getUserAgent()); // e.g. Dalvik/2.1.0 (Linux; U; Android 5.1; Google Nexus 4 - 5.1.0 - API 22 - 768x1280 Build/LMY47D) 

  //   console.log("Device Locale", DeviceInfo.getDeviceLocale()); // e.g en-US 

  //   console.log("Device Country", DeviceInfo.getDeviceCountry()); // e.g US 

  //   console.log("App Instance ID", DeviceInfo.getInstanceID()); // ANDROID ONLY - see https://developers.google.com/instance-id/ 
  // }
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
  siteList:{

  },
  env:{

  },
  channnel:{

  },
  recently:{
    
  }
});

export default HomeScreen;
