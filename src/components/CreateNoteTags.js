/********************************************************
 * What is this component? What props does it take? 
 *
 * @flow
 ********************************************************/
import React, { PropTypes, Component } from 'react'
import { 
  View, 
  ScrollView, 
  Text, 
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native'

export default class CreateNoteTags extends Component {
  constructor(props) {
    super(props)
  }
  _addTag = () => {
    console.log(this.props.tagDraft)
    this.props.addTag(this.props.tagDraft)
  }

  _renderTagInput = () => {
    return (
      <TextInput 
        style={styles.tagInput}
        placeholder="Add Tag"
        value={this.props.tagDraft}
        onEndEditing={() => this._addTag()}
        onChangeText={(t) => this.props.updateTagDraft(t)}
      />
    )
  }
  _renderTags = (tag, i) => {
    return (
      <View style={styles.tagButton}>
        <Text style={styles.tagText}>
          {tag}
        </Text>
      <TouchableOpacity style={styles.tagX} onPress={() => this.props.removeTag(i)}>
        <Text style={styles.tagXText}>
          x
        </Text>
      </TouchableOpacity>
      </View>
    )
  }
  static propTypes = {}
  render () {
    return (
      <View style={styles.container}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}> 
        <View style={styles.tagsWrapper}>
        {this.props.tags.length > 0
          ? this.props.tags.map(this._renderTags)
          : null }
          </View>
        </ScrollView>
        {this._renderTagInput()}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    paddingBottom: 12
  },
  tagsWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 4
  },
  tagButton: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: "#ccc",
    marginRight: 4,
    flexDirection: "row"
  },
  tagX: {
    marginLeft: 3
  },
  tagText: {
    fontSize: 16
  },
  tagXText: {
    fontSize: 16
  }
})
