import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ListView,
  StyleSheet, WebView, Linking
} from 'react-native';
import {OpenUrl} from 'react-native-open-url';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 120,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    height: 300,
    padding: 5
    //backgroundColor: 'red'
  },
  renderRow: {
    borderWidth: 1,
    borderRadius: 10,
    width: '90%',
    padding: 5,
    margin: 5,
    borderColor: 'silver'
  },
  renderText: {
    fontSize: 20,
    color: '#003755'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class SitesList extends Component {
constructor(props) {
    super(props);
   
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.uri !== r2.uri});   
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
  render() {

console.log('this2', this.props);
      console.log('----',this.state );
     
      let control = null;
      if ((this.state.selectedUri === "")){

          console.log('list view', this );
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


export default SitesList;