import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native'


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
        <Text style={styles.textfield}>{this.props.med.name}</Text>
        <Text style={styles.textfield}>
          {this.props.med.brand}, {this.props.med.mg}mg
        </Text>
        <Text style={styles.textfield}>
          {this.props.med.alarm}
        </Text>

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
    )
  }
}

const styles = StyleSheet.create({
  item: {

  },

  textfield: {

  },

  button: {

  },
  delete: {
    backgroundColor: 'red',
  },

  edit: {
    backgroundColor: 'green',
  },

  buttonText: {
    color: 'white',
  }
})

export default Item
