import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
require('./data/sites');


const styles = {
  ViewStyle: {
    position: 'absolute',
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
    top: 0,
    left: 0,
    right: 0,
  },
  ButtonStyle: {
    margin: 10,
    padding: 5,
    height: 30,
    width: 48,
    borderColor: '#345b70',
    backgroundColor: '#004063',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  TextStyle: {
      color: 'white',
  }
};

class Channel extends Component {
    constructor() {
        super();
        
        this.state = {
            listItems: []
        };

        global.sites.forEach(function(el) {
        if (!this.state.listItems.includes(el.country)) {
            this.state.listItems.push(el.country);
        }
        }, this);
    }

    createItem = (item) => (
        <TouchableOpacity key={item} style={styles.ButtonStyle}>
            <Text
            style={styles.TextStyle}>
            {item}
            </Text>
        </TouchableOpacity>
    )

    render() {
        return (
        <View style={styles.ViewStyle}>
            <ScrollView horizontal={true}>
            {this.state.listItems.map(this.createItem)}
            </ScrollView>
        </View>
        );
    }
}

export default Channel;