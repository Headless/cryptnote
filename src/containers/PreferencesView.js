/********************************************************
 * Preferences
 *
 * Renders the global preferences to the user, which
 * enables various across the app
 * 
 * @flow
 ********************************************************/

import React, { PropTypes } from 'react'
import { View, StyleSheet, Text } from 'react-native'

PreferencesView.propTypes = {

}

export default function PreferencesView (props) {
  return (
    <View style={styles.container}>
      <Text>
       PreferencesView
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0000ff",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
})

