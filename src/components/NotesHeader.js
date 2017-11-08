/********************************************************
 * What is this component? What props does it take? 
 *
 * @flow
 ********************************************************/
import React, { PropTypes } from 'react'
import { View, StyleSheet, Text } from 'react-native'

NotesHeader.propTypes = {

}

export default function NotesHeader (props) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
      Notes
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    paddingBottom: 10
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold"
  }
})

