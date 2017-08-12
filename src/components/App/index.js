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
    <Header meds={meds} style={styles.header} />
    <MedicneList
      meds={meds}
      delMed={delMed}
      editMed={editMed}
      editModal={editModal}
      style={styles.list}
    />

    {/* <Button
      style={styles.buttonOpen}
      onClick={openModal}
      title="add med"
      color="#841584"
    /> */}

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
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'red',
    flexWrap: 'wrap',
  },
  header: {
    // flex: 1,
    // width: '100%',
  },
  buttonOpen: {
    // flex: 1,
    // backgroundColor: 'green',
  },
  buttonText: {
    // flex: 1,
  },
  modal: {
    // flex: 1,
    // backgroundColor: 'gray',
  },
})

export default App
