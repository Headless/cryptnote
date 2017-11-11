/********************************************************
 * What is this component? What props does it take? 
 *
 * @flow
 ********************************************************/
import React, { PropTypes } from 'react'
import { ScrollView, View, StyleSheet, Text } from 'react-native'

PreferencesRow.propTypes = {

}

export default function PreferencesRow (props) {
  return (
    <View style={styles.rowContainer}>
      <Text>
       PreferencesRow
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  rowContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: "#000",
    alignSelf: "stretch"
  }
})

