
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

const styles = {
    ViewStyle: {
        flexWrap: 'wrap', 
        alignItems: 'flex-start',
        flexDirection:'row',
        width: '100%',
        justifyContent:'space-around',
    },
    ButtonStyle: {
        flexDirection:'column',
        width: '30%',
        height: 46,
        borderRadius: 40,
        borderColor: '#345b70',
        backgroundColor: '#004063',
        borderWidth: 1,
        justifyContent:'space-around', 
        flexWrap: 'wrap', 
        alignItems: 'flex-start',

    },
    TextStyle: {
        color: 'white',
        width: '65%',
        
        flexDirection:'row',
        textAlign:'right',
        justifyContent:'space-around'
    }
}
class Environment extends Component {

    pushTestButton(){
        console.log('Test pushed');
    }
    pushSystButton(){
        console.log('Syst pushed');
    }
    pushProdButton(){
        console.log('PROD pushed');
    }

  render() {
    return (
        <View style={styles.ViewStyle} >
            <TouchableOpacity style={styles.ButtonStyle} onPress={this.pushTestButton.bind(this)}> 
                <Text style={styles.TextStyle}> TESTs </Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.ButtonStyle} onPress={this.pushSystButton.bind(this)}> 
                <Text  style={styles.TextStyle}> SYST </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ButtonStyle} onPress={this.pushProdButton.bind(this)}> 
                <Text  style={styles.TextStyle}> PROD </Text>
            </TouchableOpacity>
        </View>
    );
  }
}

export default Environment;
