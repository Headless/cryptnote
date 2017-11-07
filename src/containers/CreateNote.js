/********************************************************
 * CreateNote 
 *
 * Container component for handling redux state for the
 * CreateNote.
 ********************************************************/

import React, { PropTypes } from 'react'
import { View, StyleSheet, Text } from 'react-native'

CreateNote.propTypes = {

}

export default function CreateNote (props) {
  return (
    <View style={styles.container}>
      <Text>
       CreateNote
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00FF00",
    justifyContent: "center",
    alignItems: "center"
  }
})
