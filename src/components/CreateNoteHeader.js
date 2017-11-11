/********************************************************
 * What is this component? What props does it take? 
 *
 * @flow
 ********************************************************/
import React, { PropTypes, Component } from 'react'
import { 
  View, 
  AlertIOS,
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
    flex: 1,
    justifyContent: "flex-end",
  },
  titleInput: {
    fontSize: 26,
    marginTop: 8
  }
})
