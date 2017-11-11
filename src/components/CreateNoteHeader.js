/********************************************************
 * What is this component? What props does it take? 
 *
 * @flow
 ********************************************************/
import React, { PropTypes, Component } from 'react'
import { 
  View, 
  AlertIOS,
  TouchableOpacity,
  TextInput,
  Text, 
  StyleSheet 
} from 'react-native'

export default class CreateNoteHeader extends Component {
  constructor(props) {
    super(props)
  }
  static propTypes = {}
  _handleEndEditing = (text) => {
    console.log(text)
  }
  _dismiss = () => {
    this.props.writeFile()
    this.props.navigator.dismissModal()
  }
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <TextInput
            style={styles.titleInput}
            onChangeText={(title) => this.props.updateTitle(title)}
            onEndEditing={(t) => this._handleEndEditing(t)}
            autoFocus={this.props.focused}
            placeholder="Enter Your Title"
            value={this.props.title}/>
        </View>
        <View style={styles.exitWrapper}>
        <TouchableOpacity hitSlop={{top: 12, left: 10, right: 10, bottom: 10}} style={styles.exit} onPress={() => this._dismiss()}>
           <Text style={styles.x}>X</Text>
        </TouchableOpacity>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    paddingTop: 22,
    paddingBottom: 10,
    paddingLeft: 16,
    flexDirection: "row"
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold"
  },
  titleWrapper: {
    flex: .9,
    justifyContent: "flex-end",
  },
  titleInput: {
    fontSize: 26,
    marginTop: 8
  },
  exitWrapper: {
    flex: .1
  },
  exitButton: {
    padding: 8,
    backgroundColor: "#ccc"
  },
  x: {
    fontSize: 20
  }
})
