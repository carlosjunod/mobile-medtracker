import React, { Component } from 'react'
import { StyleSheet, Text, View, Button} from 'react-native';


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
        <Button onPress={(e)=>this.deleteMedicine()} title="del" style={styles.button} />
        <Button onPress={(e)=>this.editMedicine()} title="delete" style={styles.button} />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'purple',
    borderWidth:1,
    borderColor:'white',
  },

  textfield: {

  },
})

export default Item
