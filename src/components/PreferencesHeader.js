/********************************************************
 * What is this component? What props does it take? 
 *
 * @flow
 ********************************************************/
import React, { PropTypes } from 'react'
import { View, StyleSheet, Text } from 'react-native'

PreferencesHeader.propTypes = {

}

export default function PreferencesHeader (props) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
      Settings
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

