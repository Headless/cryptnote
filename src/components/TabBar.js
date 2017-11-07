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

TabBar.propTypes = {

}

export default function TabBar (props) {
  return (
    <View style={styles.container}>
        <View style={styles.tab}>
        <TouchableOpacity onPress={() => {props.updateActiveTab(1);}}>
          
          <Image source={require('../assets/icon.png')} style={styles.tabIcon} />
          </TouchableOpacity>
         
        </View>
        <View style={styles.tab}>
        <TouchableOpacity onPress={() => {
          props.navigator.showModal({
            screen: "cryptnote.CreateNoteScreen",
            title: undefined,
            passProps: {},
            animated: true,
            animationType: 'slide-up',
            backButtonTitle: 'back',
            backButtonHidden: false,
            navigatorStyle: {
              navBarHidden: true
            },
            navigatorButtons: {}
          })
        }}>
          <Image source={require('../assets/icon.png')} style={styles.tabIcon} />
          
        </TouchableOpacity>
         
        </View>
        <View style={styles.tab}>
        <TouchableOpacity onPress={() => { props.updateActiveTab(2) }}>
          
          <Image source={require('../assets/icon.png')} style={styles.tabIcon} />
          </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 40,
    backgroundColor: "#cccccc"
  },
  tab: {
    flex: .33,
    justifyContent: "center",
    alignItems: "center"
  },
  tabIcon: {
    width: 30,
    height: 30,
  }
})

