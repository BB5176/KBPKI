import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

const styles = {
    ViewStyle: {
        position: 'absolute',
        top: 60,
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
    ButtonPressedStyle: {
        flexDirection:'column',
        width: '30%',
        height: 46,
        borderRadius: 40,
        borderColor: '#345b70',
        backgroundColor: 'green',
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
    constructor() {
        super();

        this.state = {
            selectedEnv: false,
        };
    }

    pushTestButton() {
        this.setState({selectedEnv: 'TEST'});
    }
    pushSystButton() {
        this.setState({selectedEnv: 'SYST'});
    }
    pushProdButton() {
        this.setState({selectedEnv: 'PROD'});
    }

  render() {
    let isTestSelected = false;
    let isSystSelected = false;
    let isProdSelected = false;

    switch (this.state.selectedEnv) {
        case 'TEST':
            isTestSelected = true;
            break;
        case 'SYST':
            isSystSelected = true;
            break;
        case 'PROD':
            isProdSelected = true;
            break;
    }

    return (
        <View style={styles.ViewStyle} >
            <TouchableOpacity 
                style={isTestSelected ? styles.ButtonPressedStyle : styles.ButtonStyle} 
                disabled={isTestSelected}
                onPress={this.pushTestButton.bind(this)}
            > 
                <Text style={styles.TextStyle}> TEST </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={isSystSelected ? styles.ButtonPressedStyle : styles.ButtonStyle}
                disabled={isSystSelected}
                onPress={this.pushSystButton.bind(this)}
            > 
                <Text style={styles.TextStyle}> SYST </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={isProdSelected ? styles.ButtonPressedStyle : styles.ButtonStyle} 
                disabled={isProdSelected}
                onPress={this.pushProdButton.bind(this)}
            > 
                <Text style={styles.TextStyle}> PROD </Text>
            </TouchableOpacity>
        </View>
    );
  }
}

export default Environment;
