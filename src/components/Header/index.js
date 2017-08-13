import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'


class Header extends Component {
  render() {
    // console.log('props: ', this.props.medicines.length);

    return (
      <View>
        <Text style={styles.h1}>Med<Text style={styles.bold}>Tracker</Text></Text>
        <View style={styles.headerContainer}>

          <Text style={styles.textfield}>You have </Text>
          <View style={styles.numberContainer}>
            <Text style={styles.number}>
              {this.props.meds.length}
            </Text>
          </View>
          <Text style={styles.textfield}>to take today</Text>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 14,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 15,
    justifyContent: 'center',
  },
  textfield: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    color: '#4D4C8F',
    fontSize: 18,
  },
  h1: {
    fontSize: 28,
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'transparent',
    marginBottom: 8,
  },

  bold: {
    fontWeight: 'bold',
  },

  numberContainer: {
    borderRadius: 5,
    backgroundColor: '#5BCDB4',
    marginLeft: 2,
    marginRight: 2,
    padding: 5,
  },

  number: {
    color: 'white',
    fontWeight: 'bold',
    lineHeight: 15,
  }
})


export default Header
