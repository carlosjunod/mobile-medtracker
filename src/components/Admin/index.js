import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker'
import moment from 'moment'

class Admin extends Component {

  state = {
    ...this.props.edditing,
    isDateTimePickerVisible: false,
  };

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })

  _handleDatePicked = (date) => {
    this.setState({ alarm: new Date(date) })
    this._hideDateTimePicker()
  }

  _updateDatePicked = (date) => {
    this.setState({ ...this.props.edditing, alarm: new Date(date) })
    this._hideDateTimePicker()
  }

  addMedicne() {
    console.log('-----------------> ADMIN ADD', this.state)
    // console.log(this.state.name, this.state.brand, this.state.mg, this.state.alarm)
    this.props.addMed(this.state.name, this.state.brand, this.state.mg, this.state.alarm)
    this.props.closeModal()
  }

  editMedicine() {
    console.log('-----------------> ADMIN EDIT')
    console.log('DATOS: ',
    this.state.name,
    this.state.brand,
    this.state.mg,
    this.state.alarm,
    this.props.edditing.i)
    this.props.editMed(
      this.state.name,
      this.state.brand,
      this.state.mg,
      this.state.alarm,
      this.props.edditing.i
    )
    this.props.closeModal()
  }

  render() {
    // checking if there are any information to edit in the state.ui.edditing
    if (this.props.edditing) {

      console.log('//////// EDDITING', this.props.edditing)
      console.log('STATE EDDITING:', this.state)
      return (

        <View style={styles.formContainer}>

          <View style={styles.titleForm}>
            <Text style={styles.title}>Editing {this.props.edditing.name}</Text>
          </View>


          <View style={styles.form}>

            <Text style={styles.label}>Medicine Name</Text>
            <TextInput
              onChangeText={(name) => this.setState({ ...this.props.edditing, name })}
              defaultValue={this.props.edditing.name}
              style={styles.input}
              blurOnSubmit={true}
            />

            <Text style={styles.label}>Brand</Text>
            <TextInput
              onChangeText={(brand) => this.setState({ ...this.props.edditing, brand })}
              defaultValue={this.props.edditing.brand}
              style={styles.input}
              blurOnSubmit={true}
            />

            <Text style={styles.label}>Mg</Text>
            <TextInput
              onChangeText={(mg) => this.setState({ ...this.props.edditing, mg })}
              defaultValue={this.props.edditing.mg}
              style={styles.input}
              blurOnSubmit={true}
            />

            <TouchableOpacity
              onPress={this._showDateTimePicker}
              style={[styles.button, styles.setTime]}
            >
              <Text
                style={styles.btnText} >
                Change {moment(this.state.alarm).format('LT')}
              </Text>
            </TouchableOpacity>

            <DateTimePicker
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this._updateDatePicked}
              onCancel={this._hideDateTimePicker}
              mode='datetime'
            />

            <TouchableHighlight
              style={[styles.button, styles.edit]}
              onPress={this.editMedicine.bind(this)}
            >
              <Text style={styles.btnText}>save medicine</Text>
            </TouchableHighlight>

          </View>
        </View>
      )
    }

    console.log('////////  ADDING')
    return (
      <View style={styles.formContainer}>

        <View style={styles.titleForm}>
          <Text style={styles.title}>Add new medicine</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>Medicine Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={(name) => this.setState({ name })}
            blurOnSubmit={true}
          />
          <Text style={styles.label}>Brand</Text>
          <TextInput
            style={styles.input}
            onChangeText={(brand) => this.setState({ brand })}
            blurOnSubmit={true}
          />
          <Text style={styles.label}>Mg</Text>
          <TextInput
            style={styles.input}
            onChangeText={(mg) => this.setState({ mg })}
            blurOnSubmit={true}
          />
          {/* <Text style={styles.label}>Alarm</Text> */}

          <TouchableOpacity
            onPress={this._showDateTimePicker}
            style={[styles.button, styles.setTime]}
          >
            <Text style={styles.btnText}>Set Alarm ({moment(this.state.alarm).format('LT')})</Text>
          </TouchableOpacity>

          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this._handleDatePicked}
            onCancel={this._hideDateTimePicker}
            mode='datetime'
          />

          <TouchableHighlight
            style={[styles.button, styles.save]}
            onPress={this.addMedicne.bind(this)}
          >
            <Text style={styles.btnText}>save medicine</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
    }

}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    // backgroundColor: 'green',
    paddingTop: 25,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },

  medicnes: {
    backgroundColor: 'red',
    textAlign: 'left',
    width: '80%',
    marginBottom: 5,
  },

  titleForm: {
    flex: 1,
    // backgroundColor: 'orange',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },

  form: {
    flex: 6,
    // backgroundColor: '#53F082',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4d478e'
  },

  label: {
    marginBottom: 2,
  },

  input: {
    height: 40,
    // backgroundColor: 'blue',
    padding: 5,
    borderWidth: 1,
    borderColor: 'silver',
    shadowColor: 'black',
    shadowOffset: { width: 20, height: 20 },
    shadowRadius: 20,
    marginBottom: 20,
  },

  button: {
    // flex: 1,
    backgroundColor: '#4d478e',
    padding: 15,
    // alignSelf: 'center',
    borderRadius: 10
  },

  btnText: {
    color: 'white',
    // backgroundColor: 'red',
    textAlign: 'center',
  },
  setTime: {
    backgroundColor: '#53F082',
    marginBottom: 10,
  }
})


export default Admin
