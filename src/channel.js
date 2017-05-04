import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';
import ReactNativeComponentTree from 'ReactNativeComponentTree';
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
  ButtonPressedStyle: {
    margin: 10,
    padding: 5,
    height: 30,
    width: 48,
    borderColor: '#00aae8',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    backgroundColor: '#00aae8'
  },
  TextStyle: {
      color: 'white',
  }
};

class Channel extends Component {
    constructor() {
        super();
        
        this.state = {
            listItems: [],
            selectedChannel: false
        };

        global.sites.forEach(function(el) {
        if (!this.state.listItems.includes(el.country)) {
            this.state.listItems.push(el.country);
        }
        }, this);
    }

    onPressHandler(e) {
        const elem = ReactNativeComponentTree.getInstanceFromNode(e.currentTarget)._currentElement;
        this.setState({selectedChannel: elem.props.children[0].props.children});
    }

    createItem = (item) => {
        const isSelectedItem = (this.state.selectedChannel === item);
        const touchableStyle = isSelectedItem ? styles.ButtonPressedStyle : styles.ButtonStyle;
        
        return <TouchableOpacity
            style={touchableStyle}
            key={item}
            disabled={isSelectedItem}
            onPress={this.onPressHandler.bind(this)}
        >
            <Text style={styles.TextStyle}>
                {item}
            </Text>
        </TouchableOpacity>
    }

    render() {
        return (
        <View style={styles.ViewStyle}>
            <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >   
                {this.state.listItems.map(this.createItem)}
            </ScrollView>
        </View>
        );
    }
}

export default Channel;