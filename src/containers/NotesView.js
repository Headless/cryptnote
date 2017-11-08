/********************************************************
 * What is this component? What props does it take? 
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
  render () {
    return (
    <View style={styles.container}>
      <NotesHeader style={styles.headerContainer} />
    <ScrollView style={styles.scrollContainer}>
      <NotesRow />
      <NotesRow />
      <NotesRow />
      <NotesRow />
      <NotesRow />
      <NotesRow />
      <NotesRow />
      <NotesRow />
      <NotesRow />
      <NotesRow />
      <NotesRow />
      <NotesRow />
      <NotesRow />
      <NotesRow />
      <NotesRow />
      <NotesRow />
      <NotesRow />
      <NotesRow />
    </ScrollView>
    </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 22,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: "flex-end",
    flex: 1,
  },
  scrollContainer: {
    flex: 6
  }
})
