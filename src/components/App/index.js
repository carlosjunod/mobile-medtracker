import { View, Button, StyleSheet, TouchableHighlight,Text } from 'react-native'
import Modal from 'react-native-modal'

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
  <View style={styles.container}>
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
      onPress={this.openModal}
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
  </View>
)

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    alignSelf: 'stretch',
    // backgroundColor: 'silver',
    justifyContent: 'space-between'
  },

  buttonOpen: {
    // flex: 1,
    backgroundColor: 'blue',
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    // alignItem: 'flex-end'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  modal: {
    // flex: 1,
    // backgroundColor: 'gray',
  },
})

export default App
