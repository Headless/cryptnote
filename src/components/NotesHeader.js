/********************************************************
 * What is this component? What props does it take? 
 *
 * @flow
 ********************************************************/
import React, { PropTypes } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

NotesHeader.propTypes = {

}

export default function NotesHeader (props) {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.headerText}>
          Notes
        </Text>
      </View>
      <View style={styles.searchWrapper}>
        <TouchableOpacity onPress={() => console.log("onPress")}>
          <Text>SB</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    paddingTop: 22,
    paddingBottom: 10,
    paddingLeft: 16,
    shadowColor: '#999',
    shadowOpacity: 0.8,
    shadowRadius: 4,
    flexDirection: "row"
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold"
  },
  titleWrapper: {
    flex: .8,
    justifyContent: "flex-start"
  },
  searchWrapper: {
    flex: .2,
    justifyContent: "center",
    alignItems: "center"
  }
})

