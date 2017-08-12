import React, {Component} from 'react'
import { AppRegistry, Text, StyleSheet, Button } from 'react-native';


class Admin extends Component {
  addMedicne(e) {
    e.preventDefault()
    this.props.addMed(this.name.value, this.brand.value, this.mg.value, this.alarm.value)
    this.props.closeModal()
  }

  editMedicine(e) {
    e.preventDefault()
    // console.log("DATOS:", this.name.value, this.brand.value, this.mg.value, this.alarm.value, this.props.edditing.i)
    this.props.editMed(this.name.value, this.brand.value, this.mg.value, this.alarm.value, this.props.edditing.i)
    this.props.closeModal()
  }

  render() {
    // checking if there are any information to edit in the state.ui.edditing
    if (this.props.edditing) {
      return (
        <View style={styles.medicineList}>
          <Text>Edditing</Text>
          {/*
            <form onSubmit={(e) => this.editMedicine(e)}>
            <label htmlFor="name">Medcine Name</label>
            <input type="text" id="name" name="name" ref={(input) => this.name = input} defaultValue={this.props.edditing.name}/>
            <label htmlFor="brand">Brand</label>
            <input type="text" id="brand" name="brand" ref={(input) => this.brand = input} defaultValue={this.props.edditing.brand}/>
            <label htmlFor="mg">Mg</label>
            <input type="text" id="mg" name="mg" ref={(input) => this.mg = input} defaultValue={this.props.edditing.mg}/>
            <label htmlFor="alarm">alarm</label>
            <input type="text" id="alarm" name="alarm" ref={(input) => this.alarm = input} defaultValue={this.props.edditing.alarm}/>
            <Button className="save-add"> save medicine </Button>
          </form> */}
        </View>
      )
    }

    return (
      <View style={styles.medicineList}>
        <Text>Add Medicine</Text>

        {/* <form onSubmit={(e) => this.addMedicne(e)}>
          <label htmlFor="name">Medcine Name</label>
          <input type="text" id="name" name="name" ref={(input) => this.name = input}/>
          <label htmlFor="brand">Brand</label>
          <input type="text" id="brand" name="brand" ref={(input) => this.brand = input}/>
          <label htmlFor="mg">Mg</label>
          <input type="text" id="mg" name="mg" ref={(input) => this.mg = input}/>
          <label htmlFor="alarm">alarm</label>
          <input type="text" id="alarm" name="alarm" ref={(input) => this.alarm = input}/>
          <Button className="save-add"> add medicine </Button>
        </form> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  medicineList: {
    flex: 1,
  },

  medicnes:{
    backgroundColor:'red',
    textAlign:'left',
    width:'80%',
    marginBottom:5,
  },
});


export default Admin
