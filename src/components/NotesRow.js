/********************************************************
 * What is this component? What props does it take? 
 *
 * @flow
 ********************************************************/
import React, { PropTypes, Component } from 'react'
import { 
  View, 
  StyleSheet, 
  Text,
  TouchableOpacity
} from 'react-native'

export default class NotesRow extends Component {
  constructor(props) {
    super(props);
  }
  _renderTags  = (tag, i) => {
    return (
      <View style={styles.tagHolder} key={i}>
        <TouchableOpacity onPress={() => null}>
          <Text style={styles.tag}>{tag}</Text>
        </TouchableOpacity>
      </View>
    )
  }
  render() {
    return (
      <TouchableOpacity style={styles.rowContainer}>
        <View style={styles.noteRowMeta}> 
          <Text>{this.props.note.id}d</Text>
        </View>
        <View style={styles.noteRowBody}>
          <Text style={styles.noteTitle}>{this.props.note.title}</Text>
          <View style={styles.excerptHolder}>
            <Text style={styles.text}>{this.props.note.excerpt}</Text>
          </View>
          <View style={styles.tagsWrapper}>
            { this.props.note.tags.length > 0
              ? this.props.note.tags.map(this._renderTags)
              : null }
          </View>
        </View>
        
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    alignSelf: "stretch",
    padding: 18,
    borderBottomWidth: 1,
    borderColor: "#000000",
    flexDirection: "row"
  }, 
  noteTitle: {
    fontSize: 22,
    color: "#333",
    fontWeight: "bold"
  },
  text: {
    color: "#000000"
  },
  noteRowMeta: {
    flex: .12
  },
  noteRowBody: {
    flex: .88
  },
  tagsWrapper: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  tagHolder: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 6,
    paddingRight: 6,
    backgroundColor: "#eee",
    marginRight: 3,
    borderRadius: 4
  },
  tag: {
    color: "#000"
  },
  excerptHolder: {
    marginTop: 8
  }
})

