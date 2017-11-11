/********************************************************
 * What is this component? What props does it take? 
 *
 * @flow
 ********************************************************/
import React, { PropTypes, Component } from 'react'
import { 
  ScrollView,
  View, 
  TextInput, 
  Text, 
  Dimensions,
  StyleSheet 
} from 'react-native'

export default class CreateNoteBody extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: props.viewHeight
    }
  }

  static propTypes = {}

  _handleHeightChange = (e) => {
    let _height = e.nativeEvent.contentSize.height
    this.props.viewHeight < _height 
      ? this.setState({height: _height})
      : this.setState({height: this.props.viewHeight})
  }

  render () {
    return (
        <TextInput 
          style={[styles.noteBody, {height: this.state.height}]}
          onContentSizeChange={(e) => this._handleHeightChange(e)}
          autogrow={true}
          multiline={true} />

    )
  }
}
const styles = StyleSheet.create({
  noteBody: {
    fontSize: 16,
    marginBottom: 12
  }
})
