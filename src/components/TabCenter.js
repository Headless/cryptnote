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

TabCenter.propTypes = {

}

export default function TabCenter (props) {
  return (
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
          <Image source={{uri: "https://placehold.it/60x60/00ff00&text=%20"}} style={styles.centerTab} />
          
        </TouchableOpacity>
        </View>
  )
}

const styles = StyleSheet.create({
  centerTab: {
    width: 60,
    height: 60
  }
})

