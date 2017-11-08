/********************************************************
 * What is this component? What props does it take? 
 *
 * @flow
 ********************************************************/
import React, { PropTypes, Component } from 'react'
import { 
  AlertIOS,
  Image, 
  Text, 
  TouchableOpacity,
  StyleSheet, 
  View, 
} from 'react-native'

export default function Tab (props) {
    return (
        <View style={styles.tab}>
          <TouchableOpacity style={styles.tabInner} onPress={() => {props.updateActiveTab(props.tabNum)}}>
            <Image source={props.icon} style={styles.tabIcon} />
            <Text style={styles.tabText}>{props.title}</Text>
          </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
  tabInner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tab: {
    flex: .33,
    justifyContent: "center",
    alignItems: "center"
  },
  tabIcon: {
    width: 30,
    height: 30,
  },
  tabText: {
    textAlign: "center",
    alignItems: "center",
    fontSize: 12,
    color: "#ccc"
  }
})
