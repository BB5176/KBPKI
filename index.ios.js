import HomeScreen from './src/homeScreen';
import {Navigation} from 'react-native-navigation';


Navigation.registerComponent('homeScreen', () => HomeScreen);
Navigation.startSingleScreenApp({
  screen: {
    screen: 'homeScreen',
    title: 'KBPKI'
  }
});
