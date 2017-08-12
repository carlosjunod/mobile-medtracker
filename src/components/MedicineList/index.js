import React from 'react'
import Item from '../Item/'
import { StyleSheet, Text, View, Button} from 'react-native';


const MedicneList = ({ meds, delMed, editMed, editModal }) => (
  <View style={styles.medicineList}>

    <Text>My medicines</Text>

    {/* {console.log('HERE MEDICINES 💊->', meds)} */}
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


  </View>
)

const styles = StyleSheet.create({
  medicineList: {
    backgroundColor: 'orange',
  },

})

export default MedicneList
