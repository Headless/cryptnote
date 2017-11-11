/********************************************************
 * Notes Container component
 *
 * @flow
 ********************************************************/
import React, { PropTypes, Component } from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'

// import custom components
import NotesHeader from '../components/NotesHeader'
import NotesRow from '../components/NotesRow'

export default class NotesView extends Component {
  constructor(props) {
    super(props)
  }
  static propTypes = {}
  _renderNoteRow = (note) => {
    return (
      <NotesRow 
        note={note} 
        navigator={this.props.navigator}
        key={note.id}/>
    )
    
  }
  _renderEmpty = () => {
    return <Text>No Notes</Text>
  }
  render () {
    return (
    <View style={styles.container}>
      <NotesHeader style={styles.headerContainer} />
    <ScrollView style={styles.scrollContainer}>
    { this.props.notes.length > 0
      ? this.props.notes.map(this._renderNoteRow)
      : this._renderEmpty() }
    </ScrollView>
    </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    flex: 1,
  },
  scrollContainer: {
    flex: 6
  }
})
