import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ListView,
 //   AsyncStorage,
  StyleSheet, WebView, Linking
} from 'react-native';
import {OpenUrl} from 'react-native-open-url';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width:'100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 180,
    padding: 5
  },
  title:{
    color: '#7F9BAA'
  },
  renderRow: {
    borderWidth: 1,
    borderRadius: 10,
    width: '98%',
    padding: 5,
    margin: 3,
    backgroundColor: '#F5FCFF',
    borderColor: 'silver'
  },
  renderText: {
    fontSize: 14,
    color: '#003755'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
 
class RecentlyUsed extends Component {
constructor(props) {
    super(props);
   
    this.state={
        selectedUri: ""
    }
}

rowPress(data){
    const uri = data.uri;
    this.setState({selectedUri: uri});
}/*
 componentWillMount() {
      this.getUrls();
  } 
  componentWillUpdate(){
       this.getUrls();
  }*/
renderRow = (row) => {
    let name = '';
     global.sites.forEach(function(element) {
        const e = element.url;
        if (e.test !== undefined){
          if (e.test.direct !== undefined && e.test.direct === row){
            name = element.name + ' (TEST' + '_direct)';
          }
          if (e.test.popup !== undefined && e.test.popup === row){
            name = element.name + ' (TEST' + '_popup)';
          }
        } 
        if (e.syst !== undefined ){
          if (e.syst.direct !== undefined && e.syst.direct === row ){
            name = element.name + ' (SYST' + '_direct)';
          }
          if (e.syst.popup !== undefined && e.syst.popup === row){
            name = element.name + ' (SYST' + '_popup)';
          }
        } 
         if (e.prod !== undefined ){
          if (e.prod.direct !== undefined && e.prod.direct === row){
            name = element.name + ' (PROD' + '_direct)';
          }
          if (e.prod.popup !== undefined && e.prod.popup === row ){
            name = element.name + ' (PROD' + '_popup)';
          }
        }
    }, this);
    const elem = {uri: row, title: name};
      return (
            <TouchableOpacity style={styles.renderRow} onPress={() => this.rowPress(elem)} uri={elem.uri}  >
                <Text style={styles.renderText} > {elem.title} </Text>
            </TouchableOpacity> 
      );
  }  


     //AsyncStorage.setItem("kbpkiLinks", "bla bla bla");*/
  render() {
     
      let control = null;
      if ((this.state.selectedUri === "")){
        if (global.RecentlyUsedLinksArray !== undefined){
            console.log('global.RecentlyUsedLinksArray ', global.RecentlyUsedLinksArray );
                control =   <View >
                                <Text style={styles.title}> Recently used link </Text>
                                {global.RecentlyUsedLinksArray.map(this.renderRow)}
                            </View>
        }
    }
      else {
          const url= this.state.selectedUri;
          control = <WebView
                        ref={(ref) => { this.webview = ref; }}
                        source={{ uri: url }}
                        javaScriptEnabled={true}
                         domStorageEnabled={true}
                        startInLoadingState={true}
                        onNavigationStateChange={(event) => {
                        //this.writeToMemory(event.url);
                        // console.log('compare url, -', event.url !== url, event.url, url);
                        //if (event.url !== url) {
                           this.webview.stopLoading();
                           Linking.openURL(event.url);
                           this.setState({selectedUri: ""});
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


export default RecentlyUsed;