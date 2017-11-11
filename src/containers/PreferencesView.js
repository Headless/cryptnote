/********************************************************
 * Preferences
 *
 * Renders the global preferences to the user, which
 * enables various across the app
 * 
 * @flow
 ********************************************************/

import React, { PropTypes } from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'

import PreferencesRow from '../components/PreferencesRow'
import PreferencesHeader from '../components/PreferencesHeader'

PreferencesView.propTypes = {
}

export default function PreferencesView (props) {
  return (
    <View style={styles.container}>
      <PreferencesHeader />
      <ScrollView>
        <PreferencesRow />
        <PreferencesRow />
        <PreferencesRow />
        <PreferencesRow />
        <PreferencesRow />
        <PreferencesRow />
        <PreferencesRow />
        <PreferencesRow />
        <PreferencesRow />
        <PreferencesRow />
        <PreferencesRow />
        <PreferencesRow />
        <PreferencesRow />
        <PreferencesRow />
        <PreferencesRow />
        <PreferencesRow />
        <PreferencesRow />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1
  }
})

