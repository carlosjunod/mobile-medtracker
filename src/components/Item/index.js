import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'


class Item extends Component {
  deleteMedicine() {
    this.props.delMed(this.props.i)
  }

  editMedicine() {
    // this.props.editMed('new name', 'new brand', 'new mg', 'new alarm', this.props.i)
    this.props.editModal(
      this.props.med.name,
      this.props.med.brand,
      this.props.med.mg,
      this.props.med.alarm,
      this.props.i
    )
  }
  render() {
    return (
      <View style={styles.item}>
        <Text style={[styles.textfield, styles.h1]} >
          {this.props.med.name}
        </Text>
        <View style={styles.infoContainer}>

          <Text style={styles.textfield}>
            {this.props.med.brand}, {this.props.med.mg}mg
          </Text>
          <Text style={styles.textfield}>
            {this.props.med.alarm}
          </Text>

        </View>

        <View style={styles.buttonWrapper}>

          {/* delete button */}
          <TouchableHighlight
            onPress={(e)=>this.deleteMedicine()}
            style={[styles.button, styles.delete]}
          >
            <Text style={styles.buttonText}> del </Text>
          </TouchableHighlight>

          {/* edit button */}

          <TouchableHighlight
            onPress={(e)=>this.deleteMedicine()}
            style={[styles.button, styles.edit]}
          >
            <Text style={styles.buttonText}> edit </Text>
          </TouchableHighlight>

        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'transparent',
    marginBottom: 5,
  },

  textfield: {
    color: 'white',
    fontSize: 16,
  },

  h1: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  infoContainer: {
    flexDirection: 'row',
    marginBottom: 4,
  },

  buttonWrapper: {
    flexDirection: 'row',
  },

  button: {
    // flex: 1,
    marginRight: 5,
    padding: 5,
    width: 100,
  },
  delete: {
    backgroundColor: '#4D4C8F',
  },

  edit: {
    backgroundColor: '#64CFB8',
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
  }
})

export default Item
