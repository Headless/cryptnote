/********************************************************
 * What is this component? What props does it take? 
 *
 * @flow
 ********************************************************/
import React, { PropTypes } from 'react'
import { View, StyleSheet, Text } from 'react-native'

NotesRow.propTypes = {

}

export default function NotesRow (props) {
  return (
    <View style={styles.rowContainer}>
      <Text>
       NotesRow
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  rowContainer: {
    alignSelf: "stretch",
    padding: 18,
    borderTopWidth: 1,
    borderColor: "#000000"
  }
})

