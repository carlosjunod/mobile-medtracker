import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Item from '../Item/'


const MedicneList = ({ meds, delMed, editMed, editModal }) => (
  <View style={styles.medicineList}>

    <Text style={styles.h1}>My medicines</Text>

    {/* {console.log('HERE MEDICINES 💊->', meds)} */}

    <ScrollView style={styles.containerMed}>
      {/* {console.log(meds)} */}
      {
        meds.map((med, i) =>

          <Item
            key={i}
            i={i}
            med={med}
            delMed={delMed}
            editMed={editMed}
            editModal={editModal}
            style={styles.item}
          >
            {med.name}
          </Item>
        )
      }

    </ScrollView>

  </View>
)

const styles = StyleSheet.create({
  medicineList: {
    // flex: 1,
    // backgroundColor: 'red',
    alignSelf: 'stretch',

  },

  h1: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    textAlign: 'center',
    padding: 10,
    marginBottom: 10,
    color: 'white',
  },

  containerMed: {
    paddingLeft: 10,
    paddingRight: 10,
  }

})

export default MedicneList
