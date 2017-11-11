/********************************************************
 * CreateNote 
 *
 * Container component for handling redux state for the
 * CreateNote.
 ********************************************************/

import React, { PropTypes, Component } from 'react'
import { 
  ScrollView,
  View, 
  StyleSheet, 
  Text, 
  TouchableOpacity 
} from 'react-native'

// import custom components
import CreateNoteHeader from '../components/CreateNoteHeader'
import CreateNoteTags from '../components/CreateNoteTags'
import CreateNoteBody from '../components/CreateNoteBody'

export default class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      tags: [],
      body: "Example body",
      tagDraft: "",
      bodyFocused: false,
      titleFocused: true,
      tagsFocused: false
    }
  }

  updateTitle = (title) => {
    this.setState({title: title})
  }

  updateTagDraft = (tag) => {
    this.setState({tagDraft: tag})
  }

  addTag = (tag) => {
    let _tags = this.state.tags
    _tags.push(tag)
    this.setState({
      tags: _tags,
      tagDraft: ""
    })
  }

  removeTag = (tagId) => {
    let _tags = this.state.tags
    _tags.splice(tagId, 1)
    this.setState({
      tags: _tags,
    })
  }
  _handleViewHeight = (e) => {
    this.setState({
      viewHeight: e.nativeEvent.layout.height - 160,
      scrollHeight: e.nativeEvent.layout.height
    })
  }

  _scrollToEnd = () => {
    this.scrollView.scrollToEnd({animated: true})
  }

  render() {
    return (
      <ScrollView style={styles.container}
        ref={ref => this.scrollView = ref}
        onContentSizeChange={() => this._scrollToEnd() }       
        onLayout={(e) => this._handleViewHeight(e)}>
      <CreateNoteHeader 
        title={this.state.title}
        focused={this.state.titleFocused}
        updateTitle={(title) => this.updateTitle(title)}/>
        <View style={styles.createNoteBodyWrapper}>
          <CreateNoteTags
            tags={this.state.tags}
            focused={this.state.tagsFocused}
            addTag={(tag) => this.addTag(tag)}
            removeTag={(tag) => this.removeTag(tag)}
            tagDraft={this.state.tagDraft}
            updateTagDraft={(tag) => this.updateTagDraft(tag)} />
          <CreateNoteBody
            viewHeight={this.state.viewHeight}
            body={this.state.body}/>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  createNoteBodyWrapper: {
    paddingLeft: 16,
    paddingRight: 16
  }
})
