/********************************************************
 * What is this component? What props does it take? 
 *
 * @flow
 ********************************************************/
import React, { PropTypes, Component } from 'react'
import { 
  View, 
  StyleSheet, 
  Picker,
  Text, 
  TouchableOpacity } from 'react-native'


export default class NotesHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "tags"
    };
  }
  render() {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.headerText}>
          Notes
        </Text>
      </View>
      <View style={styles.filterWrapper}>
        <TouchableOpacity style={styles.filterButton} onPress={() => console.log("onPress")}>
        <Text>Filter by</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchWrapper}>
        <TouchableOpacity onPress={() => console.log("onPress")}>
          <Text style={styles.searchButton}>SB</Text>
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
    shadowColor: '#999',
    shadowOpacity: 0.8,
    shadowRadius: 4,
    flexDirection: "row"
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold"
  },
  titleWrapper: {
    flex: .4,
    justifyContent: "flex-end",
  },
  searchWrapper: {
    flex: .2,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  searchButton: {
    backgroundColor: "#e9e9e9",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 4,
  },
  filterWrapper: {
    flex: .4,
    justifyContent: "flex-end",
    alignItems: "flex-start"
  },
  filterHolder: {

  },
  filterButton: {
    backgroundColor: "#e9e9e9",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 4,
  }
})

