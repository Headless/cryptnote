/********************************************************
 * App Container
 *
 * Top level view that wraps our entire navigation pattern
 * and passes the navigator through to our components.
 *
 * @flow
 ********************************************************/
import React, { PropTypes, Component } from 'react'
import { 
  View, 
  AlertIOS,
  Text, 
  StyleSheet 
} from 'react-native'

// import our components
import NotesView from './NotesView'
import PreferencesView from './PreferencesView'
import TabBar from '../components/TabBar'

// import our db schema (stubbed)
import { Notes } from '../db/notes.js'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 1
    }
  }
  static propTypes = {}
  _renderNotesScreen = () => {
    return <NotesView navigator={this.props.navigator} notes={Notes} />
  }
  _renderPreferencesScreen = () => {
    return <PreferencesView navigator={this.props.navigator} />
  }
  updateActiveTab = (tabNum) => {
    this.setState({activeTab: tabNum});
  }
  _alertNotes = (note) => {
    AlertIOS.alert(note.title);
  }
  render () {
    return (
      <View style={styles.container}>
      {this.state.activeTab === 1
        ? this._renderNotesScreen()
        : this._renderPreferencesScreen() }
        <TabBar updateActiveTab={(tabNum) => this.updateActiveTab(tabNum)} navigator={this.props.navigator}/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
