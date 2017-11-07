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

// Instantiate
//Navigation.startTabBasedApp({
  //tabs: [
    //{
      //label: 'Notes',
      //screen: 'cryptnote.NotesViewScreen',
      //icon: require('./src/assets/icon.png'),
      //selectedIcon: require('./src/assets/icon.png'),
      //title: 'Notes'
    //},
    //{
      //label: 'NewNote',
      //screen: 'cryptnote.NewNoteScreen',
      //icon: require('./src/assets/icon.png'),
      //selectedIcon: require('./src/assets/icon.png'),
      //title: 'New Note'
    //},
    //{
      //label: 'Preferences',
      //screen: 'cryptnote.PreferencesScreen',
      //icon: require('./src/assets/icon.png'),
      //selectedIcon: require('./src/assets/icon.png'),
      //title: 'Preferences'
    //},
  //]
//});
