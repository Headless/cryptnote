// OLD RN INIT
//import { AppRegistry } from 'react-native';
//import App from './src/App';
//AppRegistry.registerComponent('cryptnote', () => App);


/**
 * Application Entrypoint
 *
 * Instantiates the tabBasedApp and registers
 * our screens from ./src/screens.js
 * 
 */
import { Navigation } from 'react-native-navigation'
import { registerScreens } from './src/screens'


// call registerScreens method
registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: 'cryptnote.AppScreen',
    title: 'Notes',
    navigatorStyle: {
      navBarHidden: true,
    },
    navigatorButtons: {}
  }
})

