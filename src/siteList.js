import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ListView,
  StyleSheet, WebView, Linking
} from 'react-native';
import {OpenUrl} from 'react-native-open-url';
require('./data/sites');

class SitesList extends Component {
constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.uri !== r2.uri});
    var linksArray = [];
    global.sites.forEach(function(element) {
        if (element.url.syst !== undefined){
            console.log(element.url.syst.direct)
            linksArray.push({uri:element.url.syst.direct, Name: element.name})
        }

    }, this);

    this.state={
        selectedUri: "",
        dataSource: ds.cloneWithRows(linksArray /*[
            {uri: "http://google.lt", Name: "Google"},
            {uri: "http://delfi.lt", Name: "delfi"},
            {uri: "http://alfa.lt", Name: "Alfa"},
            {uri: "http://ebus.lt", Name: "Ebus"},
            {uri: "http://google.lt", Name: "Google"},
            {uri: "http://delfi.lt", Name: "delfi"},
            {uri: "http://alfa.lt", Name: "Alfa"},
            {uri: "http://ebus.lt", Name: "Ebus"},
            {uri: "http://google.lt", Name: "Google"},
            {uri: "http://delfi.lt", Name: "delfi"},
            {uri: "http://alfa.lt", Name: "Alfa"},
            {uri: "http://ebus.lt", Name: "Ebus"},
            {uri: "http://google.lt", Name: "Google"},
            {uri: "http://delfi.lt", Name: "delfi"},
            {uri: "http://alfa.lt", Name: "Alfa"},
            {uri: "http://ebus.lt", Name: "Ebus"},
            {uri: "http://google.lt", Name: "Google"},
            {uri: "http://delfi.lt", Name: "delfi"},
            {uri: "http://alfa.lt", Name: "Alfa"},
            {uri: "http://ebus.lt", Name: "Ebus"},
            {uri: "http://google.lt", Name: "Google"},
            {uri: "http://delfi.lt", Name: "delfi"},
            {uri: "http://alfa.lt", Name: "Alfa"},
            {uri: "http://ebus.lt", Name: "Ebus"},
            {uri: "http://google.lt", Name: "Google"},
            {uri: "http://delfi.lt", Name: "delfi"},
            {uri: "http://alfa.lt", Name: "Alfa"},
            {uri: "http://ebus.lt", Name: "Ebus"},
             {uri: "http://google.lt", Name: "Google"},
            {uri: "http://delfi.lt", Name: "delfi"},
            {uri: "http://alfa.lt", Name: "Alfa"},
            {uri: "http://ebus.lt", Name: "Ebus"},
            {uri: "http://google.lt", Name: "Google"},
            {uri: "http://delfi.lt", Name: "delfi"},
            {uri: "http://alfa.lt", Name: "Alfa"},
            {uri: "http://ebus.lt", Name: "Ebus"},
            {uri: "http://google.lt", Name: "Google"},
            {uri: "http://delfi.lt", Name: "delfi"},
            {uri: "http://alfa.lt", Name: "Alfa"},
            {uri: "http://ebus.lt", Name: "Ebus"},
            {uri: "http://google.lt", Name: "Google"},
            {uri: "http://delfi.lt", Name: "delfi"},
            {uri: "http://alfa.lt", Name: "Alfa"},
            {uri: "http://ebus.lt", Name: "Ebus"},
            {uri: "http://google.lt", Name: "Google"},
            {uri: "http://delfi.lt", Name: "delfi"},
            {uri: "http://alfa.lt", Name: "Alfa"},
            {uri: "http://ebus.lt", Name: "Ebus"},
            {uri: "http://google.lt", Name: "Google"},
            {uri: "http://delfi.lt", Name: "delfi"},
            {uri: "http://alfa.lt", Name: "Alfa"},
            {uri: "http://ebus.lt", Name: "Ebus"},
            {uri: "http://google.lt", Name: "Google"},
            {uri: "http://delfi.lt", Name: "delfi"},
            {uri: "http://alfa.lt", Name: "Alfa"},
            {uri: "http://ebus.lt", Name: "Ebus"},
            {uri: "http://google.lt", Name: "Google"},
            {uri: "http://delfi.lt", Name: "delfi"},
            {uri: "http://alfa.lt", Name: "Alfa"},
            {uri: "http://ebus.lt", Name: "Ebus"},
            {uri: "http://google.lt", Name: "Google"},
            {uri: "http://delfi.lt", Name: "delfi"},
            {uri: "http://alfa.lt", Name: "Alfa"},
            {uri: "http://ebus.lt", Name: "Ebus"},
            {uri: "http://google.lt", Name: "Google"},
            {uri: "http://delfi.lt", Name: "delfi"},
            {uri: "http://alfa.lt", Name: "Alfa"},
            {uri: "http://ebus.lt", Name: "Ebus"},
            {uri: "http://google.lt", Name: "Google"},
            {uri: "http://delfi.lt", Name: "delfi"},
            {uri: "http://alfa.lt", Name: "Alfa"},
            {uri: "http://ebus.lt", Name: "Ebus"},
            {uri: "http://google.lt", Name: "Google"},
            {uri: "http://delfi.lt", Name: "delfi"},
            {uri: "http://alfa.lt", Name: "Alfa"},
            {uri: "http://ebus.lt", Name: "Ebus"},
            {uri: "http://google.lt", Name: "Google"},
            {uri: "http://delfi.lt", Name: "delfi"},
            {uri: "http://alfa.lt", Name: "Alfa"},
            {uri: "http://ebus.lt", Name: "Ebus"},
            {uri: "http://google.lt", Name: "Google"},
            {uri: "http://delfi.lt", Name: "delfi"},
            {uri: "http://alfa.lt", Name: "Alfa"},
            {uri: "http://ebus.lt", Name: "Ebus"},
            {uri: "http://google.lt", Name: "Google"},
            {uri: "http://delfi.lt", Name: "delfi"},
            {uri: "http://alfa.lt", Name: "Alfa"},
            {uri: "http://ebus.lt", Name: "Ebus"},
            {uri: "http://google.lt", Name: "Google"},
            {uri: "http://delfi.lt", Name: "delfi"},
            {uri: "http://alfa.lt", Name: "Alfa"},
            {uri: "http://ebus.lt", Name: "Ebus"},
            {uri: "http://google.lt", Name: "Google"},
            {uri: "http://delfi.lt", Name: "delfi"},
            {uri: "http://alfa.lt", Name: "Alfa"},
            {uri: "http://ebus.lt", Name: "Ebus"},
            {uri: "http://google.lt", Name: "Google"},
            {uri: "http://delfi.lt", Name: "delfi"},
            {uri: "http://alfa.lt", Name: "Alfa"},
            {uri: "http://ebus.lt", Name: "Ebus"},
            {uri: "http://google.lt", Name: "Google"},
            {uri: "http://delfi.lt", Name: "delfi"},
            {uri: "http://alfa.lt", Name: "Alfa"},
            {uri: "http://ebus.lt", Name: "Ebus"},
            {uri: "http://google.lt", Name: "Google"},
            {uri: "http://delfi.lt", Name: "delfi"},
            {uri: "http://alfa.lt", Name: "Alfa"},
            {uri: "http://ebus.lt", Name: "Ebus"},
            {uri: "http://google.lt", Name: "Google"},
            {uri: "http://delfi.lt", Name: "delfi"},
            {uri: "http://alfa.lt", Name: "Alfa"},
            {uri: "http://ebus.lt", Name: "Ebus"}
        ]*/)
    }
}
rowPress(data){
    const uri = data.uri;
    console.log("Row pressed ", uri);
    this.setState({selectedUri: uri});
}
  renderRow(row){
      return (
            <TouchableOpacity onPress={() => this.rowPress(row)} uri={row.uri} >
                <Text> {row.Name} </Text>
            </TouchableOpacity> 
      );
  }  
  render() {
      console.log('----',this.state );
     
      let control = null;
      if ((this.state.selectedUri === "")){
        control = <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}
            />
      }
      else {
          const url= this.state.selectedUri;
          console.log('asdasdasdassd', url);
          
          control = <WebView
                        ref={(ref) => { this.webview = ref; }}
                        source={{ uri: url }}
                        javaScriptEnabled={true}
                         domStorageEnabled={true}
                        startInLoadingState={true}
                        onNavigationStateChange={(event) => {
                            console.log('ggggggg', url, event.url);
                        //if (event.url !== url) {
                            this.webview.stopLoading();
                            Linking.openURL(event.url);
                        //}
                        }}
                    />
      }
    return (
      <View style={styles.container}>
        { control}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 120,
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

export default SitesList;