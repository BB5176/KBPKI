import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ListView,
    AsyncStorage,
  StyleSheet, WebView, Linking
} from 'react-native';
import {OpenUrl} from 'react-native-open-url';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 120,
    width:'100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
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

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.uri !== r2.uri});   

class SitesList extends Component {
constructor(props) {
    super(props);
   
    this.state={
        selectedUri: "",
        dataSource: ds.cloneWithRows(this.props.dt)
    }
}

componentWillReceiveProps(nextProps){
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.uri !== r2.uri});   
    this.state={
        selectedUri: "",
        dataSource: ds.cloneWithRows(nextProps.dt)
    }
}
rowPress(data){
    const uri = data.uri;
    this.setState({selectedUri: uri});
}
  renderRow(row){
      return (
            <TouchableOpacity style={styles.renderRow} onPress={() => this.rowPress(row)} uri={row.uri}  >
                <Text style={styles.renderText} > {row.Name} </Text>
            </TouchableOpacity> 
      );
  }  
  getIndex(value, arr, prop) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === value) {
            return i;
        }
    }
    return -1; //to handle the case where the value doesn't exist
}
  writeToMemory(url){
      AsyncStorage.getItem("kbpkiLinks").then((value) => {
        if (value === null){
          const stringifiedArray = JSON.stringify([url])
          AsyncStorage.setItem("kbpkiLinks", stringifiedArray);
        }
        else
        {
          const restoredArray = JSON.parse(value);
          if (this.getIndex(url, restoredArray) !== -1){
              restoredArray.push(url);
              if ( restoredArray.length> 4){
                restoredArray.splice(0, 1);
              }
              const stringifiedArray = JSON.stringify(restoredArray);
              AsyncStorage.setItem("kbpkiLinks", stringifiedArray);
          }
        }
          }).done();
           
     //AsyncStorage.setItem("kbpkiLinks", "bla bla bla");*/
  }
  render() {
     
      let control = null;
      if ((this.state.selectedUri === "")){
        control = <View >
                    <Text style={styles.title}> KBPKI Site list </Text>
                            <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow.bind(this)}
                    />
            </View>
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
                        this.writeToMemory(event.url);
                         console.log('compare url, -', event.url !== url, event.url, url);
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


export default SitesList;