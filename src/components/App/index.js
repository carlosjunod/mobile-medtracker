import { View, StyleSheet, TouchableHighlight, Text, Alert } from 'react-native'
import Modal from 'react-native-modal'
// import LinearGradient from 'react-native-linear-gradient'
import { LinearGradient } from 'expo'

import React from 'react'


import MedicneList from '../MedicineList/'
import Header from '../Header/'
import Admin from '../Admin/'
// import Modal from 'react-modal'
// const prettyTime = (sec)=>{
//   Math.floor(sec/60) + ':' + ('0' + sec % 60).slice(-2)
// }

const App = ({
  meds,
  ui,
  getMeds,
  addMed,
  editMed,
  delMed,
  setAlarm,
  openModal,
  closeModal,
  editModal,

}) => (

  <LinearGradient colors={['#4d478e', '#55ceb4']} style={styles.container}>
    <View style={styles.topContainer}>
      <Header meds={meds} style={styles.header} />
      <MedicneList
        meds={meds}
        delMed={delMed}
        editMed={editMed}
        editModal={editModal}
        style={styles.list}
      />
    </View>

    <TouchableHighlight
      openModal={this.openModal}
      onPress={this.openModal}
      // onPress={() => Alert.alert(
      //   'Alert Title',
      //   'I am here',
      // )}
      style={styles.buttonOpen}
    >
      <Text style={styles.buttonText}> Add medicine </Text>
    </TouchableHighlight>

    <Modal
      isOpen="true"
      style={styles.modal}
      overlayClassName="modal-overlay"
      contentLabel="add medicine"
    >
      <Text>hey!</Text>
      <Admin addMed={addMed} editMed={editMed} edditing={ui.edditig} closeModal={closeModal} />
      <button onClick={closeModal} className="close-modal">close</button>
    </Modal>
  </LinearGradient>

)

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    paddingBottom: 10,
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },

  buttonOpen: {

    backgroundColor: 'white',
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#55ceb4',
    textAlign: 'center',
  },
  modal: {
    // flex: 1,
    // backgroundColor: 'gray',
  },
})

export default App
