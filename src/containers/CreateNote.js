/********************************************************
 * CreateNote 
 *
 * Container component for handling redux state for the
 * CreateNote.
 ********************************************************/

import React, { PropTypes, Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default class CreateNote extends Component {
  constructor(props) {
    super(props);
  }
  render() {
  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={() =>{
      this.props.navigator.dismissModal({
        animationType: "slide-down"
      })
    }}> 
      <Text>
       CreateNote
      </Text>
    </TouchableOpacity>
    </View>
  )
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00FF00",
    justifyContent: "center",
    alignItems: "center"
  }
})
