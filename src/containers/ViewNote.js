/********************************************************
 * What is this component? What props does it take? 
 *
 * @flow
 ********************************************************/
import React, { PropTypes, Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class RenderNoteView extends Component {
  constructor(props) {
    super(props)
  }
  static propTypes = {}
  render () {
    return (
      <View style={styles.container}>
        <Text>
          RenderNoteView
        </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
