/********************************************************
 * What is this component? What props does it take? 
 *
 * @flow
 ********************************************************/
import React, { PropTypes } from 'react'
import { 
  AlertIOS,
  Image, 
  Text, 
  TouchableOpacity,
  StyleSheet, 
  View, 
} from 'react-native'

import Tab from './Tab'
import TabCenter from './TabCenter'

TabBar.propTypes = {

}

export default function TabBar (props) {
  return (
    <View style={styles.container}>
        <Tab 
          navigator={props.navigator} 
          updateActiveTab={props.updateActiveTab} 
          title="Your Notes"
          icon={{uri: "https://placehold.it/50x50&text=%20"}}
          tabNum={1} />
        <TabCenter 
          navigator={props.navigator} />
        <Tab 
          navigator={props.navigator} 
          updateActiveTab={props.updateActiveTab} 
          title="Settings"
          icon={{uri: "https://placehold.it/50x50&text=%20"}}
          tabNum={2} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 52,
    backgroundColor: "#f7f7f7"
  },
})

