/**
 * Application Screens
 *
 * Instantiate all screens for the application
 * in this file. It serves as a manifest for 
 * core top-level views in the app
 * 
 * @flow
 */
 // import global navigation
 import { Navigation } from 'react-native-navigation'

 // import components
 import App from './containers/App'
 import CreateNote from './containers/CreateNote'
 import NotesView from './containers/NotesView'
 import PreferencesView from './containers/PreferencesView'
 import RenderNoteView from './containers/RenderNoteView'

 // register screens on our global navigation
 export function registerScreens () {
   Navigation.registerComponent('cryptnote.AppScreen', () => App);
   Navigation.registerComponent('cryptnote.RenderNoteScreen', () => RenderNoteView);
   Navigation.registerComponent('cryptnote.NotesScreen', () => NotesView);
   Navigation.registerComponent('cryptnote.CreateNoteScreen', () => CreateNote);
   Navigation.registerComponent('cryptnote.PreferencesScreen', () => PreferencesView);
 }
