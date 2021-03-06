import { View, StyleSheet, TouchableHighlight, Text, Alert, Button } from 'react-native'
import Modal from 'react-native-modal'
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

    <TouchableHighlight onPress={openModal} style={styles.buttonOpen}>
      <Text style={styles.buttonText}> Add medicine </Text>
    </TouchableHighlight>

    <Modal
      visible={ui.showModal}
      style={styles.modal}
      animationType={'slide'}
      presentationStyle='formSheet'
    >

      <Admin addMed={addMed} editMed={editMed} edditing={ui.edditig} closeModal={closeModal} style={styles.admin} />
      <TouchableHighlight onPress={closeModal} style={styles.closeBtn}>
        <Text style={styles.close}>close</Text>
      </TouchableHighlight>

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
    flex: 1,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 9,
    borderRadius: 20,

  },
  closeBtn: {
    backgroundColor: '#C9262D',
    position: 'absolute',
    justifyContent: 'center',
    top: 0,
    right: 0,
    width: 60,
    height: 60
  },

  close: {
    alignSelf: 'center',
    color: 'white',
  }

})

export default App
