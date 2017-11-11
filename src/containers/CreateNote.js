/********************************************************
 * CreateNote 
 *
 * Container component for handling redux state for the
 * CreateNote.
 ********************************************************/

import React, { PropTypes, Component } from 'react'
import { 
  AlertIOS,
  ScrollView,
  View, 
  StyleSheet, 
  Text, 
  TouchableOpacity 
} from 'react-native'

// component deps
import  RNFS from 'react-native-fs'

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

  slugify = (text) => {
    return text.toString()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
  }

  
  writeFile = () => {
    let title = this.slugify(this.state.title)
    let body = this.state.body
    let path = RNFS.DocumentDirectoryPath + `/${title}.txt`;

    RNFS.writeFile(path, body, 'utf8')
    .then((success) => {
      return Promise.all([RNFS.stat(result[0].path), result[0].path]);
    })
    .then((statResult) => {
      if (statResult[0].isFile()) {
        // if we have a file, read it
        return RNFS.readFile(statResult[1], 'utf8');
      }

      return 'no file';
    })
  .then((contents) => {
    // log the file contents
    console.log(contents);
  })
    .catch((err) => {
      console.log(err.message);
    });
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
        navigator={this.props.navigator}
        focused={this.state.titleFocused}
        writeFile={() => this.writeFile()}
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
