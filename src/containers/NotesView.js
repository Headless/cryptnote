/********************************************************
 * NotesView 
 *
 * Container component for handling redux state for the
 * NotesView.
 ********************************************************/

import React, { PropTypes } from 'react'
import { View, StyleSheet, Text } from 'react-native'

NotesView.propTypes = {

}

export default function NotesView (props) {
  return (
    <View style={styles.container}>
      <Text>
       NotesView
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF0000",
    justifyContent: "center",
    alignItems: "center"
  }
})
