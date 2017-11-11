/********************************************************
 * What is this component? What props does it take? 
 *
 * @flow
 ********************************************************/
import React, { PropTypes, Component } from 'react'
import { 
  TouchableOpacity,
  ScrollView, 
  Text, 
  StyleSheet 
} from 'react-native'

import Markdown from 'react-native-simple-markdown'

export default class RenderNoteView extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {}

  render () {
    return (
      <ScrollView style={styles.noteView}>
      <TouchableOpacity onPress={() => this.props.navigator.pop()}>
      <Text style={styles.noteTitle}>{this.props.note.title}</Text>
      <Text style={styles.noteTagsWrapper}>{this.props.note.tags}</Text>
      <Markdown styles={styles}>
        {this.props.note.body}
      </Markdown>    
      </TouchableOpacity>

 
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  heading1: {
    fontSize: 22,
  },
  strong: {
    fontSize: 18,
    fontWeight: "bold"
  },
  paragraph: {
    fontSize: 14,
  },
  view: {
  },
  noteTitle: {
    fontSize: 26,
    fontWeight: "bold"
  },
  noteView: {
    paddingTop: 20
  }
})
