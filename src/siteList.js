import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ListView,
  StyleSheet
} from 'react-native';

class SitesList extends Component {
constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.uri !== r2.uri});
    this.state={
        dataSource: ds.cloneWithRows([
            {uri: "www.google.lt", Name: "Google"},
            {uri: "www.delfi.lt", Name: "delfi"},
            {uri: "www.alfa.lt", Name: "Alfa"},
            {uri: "www.ebus.lt", Name: "Ebus"},
            {uri: "www.google.lt", Name: "Google"},
            {uri: "www.delfi.lt", Name: "delfi"},
            {uri: "www.alfa.lt", Name: "Alfa"},
            {uri: "www.ebus.lt", Name: "Ebus"},
            {uri: "www.google.lt", Name: "Google"},
            {uri: "www.delfi.lt", Name: "delfi"},
            {uri: "www.alfa.lt", Name: "Alfa"},
            {uri: "www.ebus.lt", Name: "Ebus"},
            {uri: "www.google.lt", Name: "Google"},
            {uri: "www.delfi.lt", Name: "delfi"},
            {uri: "www.alfa.lt", Name: "Alfa"},
            {uri: "www.ebus.lt", Name: "Ebus"},
            {uri: "www.google.lt", Name: "Google"},
            {uri: "www.delfi.lt", Name: "delfi"},
            {uri: "www.alfa.lt", Name: "Alfa"},
            {uri: "www.ebus.lt", Name: "Ebus"},
            {uri: "www.google.lt", Name: "Google"},
            {uri: "www.delfi.lt", Name: "delfi"},
            {uri: "www.alfa.lt", Name: "Alfa"},
            {uri: "www.ebus.lt", Name: "Ebus"},
            {uri: "www.google.lt", Name: "Google"},
            {uri: "www.delfi.lt", Name: "delfi"},
            {uri: "www.alfa.lt", Name: "Alfa"},
            {uri: "www.ebus.lt", Name: "Ebus"},
             {uri: "www.google.lt", Name: "Google"},
            {uri: "www.delfi.lt", Name: "delfi"},
            {uri: "www.alfa.lt", Name: "Alfa"},
            {uri: "www.ebus.lt", Name: "Ebus"},
            {uri: "www.google.lt", Name: "Google"},
            {uri: "www.delfi.lt", Name: "delfi"},
            {uri: "www.alfa.lt", Name: "Alfa"},
            {uri: "www.ebus.lt", Name: "Ebus"},
            {uri: "www.google.lt", Name: "Google"},
            {uri: "www.delfi.lt", Name: "delfi"},
            {uri: "www.alfa.lt", Name: "Alfa"},
            {uri: "www.ebus.lt", Name: "Ebus"},
            {uri: "www.google.lt", Name: "Google"},
            {uri: "www.delfi.lt", Name: "delfi"},
            {uri: "www.alfa.lt", Name: "Alfa"},
            {uri: "www.ebus.lt", Name: "Ebus"},
            {uri: "www.google.lt", Name: "Google"},
            {uri: "www.delfi.lt", Name: "delfi"},
            {uri: "www.alfa.lt", Name: "Alfa"},
            {uri: "www.ebus.lt", Name: "Ebus"},
            {uri: "www.google.lt", Name: "Google"},
            {uri: "www.delfi.lt", Name: "delfi"},
            {uri: "www.alfa.lt", Name: "Alfa"},
            {uri: "www.ebus.lt", Name: "Ebus"},
            {uri: "www.google.lt", Name: "Google"},
            {uri: "www.delfi.lt", Name: "delfi"},
            {uri: "www.alfa.lt", Name: "Alfa"},
            {uri: "www.ebus.lt", Name: "Ebus"},
              {uri: "www.google.lt", Name: "Google"},
            {uri: "www.delfi.lt", Name: "delfi"},
            {uri: "www.alfa.lt", Name: "Alfa"},
            {uri: "www.ebus.lt", Name: "Ebus"},
            {uri: "www.google.lt", Name: "Google"},
            {uri: "www.delfi.lt", Name: "delfi"},
            {uri: "www.alfa.lt", Name: "Alfa"},
            {uri: "www.ebus.lt", Name: "Ebus"},
            {uri: "www.google.lt", Name: "Google"},
            {uri: "www.delfi.lt", Name: "delfi"},
            {uri: "www.alfa.lt", Name: "Alfa"},
            {uri: "www.ebus.lt", Name: "Ebus"},
            {uri: "www.google.lt", Name: "Google"},
            {uri: "www.delfi.lt", Name: "delfi"},
            {uri: "www.alfa.lt", Name: "Alfa"},
            {uri: "www.ebus.lt", Name: "Ebus"},
            {uri: "www.google.lt", Name: "Google"},
            {uri: "www.delfi.lt", Name: "delfi"},
            {uri: "www.alfa.lt", Name: "Alfa"},
            {uri: "www.ebus.lt", Name: "Ebus"},
            {uri: "www.google.lt", Name: "Google"},
            {uri: "www.delfi.lt", Name: "delfi"},
            {uri: "www.alfa.lt", Name: "Alfa"},
            {uri: "www.ebus.lt", Name: "Ebus"},
            {uri: "www.google.lt", Name: "Google"},
            {uri: "www.delfi.lt", Name: "delfi"},
            {uri: "www.alfa.lt", Name: "Alfa"},
            {uri: "www.ebus.lt", Name: "Ebus"},
              {uri: "www.google.lt", Name: "Google"},
            {uri: "www.delfi.lt", Name: "delfi"},
            {uri: "www.alfa.lt", Name: "Alfa"},
            {uri: "www.ebus.lt", Name: "Ebus"},
            {uri: "www.google.lt", Name: "Google"},
            {uri: "www.delfi.lt", Name: "delfi"},
            {uri: "www.alfa.lt", Name: "Alfa"},
            {uri: "www.ebus.lt", Name: "Ebus"},
            {uri: "www.google.lt", Name: "Google"},
            {uri: "www.delfi.lt", Name: "delfi"},
            {uri: "www.alfa.lt", Name: "Alfa"},
            {uri: "www.ebus.lt", Name: "Ebus"},
            {uri: "www.google.lt", Name: "Google"},
            {uri: "www.delfi.lt", Name: "delfi"},
            {uri: "www.alfa.lt", Name: "Alfa"},
            {uri: "www.ebus.lt", Name: "Ebus"},
            {uri: "www.google.lt", Name: "Google"},
            {uri: "www.delfi.lt", Name: "delfi"},
            {uri: "www.alfa.lt", Name: "Alfa"},
            {uri: "www.ebus.lt", Name: "Ebus"},
            {uri: "www.google.lt", Name: "Google"},
            {uri: "www.delfi.lt", Name: "delfi"},
            {uri: "www.alfa.lt", Name: "Alfa"},
            {uri: "www.ebus.lt", Name: "Ebus"},
            {uri: "www.google.lt", Name: "Google"},
            {uri: "www.delfi.lt", Name: "delfi"},
            {uri: "www.alfa.lt", Name: "Alfa"},
            {uri: "www.ebus.lt", Name: "Ebus"}
        ])
    }
}
rowPress(data){
    console.log("Row pressed ", data.uri, data);
}
  renderRow(row){
      return (
            <TouchableOpacity onPress={() => this.rowPress(row)} uri={row.uri} >
                <Text> {row.Name} </Text>
            </TouchableOpacity>
      );
  }  
  render() {
    return (
      <View style={styles.container}>
        <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this)}
        />
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

export default SitesList;