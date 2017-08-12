import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'


class Header extends Component {
  render() {
    // console.log('props: ', this.props.medicines.length);

    return (
      <View style={styles.header}>
        <Text style={[styles.h1, styles.textfield]}> MedTracker </Text>
        <Text style={[styles.textfield]}>
          Today you have {this.props.meds.length} medicines to take today
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    padding: 8,
  },
  h1: {
    fontSize: 25,
  },
  textfield: {
    textAlign: 'center',
  }
})


export default Header
