/********************************************************
 * What is this component? What props does it take? 
 *
 * @flow
 ********************************************************/
import React, { PropTypes, Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

// import custom components
import TabBar from '../components/TabBar'

export default class NotesView extends Component {
  constructor(props) {
    super(props)
  }
  static propTypes = {}
  render () {
    return (
    <View style={styles.container}>
      <Text>NotesView</Text>
    </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})
